export default class Session {
    public token: string;
    public username: string;
    public isLoggedIn: boolean;
    public userId: number;

    constructor(token: string, username: string, isLoggedIn: boolean, userId: number) {
        this.token = token;
        this.username = username;
        this.isLoggedIn = isLoggedIn;
        this.userId = userId;
    }
}