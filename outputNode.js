import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const OutputNode = ({ id, data }) => {
  const [outputName, setOutputName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );

  const [outputType, setOutputType] = useState(
    data?.outputType || "Text"
  );

  return (
    <BaseNode
      title="Output Node"
      icon="📤"
      color="#16a34a"
      inputs={[
        {
          id: `${id}-value`,
        },
      ]}
      outputs={[]}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <div>
          <label
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#475569",
            }}
          >
            Output Name
          </label>

          <input
            value={outputName}
            onChange={(e) => setOutputName(e.target.value)}
            placeholder="Final Response"
          />
        </div>

        <div>
          <label
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#475569",
            }}
          >
            Output Format
          </label>

          <select
            value={outputType}
            onChange={(e) => setOutputType(e.target.value)}
          >
            <option>Text</option>
            <option>JSON</option>
            <option>Markdown</option>
            <option>Image</option>
            <option>File</option>
          </select>
        </div>

        <div
          style={{
            marginTop: 6,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              color: "#64748b",
              fontSize: 12,
            }}
          >
            Destination
          </span>

          <span
            style={{
              background: "#dcfce7",
              color: "#15803d",
              padding: "4px 10px",
              borderRadius: 999,
              fontWeight: 700,
              fontSize: 12,
            }}
          >
            {outputType}
          </span>
        </div>
      </div>
    </BaseNode>
  );
};