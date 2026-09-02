from typing import List

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="AI Workflow Builder API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
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


@app.get("/api")
def root():
    return {"message": "AI Workflow Builder API is running"}


@app.post("/api/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)

    graph = {node.id: [] for node in pipeline.nodes}

    for edge in pipeline.edges:
        if edge.source in graph:
            graph[edge.source].append(edge.target)

    visited = set()
    visiting = set()

    def dfs(node):
        if node in visiting:
            return False
        if node in visited:
            return True

        visiting.add(node)

        for neighbour in graph.get(node, []):
            if not dfs(neighbour):
                return False

        visiting.remove(node)
        visited.add(node)
        return True

    is_dag = True

    for node in graph:
        if node not in visited and not dfs(node):
            is_dag = False
            break

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag,
    }
