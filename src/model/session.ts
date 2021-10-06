export default class Session {
    public token: string;
    public username: string;
    public isLoggedIn: boolean;
    public userId: number;
    public imageUrl: string;

    constructor(
        token: string,
        username: string,
        isLoggedIn: boolean,
        userId: number,
        imageUrl: string,
    ) {
        this.token = token;
        this.username = username;
        this.isLoggedIn = isLoggedIn;
        this.userId = userId;
        this.imageUrl = imageUrl;
    }
}
