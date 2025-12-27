
import { GoogleGenAI, Type } from "@google/genai";
import { BUSINESS_INFO } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getServiceAdvice = async (userInput: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are the AI concierge for "${BUSINESS_INFO.name}" located at ${BUSINESS_INFO.address}. 
      User Query: "${userInput}"
      
      Our Services:
      - Computer: Sales, repairs (PC/Mac), OS upgrades, networking, data backup.
      - Electronics: Repair, Home Audio/Video, TV install, streaming services.
      - Security: CCTV and Security systems.
      - Conversion: Old tapes to MP3 and digital video.
      
      Business Info:
      - Website: ${BUSINESS_INFO.website}
      - Phones: ${BUSINESS_INFO.phone1}, ${BUSINESS_INFO.phone2}
      
      Respond as a helpful, professional NYC tech expert. Give a concise answer (2-3 sentences) and suggest 1-2 service categories to check out.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            advice: { type: Type.STRING },
            suggestedCategories: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["advice", "suggestedCategories"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      advice: "We'd love to help you with your tech needs. Please call us at " + BUSINESS_INFO.phone1 + " or visit our shop on W 83rd St.",
      suggestedCategories: ["Computer", "Electronic"]
    };
  }
};
