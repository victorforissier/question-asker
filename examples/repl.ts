// repl.ts
import * as repl from "repl";
import { sendMessage, getChatHistory } from "./../src/index";

const r = repl.start({
  prompt: "> ",
  eval: async (
    input: string,
    _context: any,
    _filename: string,
    callback: (err: any, result?: any) => void
  ) => {
    // Handle empty inputs
    if (input.trim() === "") {
      callback(null);
      return;
    }

    // Call the sendMessage function with the chat history
    const chatHistory = getChatHistory();
    const botAnswer = await sendMessage(input, chatHistory);
    console.log(botAnswer);

    callback(null);
  },
});

// Define a custom command to print the chat history
r.defineCommand("history", {
  help: "Print the chat history",
  action: () => {
    const chatHistory = getChatHistory();
    for (const message of chatHistory) {
      console.log(message);
    }
    r.displayPrompt();
  },
});

r.defineCommand("start", {
  help: "Start the chat",
  action: async () => {
    const botAnswer = await sendMessage("", []);
    console.log(botAnswer);
    return;
  },
});
