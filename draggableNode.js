export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };

    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );

    event.dataTransfer.effectAllowed = "move";

    event.target.style.cursor = "grabbing";
  };

  return (
    <div
      draggable
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => {
        event.target.style.cursor = "grab";
      }}
      style={{
        cursor: "grab",
        width: 165,
        minHeight: 90,
        borderRadius: 18,
        background:
          "linear-gradient(135deg,#ffffff,#f8fbff)",
        border: "1px solid #dbeafe",
        boxShadow: "0 10px 25px rgba(15,23,42,.08)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: ".25s",
        userSelect: "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform =
          "translateY(-5px)";
        e.currentTarget.style.boxShadow =
          "0 18px 35px rgba(37,99,235,.18)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform =
          "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 10px 25px rgba(15,23,42,.08)";
      }}
    >
      <div
        style={{
          fontSize: 28,
          marginBottom: 8,
        }}
      >
        {label.split(" ")[0]}
      </div>

      <div
        style={{
          fontWeight: 700,
          color: "#1e3a8a",
          fontSize: 15,
        }}
      >
        {label.replace(label.split(" ")[0], "").trim()}
      </div>
    </div>
  );
};