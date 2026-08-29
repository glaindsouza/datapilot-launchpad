import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  BarChart3,
  ChevronUp,
  History,
  Home,
  LogOut,
  Plus,
  Settings,
  Table2,
  User,
} from "lucide-react";

const NAV_ITEMS = [
  { to: "/", label: "Home", icon: Home },
  { to: "/analysis", label: "New Analysis", icon: Plus },
  { to: "/history", label: "History", icon: History },
] as const;

export function Logo({ size = "md" }: { size?: "md" | "sm" }) {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span
        className={`flex items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-[0_0_20px_oklch(0.72_0.17_160/35%)] ${
          size === "md" ? "size-9" : "size-8"
        }`}
      >
        <Table2 className={size === "md" ? "size-5" : "size-4"} strokeWidth={2.2} />
      </span>
      <span
        className={`font-semibold tracking-tight text-foreground ${
          size === "md" ? "text-lg" : "text-base"
        }`}
      >
        DataPilot
      </span>
    </Link>
  );
}

function ProfileMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      {open && (
        <div className="absolute bottom-full left-0 right-0 mb-2 overflow-hidden rounded-xl border border-border bg-popover shadow-[0_8px_30px_oklch(0_0_0/50%)]">
          {[
            { label: "Profile", icon: User },
            { label: "Settings", icon: Settings },
            { label: "Logout", icon: LogOut },
          ].map(({ label, icon: Icon }) => (
            <button
              key={label}
              onClick={() => setOpen(false)}
              className="flex w-full items-center gap-2.5 px-3.5 py-2.5 text-sm text-secondary-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <Icon className="size-4 text-muted-foreground" />
              {label}
            </button>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-3 rounded-xl border border-transparent px-2.5 py-2.5 text-left transition-colors hover:border-border hover:bg-secondary"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-emerald-soft text-sm font-semibold text-primary ring-1 ring-primary/30">
          GD
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-sm font-medium text-foreground">
            Glain D'Souza
          </span>
          <span className="block truncate text-xs text-muted-foreground">
            glain@example.com
          </span>
        </span>
        <ChevronUp
          className={`size-4 shrink-0 text-muted-foreground transition-transform ${
            open ? "" : "rotate-180"
          }`}
        />
      </button>
    </div>
  );
}

export function AppSidebar({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="flex h-full flex-col bg-surface">
      <div className="px-5 pb-6 pt-6">
        <Logo />
      </div>

      <nav className="flex-1 space-y-1 px-3">
        {NAV_ITEMS.map(({ to, label, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            onClick={onNavigate}
            activeOptions={{ exact: true }}
            activeProps={{
              className:
                "bg-emerald-soft text-primary ring-1 ring-primary/25 font-medium",
            }}
            inactiveProps={{
              className:
                "text-muted-foreground hover:bg-secondary hover:text-foreground",
            }}
            className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm transition-colors"
          >
            <Icon className="size-4.5" strokeWidth={2} />
            {label}
          </Link>
        ))}
      </nav>

      <div className="border-t border-border p-3">
        <div className="mb-3 flex items-center gap-2 rounded-xl border border-border bg-card px-3.5 py-3">
          <BarChart3 className="size-4 text-primary" />
          <span className="text-xs text-muted-foreground">
            3 analyses this week
          </span>
        </div>
        <ProfileMenu />
      </div>
    </div>
  );
}
