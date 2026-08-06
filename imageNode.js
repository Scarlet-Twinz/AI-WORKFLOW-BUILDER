import { BaseNode } from "./BaseNode";

export const ImageNode = ({ id }) => {
  return (
    <BaseNode
      title="Image Processor"
      icon="🖼️"
      color="#ec4899"
      inputs={[
        { id: `${id}-image` },
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
            background: "#fdf2f8",
            border: "1px solid #f9a8d4",
            borderRadius: 12,
            padding: 12,
          }}
        >
          <strong style={{ color: "#be185d" }}>
            AI Image Processing
          </strong>

          <div
            style={{
              marginTop: 6,
              fontSize: 13,
              color: "#475569",
              lineHeight: 1.6,
            }}
          >
            Analyze, classify, resize, generate captions, or prepare
            images for downstream AI models.
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 8,
            fontSize: 12,
          }}
        >
          <div
            style={{
              background: "#fce7f3",
              padding: 8,
              borderRadius: 10,
              textAlign: "center",
            }}
          >
            PNG
          </div>

          <div
            style={{
              background: "#fce7f3",
              padding: 8,
              borderRadius: 10,
              textAlign: "center",
            }}
          >
            JPG
          </div>

          <div
            style={{
              background: "#fce7f3",
              padding: 8,
              borderRadius: 10,
              textAlign: "center",
            }}
          >
            OCR
          </div>

          <div
            style={{
              background: "#fce7f3",
              padding: 8,
              borderRadius: 10,
              textAlign: "center",
            }}
          >
            Vision AI
          </div>
        </div>

        <div
          style={{
            background: "#fff",
            borderRadius: 10,
            padding: 10,
            border: "1px dashed #f9a8d4",
            fontSize: 12,
            color: "#6b7280",
          }}
        >
          ✨ Supports image recognition, object detection and AI vision
          workflows.
        </div>
      </div>
    </BaseNode>
  );
};