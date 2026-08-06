import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        overflowY: "auto",
        background:
          "linear-gradient(135deg, #eef4ff 0%, #f8fbff 45%, #edf7ff 100%)",
        fontFamily:
          "Inter, Segoe UI, Roboto, Helvetica Neue, sans-serif",
      }}
    >
      {/* Header */}

      <div
        style={{
          background:
            "linear-gradient(135deg,#2563eb,#4f46e5,#7c3aed)",
          color: "#fff",
          padding: "38px 50px",
          boxShadow: "0 20px 45px rgba(37,99,235,.28)",
        }}
      >
        <div
          style={{
            maxWidth: 1500,
            margin: "0 auto",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: 42,
              fontWeight: 800,
            }}
          >
            🚀 VectorFlow AI Workflow Builder
          </h1>

          <p
            style={{
              marginTop: 14,
              fontSize: 18,
              lineHeight: 1.7,
              maxWidth: 760,
            }}
          >
            Design intelligent AI pipelines visually using reusable
            workflow nodes, real-time connections and backend DAG
            validation powered by FastAPI.
          </p>

          <div
            style={{
              display: "flex",
              gap: 18,
              marginTop: 30,
              flexWrap: "wrap",
            }}
          >
            <StatCard title="Nodes" value="9" />
            <StatCard title="Framework" value="React Flow" />
            <StatCard title="Backend" value="FastAPI" />
            <StatCard title="Validation" value="DAG" />
          </div>
        </div>
      </div>

      {/* Main */}

      <div
        style={{
          maxWidth: 1550,
          margin: "30px auto",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: 22,
            padding: 24,
            boxShadow:
              "0 14px 40px rgba(15,23,42,.08)",
            marginBottom: 24,
          }}
        >
          <PipelineToolbar />
        </div>

        <div
          style={{
            height: "75vh",
            marginBottom: 30,
          }}
        >
          <PipelineUI />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <SubmitButton />
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div
      style={{
        minWidth: 170,
        padding: 20,
        borderRadius: 18,
        background: "rgba(255,255,255,.12)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div
        style={{
          fontSize: 14,
          opacity: 0.85,
        }}
      >
        {title}
      </div>

      <div
        style={{
          marginTop: 10,
          fontWeight: 700,
          fontSize: 24,
        }}
      >
        {value}
      </div>
    </div>
  );
}

export default App;