const DiscordRPC = require('discord-rpc'); 
const client = new DiscordRPC.Client({ transport: 'ipc' }); 
require('dotenv').config();

(async () => {
    client.on('ready', async () => { 
        await client.setActivity({ 
            buttons: [{ label: "Button Title Here", url: "https://youtube.com/itechnoboss" }],
            state: "State",
            details: "Description",
            startTimestamp: new Date(),
            largeImageKey: "Icon Number 1 (Large Icon)",
            largeImageText: "This text is shown when hovering over the large Image in Discord.",
            smallImageKey: "Icon Number 2 (Small Icon)",
            smallImageText: "This text is shown when hovering over the small Image in Discord.",
            

        }).catch(err => console.log(err));

        console.log("Discord Rich Presence has been enabled.");
    });

    await client.login({ clientId: process.env.applicationID }).catch(console.error); 
})();