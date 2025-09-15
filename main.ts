import { Client } from "@liuhui/wangdian";

async function main() {
    const client = new Client("cmdz02-yya", "7a3dc75ae7fee8368b89f2c82ac40d12", "cmdz02");
    client.info();
}

await main();