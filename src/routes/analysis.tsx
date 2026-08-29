import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, UploadCloud } from "lucide-react";

export const Route = createFileRoute("/analysis")({
  head: () => ({
    meta: [
      { title: "New Analysis — DataPilot" },
      {
        name: "description",
        content:
          "Upload a spreadsheet and let DataPilot's AI agents analyze your data.",
      },
      { property: "og:title", content: "New Analysis — DataPilot" },
      {
        property: "og:description",
        content:
          "Upload a spreadsheet and let DataPilot's AI agents analyze your data.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AnalysisPage,
});

function AnalysisPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background px-4">
      <div className="bg-grid-texture pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="relative w-full max-w-lg rounded-2xl border border-border bg-card p-10 text-center shadow-card">
        <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-emerald-soft text-primary ring-1 ring-primary/25">
          <UploadCloud className="size-7" strokeWidth={1.8} />
        </span>
        <h1 className="mt-6 text-2xl font-semibold tracking-tight text-foreground">
          Analysis workspace
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          This is where the spreadsheet upload, AI agent processing,
          natural-language querying, charts, and insights will live — a separate
          workspace from the Home launchpad.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-1.5 rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm font-medium text-secondary-foreground transition-colors hover:border-primary/40 hover:text-primary"
        >
          <ArrowLeft className="size-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
