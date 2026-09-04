from typing import List

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="AI Workflow Builder API")

# Local development frontend. Keep the API boundary explicit rather than
# allowing arbitrary browser origins.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)


class Node(BaseModel):
    id: str


class Edge(BaseModel):
    source: str
    target: str


class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]


@app.get("/")
def root():
    return {"message": "AI Workflow Builder API is running"}


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)

    graph = {node.id: [] for node in pipeline.nodes}

    # Invalid references cannot form a valid workflow graph. Treat them as
    # invalid input instead of allowing a missing-node lookup to raise a 500.
    for edge in pipeline.edges:
        if edge.source not in graph or edge.target not in graph:
            return {
                "num_nodes": num_nodes,
                "num_edges": num_edges,
                "is_dag": False,
            }
        graph[edge.source].append(edge.target)

    visited = set()
    visiting = set()

    def dfs(node: str) -> bool:
        if node in visiting:
            return False
        if node in visited:
            return True

        visiting.add(node)

        for neighbour in graph[node]:
            if not dfs(neighbour):
                return False

        visiting.remove(node)
        visited.add(node)
        return True

    for node in graph:
        if node not in visited and not dfs(node):
            return {
                "num_nodes": num_nodes,
                "num_edges": num_edges,
                "is_dag": False,
            }

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": True,
    }
