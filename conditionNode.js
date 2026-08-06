import { BaseNode } from "./BaseNode";

export const ConditionNode = ({ id }) => {
  return (
    <BaseNode
      title="Condition"
      icon="🔀"
      color="#e11d48"
      inputs={[
        { id: `${id}-input` },
      ]}
      outputs={[
        { id: `${id}-true` },
        { id: `${id}-false` },
      ]}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <div
          style={{
            background: "#fff1f2",
            border: "1px solid #fecdd3",
            borderRadius: 12,
            padding: 12,
          }}
        >
          <strong style={{ color: "#be123c" }}>
            Decision Engine
          </strong>

          <div
            style={{
              marginTop: 6,
              fontSize: 13,
              color: "#475569",
              lineHeight: 1.6,
            }}
          >
            Route workflow execution depending on rules or AI decisions.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 10,
          }}
        >
          <div
            style={{
              flex: 1,
              background: "#dcfce7",
              color: "#166534",
              padding: 10,
              textAlign: "center",
              borderRadius: 10,
              fontWeight: 700,
            }}
          >
            TRUE
          </div>

          <div
            style={{
              flex: 1,
              background: "#fee2e2",
              color: "#991b1b",
              padding: 10,
              textAlign: "center",
              borderRadius: 10,
              fontWeight: 700,
            }}
          >
            FALSE
          </div>
        </div>

        <div
          style={{
            background: "#fafafa",
            padding: 10,
            borderRadius: 10,
            fontSize: 12,
            color: "#6b7280",
            border: "1px dashed #e5e7eb",
          }}
        >
          Supports branching, filtering, validation, loops and workflow
          routing.
        </div>
      </div>
    </BaseNode>
  );
};