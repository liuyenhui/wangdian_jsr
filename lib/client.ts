class Client {
    // name property
    app_key: string;
    app_secret: string;
    sid: string;
    base_url: string;
    constructor(
        app_key: string,
        app_secret: string,
        sid: string,
        base_url: string = "https://api.wangdian.cn/openapi2/"
    ) {
        this.app_key = app_key;
        this.app_secret = app_secret;
        this.sid = sid;
        this.base_url = base_url;
    }
    info() {
        console.log(`Client app_key: ${this.app_key}, app_secret: ${this.app_secret}, sid: ${this.sid}, base_url: ${this.base_url}`);
    }
}
export {
    Client
}