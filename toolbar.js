import { DraggableNode } from "./draggableNode";

const groups = [
  {
    title: "Core Nodes",
    nodes: [
      { type: "customInput", label: "📥 Input" },
      { type: "text", label: "📝 Text" },
      { type: "llm", label: "🧠 LLM" },
      { type: "customOutput", label: "📤 Output" },
    ],
  },
  {
    title: "Workflow Nodes",
    nodes: [
      { type: "api", label: "🌐 API" },
      { type: "database", label: "🗄 Database" },
      { type: "email", label: "📧 Email" },
      { type: "image", label: "🖼 Image" },
      { type: "condition", label: "🔀 Condition" },
    ],
  },
];

export const PipelineToolbar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 25,
      }}
    >
      <div>
        <h2
          style={{
            margin: 0,
            color: "#1e3a8a",
            fontSize: 28,
            fontWeight: 800,
          }}
        >
          AI Workflow Components
        </h2>

        <p
          style={{
            marginTop: 10,
            color: "#64748b",
          }}
        >
          Drag nodes into the workflow canvas to create an AI pipeline.
        </p>
      </div>

      {groups.map((group) => (
        <div key={group.title}>
          <h3
            style={{
              color: "#2563eb",
              marginBottom: 15,
            }}
          >
            {group.title}
          </h3>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 18,
            }}
          >
            {group.nodes.map((node) => (
              <DraggableNode
                key={node.type}
                type={node.type}
                label={node.label}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};