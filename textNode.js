import { useMemo, useState } from "react";
import { BaseNode } from "./BaseNode";

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(
    data?.text || "Hello {{name}}"
  );

  // Find every {{variable}}
  const variables = useMemo(() => {
    const regex = /{{\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*}}/g;

    const vars = [];
    let match;

    while ((match = regex.exec(text)) !== null) {
      if (!vars.includes(match[1])) {
        vars.push(match[1]);
      }
    }

    return vars;
  }, [text]);

  const inputHandles = variables.map((variable) => ({
    id: `${id}-${variable}`,
  }));

  return (
    <BaseNode
      title="Text"
      icon="📝"
      color="#7c3aed"
      width={320}
      minHeight={Math.max(170, 170 + variables.length * 28)}
      inputs={inputHandles}
      outputs={[
        {
          id: `${id}-output`,
        },
      ]}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <label
          style={{
            fontWeight: 600,
            color: "#334155",
          }}
        >
          Prompt
        </label>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={Math.max(5, text.split("\n").length)}
          placeholder="Type here...

Example:
Hello {{name}}

Company: {{company}}

Country: {{country}}"
          style={{
            width: "100%",
            resize: "vertical",
            minHeight: 120,
            borderRadius: 12,
            border: "1px solid #d1d5db",
            padding: 12,
            fontSize: 14,
            outline: "none",
            lineHeight: 1.6,
            fontFamily: "inherit",
          }}
        />

        {variables.length > 0 && (
          <div
            style={{
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: 10,
              padding: 10,
            }}
          >
            <div
              style={{
                fontWeight: 700,
                color: "#7c3aed",
                marginBottom: 8,
              }}
            >
              Detected Variables
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
              }}
            >
              {variables.map((variable) => (
                <span
                  key={variable}
                  style={{
                    background: "#ede9fe",
                    color: "#6d28d9",
                    padding: "5px 10px",
                    borderRadius: 999,
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  {variable}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </BaseNode>
  );
};