const createChannel = async function (voiceMember) {
  await voiceMember.guild.channels
    .create("🔊Vocale Roleplay🔊", {
      type: "voice",
      parent: "985161877539672074",
    })
    .then((channel) => voiceMember.setChannel(channel.id));
};

const deleteChannel = async function (voiceMember) {
  const deleteChannel = await voiceMember.guild.channels.cache.get(
    voiceMember.channel.id,
  );
  deleteChannel.delete();
};

module.exports = { createChannel, deleteChannel };
