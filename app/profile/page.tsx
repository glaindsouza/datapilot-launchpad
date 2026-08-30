"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check, Edit3, Mail, User } from "lucide-react";
import { getClientSession, updateProfile } from "@/lib/auth/client";
import type { UserSession } from "@/lib/auth/session";

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserSession | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getClientSession().then((session) => {
      if (session) {
        setProfile(session);
        setName(session.name || "");
        setEmail(session.email || "");
      }
      setLoading(false);
    });
  }, []);

  const handleCancel = () => {
    setName(profile?.name || "");
    setEmail(profile?.email || "");
    setEditing(false);
    setMessage("");
    setError("");
  };

  const handleSave = async () => {
    setMessage("");
    setError("");

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName) {
      setError("Name is required.");
      return;
    }

    if (!trimmedEmail) {
      setError("Email is required.");
      return;
    }

    setSaving(true);

    const result = await updateProfile(trimmedName, trimmedEmail);

    setSaving(false);

    if (!result.ok || !result.user) {
      setError(result.error || "Failed to update profile.");
      return;
    }

    const updatedProfile: UserSession = {
      ...profile,
      user_id: result.user.user_id,
      name: result.user.name,
      email: result.user.email,
      authProvider: result.user.authProvider,
    };

    setProfile(updatedProfile);
    setName(result.user.name);
    setEmail(result.user.email);
    setEditing(false);
    setMessage("Profile updated successfully.");
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-sm text-muted-foreground">Loading profile...</div>
      </main>
    );
  }

  return (
    <main
  className="min-h-screen bg-background text-foreground"
  style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
>
      <div className="mx-auto w-full max-w-3xl px-6 py-8">
        <Link
          href="/home"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to Home
        </Link>

        <div className="mb-8">
          <div className="mb-2 flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-[0_0_20px_oklch(0.72_0.17_160/35%)]">
              <User className="size-5" />
            </div>

            <div>
              <h1 className="text-2xl font-semibold tracking-tight">
                Profile
              </h1>
              <p className="text-sm text-muted-foreground">
                Manage your account information
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="font-semibold">Personal information</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Update the information associated with your DataPilot account.
              </p>
            </div>

            {!editing && (
              <button
                type="button"
                onClick={() => {
                  setEditing(true);
                  setMessage("");
                  setError("");
                }}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Edit3 className="size-4" />
                Edit Profile
              </button>
            )}
          </div>

          <div className="space-y-5">
            <div>
              <label
                htmlFor="profile-name"
                className="mb-2 block text-sm font-medium"
              >
                Name
              </label>

              <div className="relative">
                <User className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                <input
                  id="profile-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={!editing}
                  className="w-full rounded-xl border border-border bg-background py-3 pl-10 pr-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:cursor-default disabled:opacity-70"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="profile-email"
                className="mb-2 block text-sm font-medium"
              >
                Email
              </label>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                <input
                  id="profile-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={!editing}
                  className="w-full rounded-xl border border-border bg-background py-3 pl-10 pr-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:cursor-default disabled:opacity-70"
                />
              </div>
            </div>

            {profile?.authProvider && (
              <div>
                <p className="mb-2 text-sm font-medium">
                  Authentication
                </p>
                <p className="text-sm text-muted-foreground">
                  {profile.authProvider}
                </p>
              </div>
            )}
          </div>

          {error && (
            <div className="mt-5 rounded-xl border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive">
              {error}
            </div>
          )}

          {message && (
            <div className="mt-5 flex items-center gap-2 rounded-xl border border-primary/20 bg-emerald-soft px-4 py-3 text-sm text-primary">
              <Check className="size-4" />
              {message}
            </div>
          )}

          {editing && (
            <div className="mt-7 flex justify-end gap-3 border-t border-border pt-5">
              <button
                type="button"
                onClick={handleCancel}
                disabled={saving}
                className="rounded-xl border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-secondary disabled:opacity-50"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleSave}
                disabled={saving}
                className="rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}