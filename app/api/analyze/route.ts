import { errorResponse } from "@/lib/utils/errorResponse";
import { validateOrigin } from "@/lib/utils/validateOrigin";
import { analyzeSchema } from "@/lib/validation/analyzeSchema";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash-lite",
  systemInstruction: `You are Jagdu, an honest, blunt, and caring AI financial guardian. Always respond in valid JSON without markdown. Format: {"score":number(0-100),"label":"Great Buy|Good Buy|Borderline|Think Twice|Skip It","verdict":"string(max 150 chars, casual English)","category":"string","alternatives":[{"name":"string","price":number,"note":"string"}]}`,
});

const generationConfig = {
  temperature: 0.7,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 800,
  responseMimeType: "application/json",
};

async function askJagdu(prompt: string): Promise<string> {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chatSession.sendMessage(prompt);
  return result.response.text();
}

export async function POST(request: NextRequest) {
  const originCheck = validateOrigin(request);
  if (!originCheck.valid)
    return errorResponse(403, "Forbidden", originCheck.reason);

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return errorResponse(400, "Bad Request", "Invalid JSON");
  }

  const parsed = analyzeSchema.safeParse(body);
  if (!parsed.success)
    return NextResponse.json(
      { code: 422, errors: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );

  const { itemName, price, spec, currentBalance, monthlyBudget, userName } =
    parsed.data;
  const pct = ((price / currentBalance) * 100).toFixed(1);

  const prompt = `Analyze this purchase for ${userName}:
                  Item: ${itemName}
                  Price: Rp ${price.toLocaleString("id-ID")} (${pct}% of balance)
                  Current balance: Rp ${currentBalance.toLocaleString("id-ID")}
                  Monthly budget: ${monthlyBudget ? "Rp " + monthlyBudget.toLocaleString("id-ID") : "not set"}
                  ${spec ? "Specifications/reason: " + spec : ""}

                  Give a worth-it score (0-100), honest verdict, item category, and 1-2 cheaper alternatives.
                `;

  try {
    const text = await askJagdu(prompt);
    const result = JSON.parse(text);
    return NextResponse.json(result);
  } catch (err) {
    console.error("[analyze] Gemini error:", err);
    return errorResponse(503, "Service Unavailable", "AI unreachable");
  }
}
