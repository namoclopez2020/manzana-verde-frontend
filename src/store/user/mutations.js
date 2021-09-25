import * as types from './types'
import router from '../../router'

export default {
    [types.SET_PARAMS] (state, params){
        state.serverParams = params
    },
    [types.FETCH_REQUEST] (state, { state_new = true }){
        state.fetchingData = state_new
        state.errors = null
    },
    [types.FETCH_SUCCESS] (state, { data }){
        console.log('data',data)
        state.fetchingData = false
        state.errors = null
        state.loggedIn = true;
        localStorage.setItem('user', JSON.stringify(data))
        router.push("admin");
    },
    [types.FETCH_FAILURE] (state, { errors }){
        state.fetchingData = false
        state.errors = errors
    },
}
