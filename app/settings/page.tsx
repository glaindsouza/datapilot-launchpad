"use client";

import Link from "next/link";
import { ArrowLeft, Bell, Palette, Settings } from "lucide-react";

export default function SettingsPage() {
  return (
    <main
  className="min-h-screen bg-surface px-6 py-8 text-foreground"
  style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
>
      <div className="mx-auto max-w-3xl">
        <Link
          href="/home"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to Home
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight">
            Settings
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Manage your DataPilot preferences.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-soft text-primary">
                <Palette className="size-5" />
              </div>

              <div>
                <h2 className="font-semibold">Appearance</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  DataPilot uses the application's current appearance settings.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-soft text-primary">
                <Bell className="size-5" />
              </div>

              <div>
                <h2 className="font-semibold">Notifications</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Notification preferences can be configured here as they are
                  supported by the application.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-soft text-primary">
                <Settings className="size-5" />
              </div>

              <div>
                <h2 className="font-semibold">Application</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Additional DataPilot application preferences can be added
                  here as the platform evolves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}