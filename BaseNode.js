import { Handle, Position } from "reactflow";

export const BaseNode = ({
  title,
  color = "#2563eb",
  icon = "",
  children,
  inputs = [],
  outputs = [],
  width = 240,
  minHeight = 120,
}) => {
  return (
    <div
      style={{
        width,
        minHeight,
        background: "#ffffff",
        border: `2px solid ${color}`,
        borderRadius: 14,
        padding: 14,
        position: "relative",
        boxShadow: "0 8px 20px rgba(0,0,0,.08)",
      }}
    >
      {inputs.map((handle, index) => (
        <Handle
          key={handle.id}
          type="target"
          position={Position.Left}
          id={handle.id}
          style={{
            background: color,
            width: 10,
            height: 10,
            top:
              handle.top ??
              `${((index + 1) * 100) / (inputs.length + 1)}%`,
          }}
        />
      ))}

      {outputs.map((handle, index) => (
        <Handle
          key={handle.id}
          type="source"
          position={Position.Right}
          id={handle.id}
          style={{
            background: color,
            width: 10,
            height: 10,
            top:
              handle.top ??
              `${((index + 1) * 100) / (outputs.length + 1)}%`,
          }}
        />
      ))}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 12,
          borderBottom: "1px solid #ececec",
          paddingBottom: 8,
        }}
      >
        <span style={{ fontSize: 20 }}>
          {icon}
        </span>

        <span
          style={{
            fontSize: 18,
            fontWeight: 700,
            color,
          }}
        >
          {title}
        </span>
      </div>

      {children}
    </div>
  );
};