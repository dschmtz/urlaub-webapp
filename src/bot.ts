import { TelegramBot, UpdateType } from "https://deno.land/x/telegram_chatbot/mod.ts"
import "https://deno.land/x/dot_env@0.2.0/load.ts"
import { Bson } from "https://deno.land/x/mongo@v0.29.1/mod.ts";
import "https://deno.land/x/dotenv/load.ts";
import { assertNotEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts"

import { MongoDBConnector } from "./database/mongodb-connector.ts";


// Read MongoDB URL from .env file
//const MONGO_DB_URL = Deno.env.get("MONGO_DB_URL");
//if (!MONGO_DB_URL) throw new Error("MONGO_DB_URL is not provided");
export async function createGroup(name : string){

      const MONGO_DB_URL = Deno.env.get("MONGO_DB_URL");
      if (!MONGO_DB_URL) throw new Error("MONGO_DB_URL is not provided");

      const mongodb = new MongoDBConnector(MONGO_DB_URL);

      await mongodb.connect();

      let id: Bson.ObjectId | undefined;

      id = await mongodb.insert({
          name: name,
          description: "",
          targets: [],
          dates: []
          });
      return id?.toString();
}
export function createTelegramBot(token: string) {

    const bot = new TelegramBot(token);

    bot.on(UpdateType.Message, async (message: any) => {

        const text = message.message.text.toLowerCase() || "I can't hear you";

        console.log(text);

        if(text.startsWith("newgroup")){
            let antwort = text.replace("newgroup", "");
            let id = await createGroup(antwort)
            await bot.sendMessage({ chat_id: message.message.chat.id, text: `Neue Gruppe ${antwort} erstellt` })
            await bot.sendMessage({ chat_id: message.message.chat.id, text: `[Klicke hier um auf deine Gruppenseite zu kommen](http://127.0.0.1:3000/?id=${id})`, parse_mode:"MarkdownV2" })
            console.log(id);
            console.log(`http://127.0.0.1:3000/?id=${id}`);
            return;
        }
        if(text.startsWith("help")) {

            await bot.sendMessage({ chat_id: message.message.chat.id, text: `Schreibe: \nNewGroup \nHelp` })
            return;
        }

        await bot.sendMessage({ chat_id: message.message.chat.id, text: `Unbekannter Befehl ${text}. Du kannst mit help eine liste der befehle bekommen.` })

        });

    bot.run({

        polling: true,
    });

    return bot;
}
