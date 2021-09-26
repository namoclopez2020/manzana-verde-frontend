export default {
    selectedFetchingData( state, ) {
        return state.selectedFetchingData
    },
    notSelectedFetchingData( state, ) {
        return state.notSelectedFetchingData
    },
    selectedErrors( state, ) {
        return state.selectedErrors
    },
    notSelectedErrors( state, ) {
        return state.notSelectedErrors
    },

    pictureFetchingData( state, ) {
        return state.pictureFetchingData
    },
    pictureErrors( state, ) {
        return state.pictureErrors
    },

    createFetchingData( state, ) {
        return state.createFetchingData
    },
    createErrors( state, ) {
        return state.createErrors
    },

    listNotSelected( state, ) {
        return state.listNotSelected
    },
    listSelected( state, ) {
        return state.listSelected
    },
}