const { SlashCommandBuilder } = require("discord.js");

const { getAllUser } = require("../../users/user");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("누구")
    .setDescription("누가 등록했는지 봅시당"),
  async execute(interaction) {
    const allUser = await getAllUser();

    const exampleEmbed = {
      color: 0x0099ff,
      title: "누가 등록했는지 어디보자",
      description: "닉네임\n6자리코드",
      url: "https://wos-giftcode.centurygame.com/",
      fields: allUser.map((obj) => ({
        name: obj.nickname,
        value: obj.id,
        inline: true,
      })),
    };

    await interaction.reply({ embeds: [exampleEmbed] });
  },
};
