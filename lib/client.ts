class Client {
    // name property
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    sayHello() {
        console.log(`Hello, ${this.name}!`);
    }
}
export {
    Client
}