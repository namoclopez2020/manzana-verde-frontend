import * as types from './types'
import router from '@/router'

export default {
    [types.FETCH_REQUEST] (state, { state_new = true }){
        state.fetchingData = state_new
        state.errors = null
    },
    [types.FETCH_SUCCESS] (state, { data }){
        state.fetchingData = false
        state.errors = null
    },
    [types.FETCH_FAILURE] (state, { errors }){
        state.fetchingData = false
        state.errors = errors
    },
    [types.USER] (state, data){
        state.data = data;
        if(data){
            state.loggedIn = true;
            localStorage.setItem('user', JSON.stringify(data))
            router.push({ name: 'Admin' });
        }else{
            state.loggedIn = false;
            localStorage.removeItem('user')
            router.push({ name: 'Home' });
        }
    },
}
