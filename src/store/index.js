import { createStore, createLogger } from 'vuex'

import user from './user'
import food from './food'

const debug = process.env.NODE_ENV !== 'production';

export default createStore({
    strict: debug,
    plugins: debug ? [createLogger()] : [],
    modules: {
        user,
        food,
    },
})
