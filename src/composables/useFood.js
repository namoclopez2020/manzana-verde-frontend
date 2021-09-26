import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const useFood = () => {

    const object = 'food';

    const store = useStore();

    // dispatch -> actions
    // commit -> mutations

    return {
        selectedFetchingData: computed((e) => store.getters[`${object}/selectedFetchingData`] ),
        notSelectedFetchingData: computed((e) => store.getters[`${object}/notSelectedFetchingData`] ),
        selectedErrors: computed((e) => store.getters[`${object}/selectedErrors`] ),
        notSelectedErrors: computed((e) => store.getters[`${object}/notSelectedErrors`] ),

        listNotSelected: computed((e) => store.getters[`${object}/listNotSelected`] ),
        listSelected: computed((e) => store.getters[`${object}/listSelected`] ),

        // Methods
        getListNotSelected: ( e ) => store.dispatch(`${object}/getListNotSelected`, e ),
        getListSelected: ( e ) => store.dispatch(`${object}/getListSelected`, e ),
        setAssign: ( e ) => store.dispatch(`${object}/setAssign`, e ),
        setDelete: ( e ) => store.dispatch(`${object}/setDelete`, e ),
    }
}

export default useFood