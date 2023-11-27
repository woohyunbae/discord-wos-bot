const { SlashCommandBuilder } = require("discord.js");
const { hasUser, setUser } = require("../../users/user");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("추가")
    .setDescription("userCode 추가")
    .addStringOption((option) =>
      option
        .setName("id")
        .setDescription("ID ex)8924146")
        .setRequired(true)
        .setMaxLength(6)
        .setMinLength(6)
    )
    .addStringOption((option) =>
      option.setName("nickname").setDescription("유저 닉네임").setRequired(true)
    ),
  async execute(interaction) {
    const userCode = interaction.options.getString("id");
    const userNickname = interaction.options.getString("nickname");
    if (await hasUser(userCode)) {
      interaction.reply("이미 있는거라는데?");
      return;
    }

    try {
      await setUser(userCode, userNickname);
      await interaction.reply(`${userNickname} 등록!`);
    } catch (e) {
      await interaction.reply("어 이러면 안대는데...오류남.");
    }
  },
};
