import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET() {
  try {
    const baseUrl = process.env.BASE_API_URL;
    if (!baseUrl) {
      throw new Error("BASE_API_URL is not defined in the environment variables");
    }
    const res = await fetch(`${baseUrl}/dashboard/stats`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch from API: ${res.statusText}`);
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
