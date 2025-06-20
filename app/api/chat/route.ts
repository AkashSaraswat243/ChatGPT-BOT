import { google } from "@ai-sdk/google";
import { streamText } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (!body || !Array.isArray(body.messages)) {
      return new Response(JSON.stringify({ error: "Invalid request: 'messages' array required." }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    const result = streamText({
      model: google("gemini-2.0-flash"),
      messages: body.messages,
    });
    return result.toDataStreamResponse();
  } catch {
    return new Response(JSON.stringify({ error: "Internal server error." }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}