module.exports = async (client, message, queue, song) => {
	message.channel.send(
		`${client.emotes.play} | Играет \`${song.name}\` - \`${
			song.formattedDuration
		}\`\n${client.status(queue)}`
	);
};
