import { generateWithType } from "polyfact";
import * as t from "io-ts";

export async function sendMessage(userAnswer: string) {
  const prompt = `Here is the user answers: ${userAnswer}. If it is true say: "Correct answer." and then ask another question. If it is not true, then explain why, and then after a new line, ask another question.`;

  const result = await generateWithType(prompt, t.type({ result: t.string }));

  return result;
}
