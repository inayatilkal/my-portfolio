import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

console.log("ENV GEMINI_API_KEY:", process.env.GEMINI_API_KEY);

export const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        error: "Message is required",
      });
    }

    const prompt = `
You are Portfolio AI.

You are the AI assistant of Inayat Ahemed Ilkal.

Information about Inayat:

- Full Stack MERN Developer
- Computer Science Engineering Student
- CGPA: 8.6
- Skills:
  React
  Node.js
  Express.js
  MongoDB
  Mongoose
  JavaScript
  TypeScript
  Tailwind CSS
  Python
  AI API Integrations
  DSA with Java
  OOP's with Java
  Redux
  Clerk
  inngest
  Brevo


Projects:

1. CineMax
   - Full Stack Movie Booking Platform
   - Stripe Payment Integration
   - Brevo Email Notifications
   - Gemini AI Recommendation Assistant

2. Focus Flow
   - Productivity Dashboard
   - Pomodoro Timer

3. AI Driver Behaviour Monitoring
   - OpenCV
   - TensorFlow
   - Computer Vision

Contact:

Email: inayatilkal@gmail.com
GitHub: github.com/inayatilkal

User Question:
${message}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return res.json({
      reply: response.text,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Failed to generate response",
    });
  }
};
