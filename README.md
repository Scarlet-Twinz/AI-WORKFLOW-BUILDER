# AI Workflow Builder

A modern visual workflow builder for designing AI and automation pipelines with drag-and-drop nodes, connected execution paths, and backend DAG validation.

## ✨ Overview

AI Workflow Builder lets you visually compose workflows instead of defining every pipeline step manually in code. Nodes can be placed on a React Flow canvas, connected together, configured, and submitted to a FastAPI analysis endpoint that reports the workflow structure and whether the graph is a valid Directed Acyclic Graph (DAG).

The project combines a visual node editor with a lightweight Python API, making it a practical example of frontend interaction, state management, graph processing, and full-stack development.

## 🚀 Features

- Drag-and-drop workflow canvas
- React Flow node editor with smoothstep connections
- Nine reusable workflow node types
- Input and output nodes for pipeline boundaries
- Text processing node with dynamic configuration
- LLM node for AI-oriented workflow design
- REST API node for external service integration
- Database node for data operations
- Email node for notification workflows
- Image node for image-oriented pipelines
- Condition node for branching logic
- Node minimap, zoom controls, grid snapping, and canvas navigation
- Centralized workflow state with Zustand
- FastAPI backend for pipeline analysis
- DAG validation using depth-first graph traversal

## 🧩 Node Types

| Node | Purpose |
| --- | --- |
| Input | Starts a workflow and receives data |
| Output | Represents the end of a workflow |
| Text | Transforms or expands text content |
| LLM | Represents an AI/LLM processing step |
| REST API | Connects a workflow to external services |
| Database | Represents database operations |
| Email | Represents email/notification actions |
| Image | Represents image processing or generation steps |
| Condition | Represents conditional workflow logic |

## 🏗️ Architecture

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
 POST /pipelines/parse
        │
        ▼
 FastAPI Backend
        │
        ▼
 Graph / DAG Validation
```

## 🛠️ Tech Stack

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

### Source Control

- Git
- GitHub

## 📁 Project Structure

```text
.
├── public/                   # Static assets
├── App.js                    # Main application shell
├── ui.js                     # React Flow workflow canvas
├── toolbar.js                # Node toolbar
├── store.js                  # Zustand workflow state
├── submit.js                 # Pipeline analysis request
├── BaseNode.js               # Shared node component
├── inputNode.js
├── outputNode.js
├── textNode.js
├── llmNode.js
├── apiNode.js
├── databaseNode.js
├── emailNode.js
├── imageNode.js
├── conditionNode.js
├── main.py                   # FastAPI development entrypoint
├── requirements.txt          # Python dependencies
├── package.json
└── README.md
```

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Scarlet-Twinz/AI-WORKFLOW-BUILDER.git
cd AI-WORKFLOW-BUILDER
```

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Start the frontend

```bash
npm start
```

The React application runs locally at `http://localhost:3000`.

### 4. Set up the FastAPI backend

Create and activate a Python virtual environment:

```bash
python -m venv .venv
```

Windows PowerShell:

```powershell
.\.venv\Scripts\Activate.ps1
```

Install the backend dependencies:

```bash
pip install -r requirements.txt
```

Start FastAPI:

```bash
uvicorn main:app --reload --port 8000
```

The local API is available at `http://127.0.0.1:8000`.

> Run the frontend and backend in separate terminal windows.

## 🔎 Pipeline Analysis

When **Analyze Pipeline** is selected, the frontend sends the current nodes and edges to:

```text
POST http://127.0.0.1:8000/pipelines/parse
```

The API returns the number of nodes, number of edges, and whether the workflow is a valid Directed Acyclic Graph.

Example response:

```json
{
  "num_nodes": 4,
  "num_edges": 3,
  "is_dag": true
}
```

The DAG check uses depth-first traversal to detect cycles in the directed workflow graph.

## 🧪 Local Development

For the complete local experience:

1. Start FastAPI on port `8000`.
2. Start the React application on port `3000`.
3. Open the React application in your browser.
4. Add and connect workflow nodes.
5. Select **Analyze Pipeline** to validate the workflow graph.

No external deployment service is required to run the project locally.

## 🔮 Future Improvements

- Persist workflows to a database
- Add workflow save/load functionality
- Add execution simulation and step-by-step run history
- Add richer LLM configuration and provider integrations
- Add authentication and user workspaces
- Add automated frontend and API tests
- Add workflow templates for common AI automation patterns

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Anthony Agatha Nwanneka**

Full-stack developer building practical applications across frontend engineering, backend systems, APIs, automation, and AI-focused workflows.

**GitHub:** https://github.com/Scarlet-Twinz
