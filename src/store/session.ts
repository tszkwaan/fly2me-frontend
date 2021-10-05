import Session from '@/model/session'

interface State {
    username: string
    userId: number | null
    token: string
    isLoggedIn: boolean
}

export default {
    state: {
        username: '',
        userId: undefined,
        token: '',
        isLoggedIn: false,
    },
    mutations: {
        setSession(state: State, session: Session) {
            state.username = session.username
            state.token = session.token
            state.isLoggedIn = session.isLoggedIn
            state.userId = session.userId
        },
    },
}
