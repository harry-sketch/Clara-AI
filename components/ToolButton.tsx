import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const ToolButton = ({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label?: string;
}) => (
  <Button
    variant={active ? "secondary" : "outline"}
    size="icon"
    onClick={onClick}
    className={cn(
      "w-full h-12 rounded-xl transition-all duration-200 cursor-pointer",
      active
        ? "bg-emerald-400 text-zinc-950 hover:bg-emerald-500 border-emerald-400"
        : "bg-zinc-900/50 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 border-zinc-800",
    )}
    title={label}
  >
    {icon}
  </Button>
);

export default ToolButton;
