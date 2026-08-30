import { getSessionFromCookies, setSessionCookie } from "@/lib/auth/session";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  try {
    const session = await getSessionFromCookies();

    if (!session) {
      return NextResponse.json(
        { error: "You must be logged in to update your profile." },
        { status: 401 }
      );
    }

    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";

    if (!name) {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 }
      );
    }

    if (!email) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    await setSessionCookie({
      ...session,
      name,
      email,
    });

    return NextResponse.json({
      user: {
        user_id: session.user_id,
        name,
        email,
        authProvider: session.authProvider,
      },
    });
  } catch (error: unknown) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to update profile.",
      },
      { status: 500 }
    );
  }
}