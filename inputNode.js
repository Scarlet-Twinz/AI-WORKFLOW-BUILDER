import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const InputNode = ({ id, data }) => {
  const [inputName, setInputName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );

  const [inputType, setInputType] = useState(
    data?.inputType || "Text"
  );

  return (
    <BaseNode
      title="Input Node"
      icon="📥"
      color="#2563eb"
      inputs={[]}
      outputs={[
        {
          id: `${id}-value`,
        },
      ]}
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
            Input Name
          </label>

          <input
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            placeholder="Customer Prompt"
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
            Data Type
          </label>

          <select
            value={inputType}
            onChange={(e) => setInputType(e.target.value)}
          >
            <option>Text</option>
            <option>File</option>
            <option>Image</option>
            <option>Audio</option>
            <option>JSON</option>
          </select>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 4,
            fontSize: 12,
            color: "#64748b",
          }}
        >
          <span>Incoming Data</span>

          <span
            style={{
              background: "#dbeafe",
              color: "#1d4ed8",
              padding: "4px 10px",
              borderRadius: 999,
              fontWeight: 600,
            }}
          >
            {inputType}
          </span>
        </div>
      </div>
    </BaseNode>
  );
};