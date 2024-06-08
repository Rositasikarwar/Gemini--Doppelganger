import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

// const apiKey = "AIzaSyBvHzliCNsMkO8HqJudYfqRVWCIQbn_W58";
// const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  try {
      const chatSession = model.startChat({
          generationConfig,
          history: [],
      });

      const result = await chatSession.sendMessage(prompt);
      console.log(result.response.text());

      return result.response.text();
  } catch (error) {
      console.error("Error during API call:", error);
      throw new Error("Failed to fetch response from the API");
  }
}

export default run;
