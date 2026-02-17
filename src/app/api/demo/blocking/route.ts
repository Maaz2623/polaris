// localhost:3000/api/demo/blocking

import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";

const google = createGoogleGenerativeAI();

export async function POST() {
  const response = await generateText({
    model: google("gemini-2.5-flash"),
    prompt: `Write chicken biriyani recipe`,
    experimental_telemetry: {
      isEnabled: true,
      recordInputs: true,
      recordOutputs: true,
    },
  });
  return Response.json({
    response,
  });
}
