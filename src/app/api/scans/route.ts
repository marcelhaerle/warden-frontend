import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const BASE_API_URL = process.env.BASE_API_URL;
const DEFAULT_LIMIT = 50;
const DEFAULT_OFFSET = 0;
const MAX_LIMIT = 100;

export async function GET(request: NextRequest) {
  if (!BASE_API_URL) {
    console.error("BASE_API_URL is not configured");
    return NextResponse.json({ message: "Server configuration error" }, { status: 500 });
  }
  const { searchParams } = new URL(request.url);
  const rawLimit = parseInt(searchParams.get("limit") ?? String(DEFAULT_LIMIT), 10);
  const rawOffset = parseInt(searchParams.get("offset") ?? String(DEFAULT_OFFSET), 10);
  const limit = isNaN(rawLimit) || rawLimit < 1 ? DEFAULT_LIMIT : Math.min(rawLimit, MAX_LIMIT);
  const offset = isNaN(rawOffset) || rawOffset < 0 ? DEFAULT_OFFSET : rawOffset;

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
