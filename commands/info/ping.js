module.exports = {
    name: "ping",
    description: "Menampilkan Ms bot",
    aliases: [ "" ],
    usage: `<prefix>help`,
    tags: "info",
   
    run: async (client, message, args) => {
        const m = await message.channel.send(`Pong!`);
        m.edit("ping Pong!")
    }
}
