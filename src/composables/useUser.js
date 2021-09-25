import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const useUser = () => {

    const object = 'user';

    const store = useStore();

    // dispatch -> actions
    // commit -> mutations

    console.log('useUser')

    return {
        fetchingData: computed((e) => store.getters[`${object}/fetchingData`] ),
        errors: computed((e) => store.getters[`${object}/errors`] ),

        // Methods
        setRegister: ( e ) => store.dispatch(`${object}/register`, e ),
        getLogin: ( e ) => store.dispatch(`${object}/login`, e ),
        setFetchingData: ( e ) => store.dispatch(`${object}/setFetchingData`, e ),
    }
}

export default useUser