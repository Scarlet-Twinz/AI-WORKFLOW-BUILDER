import { BaseNode } from "./BaseNode";

export const ApiNode = ({ id }) => {
  return (
    <BaseNode
      title="REST API"
      icon="🌐"
      color="#0ea5e9"
      inputs={[
        { id: `${id}-request` },
      ]}
      outputs={[
        { id: `${id}-response` },
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
            background: "#f0f9ff",
            border: "1px solid #bae6fd",
            borderRadius: 12,
            padding: 12,
          }}
        >
          <strong style={{ color: "#0369a1" }}>REST Endpoint</strong>

          <div
            style={{
              marginTop: 6,
              fontSize: 13,
              color: "#475569",
            }}
          >
            Fetches or sends data to external services.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 12,
          }}
        >
          <span
            style={{
              background: "#e0f2fe",
              padding: "4px 10px",
              borderRadius: 999,
            }}
          >
            GET
          </span>

          <span
            style={{
              background: "#dcfce7",
              padding: "4px 10px",
              borderRadius: 999,
            }}
          >
            POST
          </span>

          <span
            style={{
              background: "#fee2e2",
              padding: "4px 10px",
              borderRadius: 999,
            }}
          >
            JSON
          </span>
        </div>
      </div>
    </BaseNode>
  );
};