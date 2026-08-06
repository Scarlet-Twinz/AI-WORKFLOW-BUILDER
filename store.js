import { create } from "zustand";
import {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  MarkerType,
} from "reactflow";

export const useStore = create((set, get) => ({
  nodeIDs: {},

  nodes: [],

  edges: [],

  getNodeID: (type) => {
    const ids = { ...get().nodeIDs };

    if (!ids[type]) {
      ids[type] = 0;
    }

    ids[type] += 1;

    set({
      nodeIDs: ids,
    });

    return `${type}-${ids[type]}`;
  },

  addNode: (node) => {
    set({
      nodes: [...get().nodes, node],
    });
  },

  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },

  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },

  onConnect: (connection) => {
    set({
      edges: addEdge(
        {
          ...connection,
          type: "smoothstep",
          animated: true,
          markerEnd: {
            type: MarkerType.ArrowClosed,
          },
        },
        get().edges
      ),
    });
  },

  updateNodeField: (nodeId, field, value) => {
    set({
      nodes: get().nodes.map((node) =>
        node.id === nodeId
          ? {
              ...node,
              data: {
                ...node.data,
                [field]: value,
              },
            }
          : node
      ),
    });
  },

  resetPipeline: () => {
    set({
      nodes: [],
      edges: [],
      nodeIDs: {},
    });
  },
}));