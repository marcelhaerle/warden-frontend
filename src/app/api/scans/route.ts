import { NextRequest, NextResponse } from "next/server";

const BASE_API_URL = process.env.BASE_API_URL || "http://localhost:8000";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get("limit") || "50";
  const offset = searchParams.get("offset") || "0";

  try {
    const res = await fetch(`${BASE_API_URL}/scans?limit=${limit}&offset=${offset}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to fetch scans:", error);
    return NextResponse.json({ message: "Failed to fetch scans" }, { status: 500 });
  }
}
