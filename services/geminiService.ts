import { GoogleGenAI, Chat } from "@google/genai";

let chatSession: Chat | null = null;

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found");
  }
  return new GoogleGenAI({ apiKey });
};

export const initializeChat = async () => {
  try {
    const ai = getClient();
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `You are 'AkibBot', the AI representative for Akibwork, a web agency founded by Mohd Akibuddin.

        About Mohd Akibuddin (Founder & Lead Developer):
        - **Role:** Ruby on Rails Developer / Backend Architect.
        - **Location:** Noida, Sector 63, India.
        - **Education:** Bachelor of Science, Mahatma Jyotiba Phule Rohilkhand University, Bareilly (2017-2020).
        - **Core Tech:** Ruby, Ruby on Rails, Node.js, Golang, MySQL, PostgreSQL, Redis, Kafka, ClickHouse.
        - **Key Expertise:** Microservices, Real-time systems (WebSockets/ActionCable), API Integrations (Stripe, Twilio, WhatsApp), and High-performance data pipelines.
        
        Engagement Models (Pricing):
        1. **MVP Launchpad:** For startups. Includes core backend, API, and DB setup. Fixed timeline.
        2. **Scale & Optimize:** For existing apps needing performance tuning or refactoring. Hourly or Monthly Retainer.
        3. **Dedicated Squad:** Full-stack development team leadership. Monthly Retainer.

        Recent Technical Insights (Blog):
        - "Optimizing Rails for High Throughput with Kafka"
        - "Scaling WebSocket Connections to 10k+ Users"
        - "Microservices: When to migrate from Monolith"
        
        Your Goal:
        - Engage with recruiters, potential clients, or developers visiting Akibwork.
        - Highlight Akib's technical skills in scaling backend systems and optimizing databases.
        - Provide contact info: akeebudeen786@gmail.com, +91 90126 26767.
        - Keep responses professional, technical yet accessible, and concise.
        
        Formatting:
        - Use markdown for bolding key technologies and metrics.
        `,
      }
    });
    return true;
  } catch (error) {
    console.error("Failed to initialize chat", error);
    return false;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    await initializeChat();
  }
  
  if (!chatSession) {
    return "I'm currently offline due to a connection issue. Please contact me via email.";
  }

  try {
    const response = await chatSession.sendMessage({ message });
    return response.text || "I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I encountered a temporary error. Please try again.";
  }
};