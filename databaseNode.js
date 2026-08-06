import { BaseNode } from "./BaseNode";

export const DatabaseNode = ({ id }) => {
  return (
    <BaseNode
      title="Database"
      icon="🗄️"
      color="#10b981"
      inputs={[
        { id: `${id}-query` },
      ]}
      outputs={[
        { id: `${id}-result` },
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
            background: "#ecfdf5",
            border: "1px solid #a7f3d0",
            borderRadius: 12,
            padding: 12,
          }}
        >
          <strong style={{ color: "#047857" }}>
            Database Connector
          </strong>

          <div
            style={{
              marginTop: 6,
              fontSize: 13,
              color: "#475569",
            }}
          >
            Execute SQL queries and retrieve structured records.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 8,
            fontSize: 12,
          }}
        >
          <span
            style={{
              background: "#d1fae5",
              padding: "4px 10px",
              borderRadius: 999,
            }}
          >
            PostgreSQL
          </span>

          <span
            style={{
              background: "#dbeafe",
              padding: "4px 10px",
              borderRadius: 999,
            }}
          >
            MySQL
          </span>

          <span
            style={{
              background: "#ede9fe",
              padding: "4px 10px",
              borderRadius: 999,
            }}
          >
            MongoDB
          </span>
        </div>
      </div>
    </BaseNode>
  );
};