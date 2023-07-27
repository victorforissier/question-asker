import { generateWithTokenUsage } from "polyfact";

const chatHistory: string[] = [];

export async function sendMessage(userAnswer: string, chatHistory: string[]) {
  const topic = "advanced physics";

  let prompt = "";
  if (!chatHistory.length) {
    prompt = `Ask a random ${topic} question.`;
  } else {
    prompt = `
  Check if this answer answers that question correctly. Question: ${
    chatHistory[chatHistory.length - 2]
  }. Answer: ${chatHistory[chatHistory.length - 1]}.
  If it did answer correctly, ask another question on ${topic}. If it did not answer corretly give the correct answer in a short paragraph; then ask another question about ${topic}.`;
  }

  const { result, tokenUsage } = await generateWithTokenUsage(prompt);
  chatHistory.push(userAnswer);
  chatHistory.push(result);
  return result;
}

export function getChatHistory() {
  return chatHistory;
}
