import { Command, type CommandContext, Declare, Embed } from "seyfert";

@Declare({
	name: "ping",
	description: "Ver status del bot",
})
export default class PingCommand extends Command {
	override async run(ctx: CommandContext) {
		const ping = ctx.client.gateway.latency;

		await ctx.write({
			embeds: [
				new Embed().setTitle("**PONG!**").setDescription(`Latencia: ${ping}`),
			],
		});
	}
}
