import { Client } from "@liuhui/wangdian";

async function main() {
    const client = new Client("John");
    client.sayHello();
}

await main();