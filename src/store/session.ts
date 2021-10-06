import Session from '@/model/session';

interface State {
    username: string;
    userId: number | null;
    token: string;
    isLoggedIn: boolean;
    imageUrl: string;
}

export default {
    state: {
        username: '',
        userId: undefined,
        imageUrl: '',
        token: '',
        isLoggedIn: false,
    },
    mutations: {
        setSession(state: State, session: Session) {
            state.username = session.username;
            state.token = session.token;
            state.isLoggedIn = session.isLoggedIn;
            state.userId = session.userId;
            state.imageUrl = session.imageUrl;
        },
    },
};
