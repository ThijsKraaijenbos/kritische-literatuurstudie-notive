import ReactFlow, {
  type Node,
  type Edge,
  Handle,
  Position,
  useNodesState,
  useEdgesState
} from "reactflow";
import "reactflow/dist/style.css";
import { t } from "../utils/t.ts";
import { cn } from "../utils/cn.ts";

// --- Types & Constants ---
type StepColor = "green" | "teal" | "sky" | "indigo" | "rose";

const stepColorClasses: Record<StepColor, string> = {
  green: "bg-green-200",
  teal: "bg-teal-200",
  sky: "bg-sky-200",
  indigo: "bg-indigo-200",
  rose: "bg-rose-200",
};

// --- Custom Node Component ---
const LadderCardNode = ({ data }: { data: { label: string; color: StepColor; isTitle?: boolean } }) => {
  return (
    <div className={cn(
      "p-6 rounded-lg flex justify-center items-center text-center shadow-sm border border-black/5",
      "w-[180px] h-[100px]", // Fixed dimensions for React Flow positioning
      data.isTitle ? "text-2xl font-bold" : stepColorClasses[data.color]
    )}>
      {/* Handles act as the connection points for Xarrows style lines */}
      <Handle type="target" position={Position.Top} className="opacity-0" />
      <p className="m-0">{data.label}</p>
      <Handle type="source" position={Position.Bottom} className="opacity-0" />
    </div>
  );
};

const nodeTypes = {
  ladderCard: LadderCardNode,
};

export const ImpactLadder = () => {
  // 1. Define Nodes (Mapping your original structure)
  const initialNodes: Node[] = [
    // ROW 1 (Green)
    { id: "title1", type: "ladderCard", position: { x: 0, y: 0 }, data: { label: t("impactladder.steps.1.title"), color: "green", isTitle: true } },
    { id: "card1", type: "ladderCard", position: { x: 400, y: 0 }, data: { label: t("impactladder.steps.1.card1"), color: "green" } },

    // ROW 2 (Teal)
    { id: "title2", type: "ladderCard", position: { x: 0, y: 150 }, data: { label: t("impactladder.steps.2.title"), color: "teal", isTitle: true } },
    { id: "card2", type: "ladderCard", position: { x: 200, y: 150 }, data: { label: t("impactladder.steps.2.card1"), color: "teal" } },
    { id: "card3", type: "ladderCard", position: { x: 400, y: 150 }, data: { label: t("impactladder.steps.2.card2"), color: "teal" } },

    // ROW 3 (Sky)
    { id: "title3", type: "ladderCard", position: { x: 0, y: 300 }, data: { label: t("impactladder.steps.3.title"), color: "sky", isTitle: true } },
    { id: "card4", type: "ladderCard", position: { x: 400, y: 300 }, data: { label: t("impactladder.steps.3.card1"), color: "sky" } },
    { id: "card5", type: "ladderCard", position: { x: 600, y: 300 }, data: { label: t("impactladder.steps.3.card2"), color: "sky" } },

    // ROW 4 (Indigo)
    { id: "title4", type: "ladderCard", position: { x: 0, y: 450 }, data: { label: t("impactladder.steps.4.title"), color: "indigo", isTitle: true } },
    { id: "card6", type: "ladderCard", position: { x: 600, y: 450 }, data: { label: t("impactladder.steps.4.card1"), color: "indigo" } },

    // ROW 5 (Rose)
    { id: "title5", type: "ladderCard", position: { x: 0, y: 600 }, data: { label: t("impactladder.steps.5.title"), color: "rose", isTitle: true } },
    { id: "card7", type: "ladderCard", position: { x: 400, y: 600 }, data: { label: t("impactladder.steps.5.card1"), color: "rose" } },
    { id: "card8", type: "ladderCard", position: { x: 600, y: 600 }, data: { label: t("impactladder.steps.5.card2"), color: "rose" } },
  ];

  // 2. Define Edges (Your Xarrow connections)
  const initialEdges: Edge[] = [
    { id: "e1-2", source: "card1", target: "card2", type: "smoothstep" },
    { id: "e1-3", source: "card1", target: "card3", type: "smoothstep" },
    { id: "e2-4", source: "card2", target: "card4", type: "smoothstep" },
    { id: "e3-4", source: "card3", target: "card4", type: "smoothstep" },
    { id: "e3-5", source: "card3", target: "card5", type: "smoothstep" },
    { id: "e4-6", source: "card4", target: "card6", type: "smoothstep" },
    { id: "e5-6", source: "card5", target: "card6", type: "smoothstep" },
    { id: "e4-7", source: "card4", target: "card7", type: "straight" },
    { id: "e6-8", source: "card6", target: "card8", type: "straight" },
  ].map(edge => ({
    ...edge,
    style: { stroke: "#4b5563", strokeWidth: 2 }, // Corresponds to var(--dark-gray)
    animated: true, // Replaces your GSAP dash-offset logic
  }));

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="h-[800px] w-full border border-gray-100 rounded-xl overflow-hidden bg-white">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        // Disable interactions to keep it as an "Infographic"
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        zoomOnScroll={false}
        panOnDrag={false}
        fitView
      />
    </div>
  );
};
