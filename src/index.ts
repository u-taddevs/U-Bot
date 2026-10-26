import { Client, type ParseClient } from "seyfert";

function boostrap() {
	const client = new Client();
	client
		.start()
		.then(() => client.uploadCommands({ cachePath: "./commands.json" }));
}

void boostrap();

declare module "seyfert" {
	interface SeyfertRegistry {
		client: ParseClient<Client<true>>;
	}
}
