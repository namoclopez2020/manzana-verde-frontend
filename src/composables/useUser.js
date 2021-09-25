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
        loggedIn: computed((e) => store.getters[`${object}/loggedIn`] ),

        // Methods
        setRegister: ( e ) => store.dispatch(`${object}/register`, e ),
        getLogin: ( e ) => store.dispatch(`${object}/login`, e ),
        setLogout: () => store.dispatch(`${object}/logout`),
        setFetchingData: ( e ) => store.dispatch(`${object}/setFetchingData`, e ),
    }
}

export default useUser