import * as types from './types'

export default {

    [types.FETCH_REQUEST_NOT_SELECTED] (state, { state_new = true }){
        state.notSelectedFetchingData = state_new
        state.notSelectedErrors = null
    },
    [types.FETCH_SUCCESS_NOT_SELECTED] (state, { data }){
        const { list } = data
        state.listNotSelected = list
        state.notSelectedFetchingData = false
        state.notSelectedErrors = null
    },
    [types.FETCH_FAILURE_NOT_SELECTED] (state, { errors }){
        state.notSelectedFetchingData = false
        state.notSelectedErrors = errors
    },

    [types.FETCH_REQUEST_SELECTED] (state, { state_new = true }){
        state.selectedFetchingData = state_new
        state.selectedErrors = null
    },
    [types.FETCH_SUCCESS_SELECTED] (state, { data }){
        const { list } = data

        state.listSelected = list
        
        state.selectedFetchingData = false
        state.selectedErrors = null
    },
    [types.FETCH_FAILURE_SELECTED] (state, { errors }){
        state.selectedFetchingData = false
        state.selectedErrors = errors
    },

    [types.SET_ASSIGN_FETCH_REQUEST] (state, { id }){
        const { data } = state.listNotSelected
        const item = data.find(e => e.id == id)
        item.fetchingData = true;
        item.errors = null;
    },
    [types.SET_ASSIGN_FETCH_SUCCESS] (state, { id }){

        console.log('SET_ASSIGN_FETCH_SUCCESS',state)

        const { data: listNotSelected } = state.listNotSelected

        const { data: listSelected } = state.listSelected

        console.log('listNotSelected',listNotSelected)

        const item = listNotSelected.find(e => e.id == id);
        item.fetchingData = false;
        item.errors = null;

        state.listNotSelected.data = listNotSelected.filter(e => e.id != id);

        listSelected.unshift(item);
    },
    [types.SET_ASSIGN_FETCH_FAILED] (state, { id, errors }){
        const item = listNotSelected.find(e => e.id == id);
        item.fetchingData = false;
        item.errors = errors;
    },

    [types.SET_DELETE_FETCH_REQUEST] (state, { id }){
        const { data } = state.listSelected
        const item = data.find(e => e.id == id)
        item.fetchingData = true;
        item.errors = null;
    },
    [types.SET_DELETE_FETCH_SUCCESS] (state, { id }){
        const { data: listNotSelected } = state.listNotSelected

        const { data: listSelected } = state.listSelected

        console.log('listNotSelected',listNotSelected)

        const item = listSelected.find(e => e.id == id);
        item.fetchingData = false;
        item.errors = null;

        state.listSelected.data = listSelected.filter(e => e.id != id);

        listNotSelected.unshift(item);
    },
    [types.SET_DELETE_FETCH_FAILED] (state, { id, errors }){
        const item = listSelected.find(e => e.id == id);
        item.fetchingData = false;
        item.errors = errors;
    },
}
