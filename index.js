// BotBox fixture: minimal grammY echo bot. Happy-path acceptance target (Node).
import { Bot } from "grammy";

const token = process.env.BOT_TOKEN;
if (!token) throw new Error("BOT_TOKEN is not set");

const bot = new Bot(token);

bot.command("start", (ctx) =>
  ctx.reply("BotBox fixture is alive. Send me anything and I'll echo it."),
);
bot.on("message:text", (ctx) => ctx.reply(ctx.message.text));

await bot.init();
console.log(`starting as @${bot.botInfo.username}`);
bot.start();
