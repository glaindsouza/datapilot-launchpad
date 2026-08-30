"use client";

import { Table2 } from "lucide-react";

export function DataPilotLogo({
  tone = "light",
  size = "md",
}: {
  tone?: "light" | "dark";
  size?: "md" | "sm";
}) {
  return (
    <div className="flex items-center gap-2.5">
      <span
        className={`flex items-center justify-center rounded-xl bg-[var(--auth-accent)] text-white shadow-[0_0_20px_oklch(0.72_0.17_160/35%)] ${
          size === "md" ? "h-9 w-9" : "h-8 w-8"
        }`}
      >
        <Table2 className={size === "md" ? "h-5 w-5" : "h-4 w-4"} strokeWidth={2.2} />
      </span>
      <span
        className={`font-semibold tracking-tight ${
          tone === "light" ? "text-[var(--auth-panel-fg)]" : "text-foreground"
        } ${size === "md" ? "text-lg" : "text-base"}`}
      >
        DataPilot
      </span>
    </div>
  );
}

export default DataPilotLogo;
