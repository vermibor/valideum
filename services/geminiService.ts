import { GoogleGenAI, Type } from "@google/genai";
import { QuickAnalysisResult } from "../types";

// Initialize Gemini
// Ensure API_KEY is present in your environment variables for this to work.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const analyzeIdea = async (idea: string): Promise<QuickAnalysisResult> => {
  if (!process.env.API_KEY) {
    // Return mock data if no key is provided (for demo safety)
    console.warn("No API Key found. Returning mock data.");
    await new Promise(resolve => setTimeout(resolve, 1500));
    return {
      niches: ["Remote Workers", "Eco-conscious Consumers", "Enterprise B2B"],
      score: 85,
      verdict: "Strong potential due to high recurring demand in current market trends."
    };
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Analyze this business idea: "${idea}". Provide 3 short potential target niches, a validation score out of 100 based on general market viability, and a one-sentence verdict.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            niches: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "3 potential target niches"
            },
            score: {
              type: Type.INTEGER,
              description: "Viability score from 0 to 100"
            },
            verdict: {
              type: Type.STRING,
              description: "A one sentence conclusion about the idea"
            }
          },
          required: ["niches", "score", "verdict"]
        }
      }
    });

    const jsonText = response.text;
    if (!jsonText) throw new Error("No response from AI");
    
    return JSON.parse(jsonText) as QuickAnalysisResult;

  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to analyze idea. Please try again.");
  }
};