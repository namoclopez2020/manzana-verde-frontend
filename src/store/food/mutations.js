import * as types from './types'

export default {
    [types.FETCH_REQUEST_NOT_SELECTED] (state, { state_new = true }){
        state.fetchingData = state_new
        state.errors = null
    },
    [types.FETCH_SUCCESS_NOT_SELECTED] (state, { data }){

        console.log('mutations')
        console.log('data',data)

        const { list } = data

        console.log('list',list)

        state.listNotSelected = list

        console.log('mutations')
        console.log('data',data)

        state.fetchingData = false
        state.errors = null
    },
    [types.FETCH_FAILURE_NOT_SELECTED] (state, { errors }){
        state.fetchingData = false
        state.errors = errors
    },

    [types.FETCH_REQUEST_SELECTED] (state, { state_new = true }){
        state.fetchingData = state_new
        state.errors = null
    },
    [types.FETCH_SUCCESS_SELECTED] (state, { data }){
        const { list } = data

        state.listSelected = list
        
        state.fetchingData = false
        state.errors = null
    },
    [types.FETCH_FAILURE_SELECTED] (state, { errors }){
        state.fetchingData = false
        state.errors = errors
    },
}
