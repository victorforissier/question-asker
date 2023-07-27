import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { Chat } from "polyfact";

const rl = readline.createInterface({ input, output });

async function main () {
    const topic = "advanced physics";

    const systemPrompt = `Ask a random ${topic} question. If the Human answers correctly, ask another question on ${topic}. If the Human answers incorrectly, give the correct answer in a short paragraph; then ask another question about ${topic}.`;

    const chat = new Chat({ systemPrompt });

    console.log(await chat.sendMessage("start"));

    while (true) {
        const userInput = await rl.question("> ");

        console.log(await chat.sendMessage(userInput));
    }
}

main();
