import { useState, useRef, useCallback } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Panel,
} from "reactflow";

import { shallow } from "zustand/shallow";
import { useStore } from "./store";

import { InputNode } from "./nodes/inputNode";
import { OutputNode } from "./nodes/outputNode";
import { LLMNode } from "./nodes/llmNode";
import { TextNode } from "./nodes/textNode";
import { ApiNode } from "./nodes/apiNode";
import { DatabaseNode } from "./nodes/databaseNode";
import { EmailNode } from "./nodes/emailNode";
import { ImageNode } from "./nodes/imageNode";
import { ConditionNode } from "./nodes/conditionNode";

import "reactflow/dist/style.css";

const gridSize = 20;

const proOptions = {
  hideAttribution: true,
};

const nodeTypes = {
  customInput: InputNode,
  customOutput: OutputNode,
  llm: LLMNode,
  text: TextNode,
  api: ApiNode,
  database: DatabaseNode,
  email: EmailNode,
  image: ImageNode,
  condition: ConditionNode,
};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export const PipelineUI = () => {
  const wrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const {
    nodes,
    edges,
    getNodeID,
    addNode,
    onNodesChange,
    onEdgesChange,
    onConnect,
  } = useStore(selector, shallow);

  const getInitNodeData = (id, type) => ({
    id,
    nodeType: type,
  });

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      if (!reactFlowInstance) return;

      const bounds = wrapper.current.getBoundingClientRect();

      const data = event.dataTransfer.getData(
        "application/reactflow"
      );

      if (!data) return;

      const appData = JSON.parse(data);

      const type = appData.nodeType;

      const position = reactFlowInstance.project({
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top,
      });

      const id = getNodeID(type);

      addNode({
        id,
        type,
        position,
        data: getInitNodeData(id, type),
      });
    },
    [reactFlowInstance, addNode, getNodeID]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  return (
    <div
      ref={wrapper}
      style={{
        width: "100%",
        height: "76vh",
        borderRadius: 24,
        overflow: "hidden",
        border: "1px solid #dbeafe",
        background:
          "linear-gradient(180deg,#f8fbff,#eef5ff)",
        boxShadow:
          "0 20px 45px rgba(15,23,42,.08)",
      }}
    >
      <ReactFlow
  nodes={nodes}
  edges={edges}
  nodeTypes={nodeTypes}
  onNodesChange={onNodesChange}
  onEdgesChange={onEdgesChange}
  onConnect={onConnect}
  onDrop={onDrop}
  onDragOver={onDragOver}
  onInit={setReactFlowInstance}
  fitView
  snapToGrid
  snapGrid={[gridSize, gridSize]}
  connectionLineType="smoothstep"
  proOptions={proOptions}
  panOnScroll={false}
  zoomOnScroll={false}
  preventScrolling={false}
  panOnDrag={true}
>
        <Background
          color="#bfd6ff"
          gap={22}
          size={1.5}
        />

        <Panel position="top-center">
          <div
            style={{
              padding: "12px 20px",
              background: "#ffffff",
              borderRadius: 14,
              border: "1px solid #dbeafe",
              boxShadow:
                "0 12px 30px rgba(15,23,42,.08)",
              color: "#2563eb",
              fontWeight: 700,
            }}
          >
            ✨ Drag nodes onto the canvas • Connect them • Submit for DAG Analysis
          </div>
        </Panel>

        <MiniMap
          zoomable
          pannable
          nodeStrokeWidth={3}
          style={{
            background: "#ffffff",
          }}
        />

        <Controls
          showZoom
          showFitView
          showInteractive={false}
        />
      </ReactFlow>
    </div>
  );
};