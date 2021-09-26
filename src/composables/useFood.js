import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const useFood = () => {

    const object = 'food';

    const store = useStore();

    // dispatch -> actions
    // commit -> mutations

    return {
        fetchingData: computed((e) => store.getters[`${object}/fetchingData`] ),
        errors: computed((e) => store.getters[`${object}/errors`] ),
        listNotSelected: computed((e) => store.getters[`${object}/listNotSelected`] ),
        listSelected: computed((e) => store.getters[`${object}/listSelected`] ),

        // Methods
        getListNotSelected: ( e ) => store.dispatch(`${object}/getListNotSelected`, e ),
        getListSelected: ( e ) => store.dispatch(`${object}/getListSelected`, e ),
        // assign
        // delete
    }
}

export default useFood