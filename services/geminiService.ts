import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY is missing. AI features will not work.");
    // In a real app, you might want to throw or handle this gracefully in the UI
  }
  return new GoogleGenAI({ apiKey: apiKey || 'dummy-key-for-ui-preview' });
};

export const summarizeText = async (text: string): Promise<string> => {
  if (!text.trim()) return "";
  
  try {
    const ai = getClient();
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Summarize the following text concisely in 3 bullet points:\n\n${text}`,
      config: {
        thinkingConfig: { thinkingBudget: 0 } 
      }
    });
    return response.text || "Could not generate summary.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error generating summary. Please check API Key configuration.";
  }
};

export const generateKeywords = async (topic: string): Promise<string> => {
  if (!topic.trim()) return "";

  try {
    const ai = getClient();
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Generate 10 high-value SEO keywords for the topic: "${topic}". Return them as a comma-separated list.`,
    });
    return response.text || "";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error generating keywords.";
  }
};