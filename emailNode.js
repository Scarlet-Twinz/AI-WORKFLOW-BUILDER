import { BaseNode } from "./BaseNode";

export const EmailNode = ({ id }) => {
  return (
    <BaseNode
      title="Email Service"
      icon="📧"
      color="#f97316"
      inputs={[
        { id: `${id}-message` },
      ]}
      outputs={[
        { id: `${id}-status` },
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
            background: "#fff7ed",
            border: "1px solid #fed7aa",
            borderRadius: 12,
            padding: 12,
          }}
        >
          <strong style={{ color: "#c2410c" }}>
            Email Automation
          </strong>

          <div
            style={{
              marginTop: 6,
              fontSize: 13,
              color: "#475569",
              lineHeight: 1.5,
            }}
          >
            Send notifications, reports and workflow alerts to one or
            multiple recipients.
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
              background: "#ffedd5",
              padding: "4px 10px",
              borderRadius: 999,
            }}
          >
            Gmail
          </span>

          <span
            style={{
              background: "#fee2e2",
              padding: "4px 10px",
              borderRadius: 999,
            }}
          >
            Outlook
          </span>

          <span
            style={{
              background: "#dbeafe",
              padding: "4px 10px",
              borderRadius: 999,
            }}
          >
            SMTP
          </span>
        </div>

        <div
          style={{
            fontSize: 12,
            color: "#64748b",
            background: "#fafafa",
            padding: 10,
            borderRadius: 10,
          }}
        >
          ✓ Delivery Status • Attachments • Templates
        </div>
      </div>
    </BaseNode>
  );
}