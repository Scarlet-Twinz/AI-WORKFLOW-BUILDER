import { BaseNode } from "./BaseNode";

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      title="AI Language Model"
      icon="🧠"
      color="#7c3aed"
      inputs={[
        { id: `${id}-system` },
        { id: `${id}-prompt` },
      ]}
      outputs={[
        { id: `${id}-response` },
      ]}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <div
          style={{
            padding: 12,
            borderRadius: 12,
            background: "#f5f3ff",
            border: "1px solid #ddd6fe",
          }}
        >
          <div
            style={{
              fontWeight: 700,
              color: "#6d28d9",
              marginBottom: 6,
            }}
          >
            GPT-4.1 / Claude / Gemini
          </div>

          <div
            style={{
              fontSize: 13,
              color: "#475569",
              lineHeight: 1.6,
            }}
          >
            Accepts a System Prompt and User Prompt, performs AI reasoning,
            and produces a structured response.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <div
            style={{
              flex: 1,
              padding: 10,
              borderRadius: 10,
              background: "#ede9fe",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontWeight: 700,
                color: "#5b21b6",
              }}
            >
              2 Inputs
            </div>

            <div
              style={{
                fontSize: 12,
                color: "#64748b",
              }}
            >
              Prompt + System
            </div>
          </div>

          <div
            style={{
              flex: 1,
              padding: 10,
              borderRadius: 10,
              background: "#ecfeff",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontWeight: 700,
                color: "#0f766e",
              }}
            >
              1 Output
            </div>

            <div
              style={{
                fontSize: 12,
                color: "#64748b",
              }}
            >
              AI Response
            </div>
          </div>
        </div>

        <div
          style={{
            background: "#faf5ff",
            padding: 10,
            borderRadius: 10,
            border: "1px dashed #c4b5fd",
            fontSize: 12,
            color: "#6b7280",
          }}
        >
          ✨ Supports prompt engineering, reasoning, summarization,
          translation, code generation and structured outputs.
        </div>
      </div>
    </BaseNode>
  );
};