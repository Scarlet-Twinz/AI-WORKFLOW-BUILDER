# AI Workflow Builder

**Visual workflow builder for designing AI and automation pipelines as a graph.**

AI Workflow Builder lets users compose pipeline steps on a React Flow canvas, connect them visually, manage graph state centrally, and submit the resulting graph to a FastAPI backend for structural/DAG validation.

The project is deliberately focused on the **workflow graph problem** rather than pretending to be a complete workflow execution platform.

## Architecture

```text
React + React Flow
        │
        ▼
Workflow Canvas
        │
        ▼
Zustand State
        │
        ▼
Pipeline Analysis Request
        │
        ▼
FastAPI
        │
        ▼
DAG Validation
```

## Node Model

The editor currently provides reusable node types for:

| Node | Role |
| --- | --- |
| Input | Workflow entry |
| Output | Workflow exit |
| Text | Text transformation |
| LLM | AI processing step |
| REST API | External service call |
| Database | Data operation |
| Email | Notification action |
| Image | Image processing/generation step |
| Condition | Conditional workflow logic |

The canvas supports drag-and-drop, connections, grid snapping, minimap, zoom, and navigation controls.

## Backend Analysis

Selecting **Analyze Pipeline** sends the current nodes and edges to:

```http
POST /pipelines/parse
```

The backend returns structural information such as node count, edge count, and whether the directed graph is acyclic.

The DAG check uses depth-first traversal to detect cycles.

Example:

```json
{
  "num_nodes": 4,
  "num_edges": 3,
  "is_dag": true
}
```

## What This Project Demonstrates

- Visual graph editing
- React Flow integration
- Centralized frontend graph state
- Backend graph validation
- DAG/cycle detection
- API integration
- Full-stack frontend/backend separation
- Extensible node architecture

## Tech Stack

### Frontend

React 18 · React Flow · Zustand · JavaScript · Create React App

### Backend

Python · FastAPI · Pydantic · Uvicorn

### Tooling

Git · GitHub · npm

## Repository Structure

```text
.
├── public/
├── App.js
├── ui.js
├── toolbar.js
├── store.js
├── submit.js
├── BaseNode.js
├── *Node.js
├── main.py
├── requirements.txt
├── package.json
└── README.md
```

## Local Development

Prerequisites:

- Node.js
- npm
- Python 3

```bash
git clone https://github.com/Scarlet-Twinz/AI-WORKFLOW-BUILDER.git
cd AI-WORKFLOW-BUILDER
npm install
```

Backend:

```bash
python -m venv .venv
# activate the environment for your shell
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

Frontend, in a second terminal:

```bash
npm start
```

Default endpoints:

```text
Frontend → http://localhost:3000
API      → http://127.0.0.1:8000
```

## Current Status

**Functional local workflow-builder prototype.**

The current implementation focuses on visual graph construction and DAG analysis. It does not yet provide persistent workflow storage, real execution, run history, authentication/workspaces, or production-grade provider orchestration.

## Next Engineering Steps

The natural next layers are persistence, workflow execution, run history, reusable templates, authentication/workspaces, automated tests, and richer provider integrations.

## License

MIT


The repository is structured as a small, inspectable full-stack system so the workflow graph and validation boundary are easy to understand locally.

## Author

**Anthony Emmanuella Mmasinachi**

Full-stack and systems engineer focused on application architecture, backend systems, AI integration, workflow automation, distributed processing, and practical software engineering.
