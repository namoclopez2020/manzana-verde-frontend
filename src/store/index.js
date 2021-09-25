import { createStore, createLogger } from 'vuex'

import user from './user'

const debug = process.env.NODE_ENV !== 'production';

export default createStore({
    strict: debug,
    plugins: debug ? [createLogger()] : [],
    modules: {
        user,
    },
})
