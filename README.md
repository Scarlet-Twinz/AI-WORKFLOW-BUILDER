# AI Workflow Builder

A visual workflow builder for designing AI and automation pipelines with drag-and-drop nodes, connected execution paths, and FastAPI-powered DAG validation.

## Overview

AI Workflow Builder lets you visually compose workflows instead of defining every pipeline step manually in code. Nodes can be placed on a React Flow canvas, connected, configured, and submitted to a FastAPI endpoint that reports the workflow structure and whether the graph is a valid Directed Acyclic Graph (DAG).

The project demonstrates frontend interaction, workflow state management, graph processing, API integration, and full-stack development.

## Features

- Drag-and-drop workflow canvas
- React Flow node editor
- Nine reusable workflow node types
- Grid snapping, minimap, zoom controls, and canvas navigation
- Centralized workflow state with Zustand
- FastAPI backend for pipeline analysis
- Depth-first DAG validation

## Node Types

| Node | Purpose |
| --- | --- |
| Input | Starts a workflow and receives data |
| Output | Represents the end of a workflow |
| Text | Transforms or expands text content |
| LLM | Represents an AI/LLM processing step |
| REST API | Represents external service integration |
| Database | Represents database operations |
| Email | Represents notification actions |
| Image | Represents image processing or generation |
| Condition | Represents conditional workflow logic |

## Architecture

```text
React + React Flow
        │
        ▼
   Workflow Canvas
        │
        ▼
 Zustand State Store
        │
        ▼
 Pipeline Analysis Request
        │
        ▼
 FastAPI Backend
        │
        ▼
 Graph / DAG Validation
```

## Tech Stack

### Frontend

- React 18
- React Flow
- Zustand
- JavaScript
- Create React App / React Scripts

### Backend

- Python
- FastAPI
- Pydantic
- Uvicorn

### Tooling

- Git
- GitHub
- npm

## Project Structure

```text
.
├── public/
├── App.js
├── ui.js
├── toolbar.js
├── store.js
├── submit.js
├── BaseNode.js
├── inputNode.js
├── outputNode.js
├── textNode.js
├── llmNode.js
├── apiNode.js
├── databaseNode.js
├── emailNode.js
├── imageNode.js
├── conditionNode.js
├── main.py
├── requirements.txt
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

Install:

- Node.js
- npm
- Python 3

### 1. Clone the repository

```bash
git clone https://github.com/Scarlet-Twinz/AI-WORKFLOW-BUILDER.git
cd AI-WORKFLOW-BUILDER
```

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Start the FastAPI backend

Create and activate a virtual environment:

```bash
python -m venv .venv
```

Windows PowerShell:

```powershell
.\.venv\Scripts\Activate.ps1
```

Install Python dependencies:

```bash
pip install -r requirements.txt
```

Start the API:

```bash
uvicorn main:app --reload --port 8000
```

The API runs at:

```text
http://127.0.0.1:8000
```

### 4. Start the React frontend

Open a second terminal and run:

```bash
npm start
```

The frontend runs at:

```text
http://localhost:3000
```

Keep both terminals running while using the application.

## Pipeline Analysis

When **Analyze Pipeline** is selected, the frontend sends the current workflow nodes and edges to:

```text
POST http://127.0.0.1:8000/pipelines/parse
```

The API returns the number of nodes, number of edges, and whether the workflow is a valid DAG.

Example response:

```json
{
  "num_nodes": 4,
  "num_edges": 3,
  "is_dag": true
}
```

The DAG check uses depth-first traversal to detect cycles in the directed workflow graph.

## Local Development

For the complete local experience:

1. Start FastAPI on port `8000`.
2. Start React on port `3000`.
3. Open the React application in your browser.
4. Add and connect workflow nodes.
5. Configure the nodes as needed.
6. Select **Analyze Pipeline** to validate the workflow graph.

No external deployment service is required.

## Deployment

This repository is documented for **local development and execution**. A public hosted deployment is not currently provided.

## Future Improvements

- Persist workflows to a database
- Add workflow save/load functionality
- Add execution simulation and run history
- Add richer LLM provider integrations
- Add authentication and user workspaces
- Add automated frontend and API tests
- Add reusable workflow templates

## License

This project is licensed under the MIT License.

## Author

**Anthony Emmanuella Mmasinachi**

Full-stack developer building practical applications across frontend engineering, backend systems, APIs, automation, and AI-focused workflows.

**GitHub:** https://github.com/Scarlet-Twinz
