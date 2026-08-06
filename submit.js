import { useState } from "react";
import { useStore } from "./store";

export const SubmitButton = () => {
  const [loading, setLoading] = useState(false);

  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "http://127.0.0.1:8000/pipelines/parse",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nodes: nodes.map((node) => ({
              id: node.id,
            })),
            edges: edges.map((edge) => ({
              source: edge.source,
              target: edge.target,
            })),
          }),
        }
      );

      const result = await response.json();

      alert(
        `Nodes: ${result.num_nodes}\nEdges: ${result.num_edges}\nDAG: ${
          result.is_dag ? "Yes" : "No"
        }`
      );
    } catch (err) {
      console.error(err);
      alert("Cannot connect to backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "35px 0",
      }}
    >
      <button
        onClick={handleSubmit}
        disabled={loading}
        style={{
          padding: "16px 40px",
          fontSize: "18px",
          fontWeight: "700",
          border: "none",
          borderRadius: "14px",
          color: "#fff",
          cursor: "pointer",
          background:
            "linear-gradient(135deg,#2563eb,#4f46e5)",
          boxShadow:
            "0 15px 35px rgba(37,99,235,.25)",
        }}
      >
        {loading ? "Analyzing..." : "🚀 Analyze Pipeline"}
      </button>
    </div>
  );
};