const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("빼기").setDescription("빼기"),
  async execute(interaction) {
    // const storedData = localStorage.getItem("ids") ?? "0";
    // localStorage.setItem("test", `${Number(storedData) - 1}`);
    // console.log(storedData);

    await interaction.reply("Pong!");
  },
};
