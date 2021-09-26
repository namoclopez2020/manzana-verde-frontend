import * as types from './types'
import endpoint from '@/endpoint'

import { arrayToString } from '@/helpers'

export default {
    setFetchingData ({commit},{ state_new }) {
        commit(types.FETCH_REQUEST, { state_new })
    },
    register ({commit}, {
        name,
        password,
        c_password,
        email,
    }) {
        commit(types.FETCH_REQUEST, {})

        return endpoint.post({
            url: `${types.route}/register`,
            params: {
                name,
                password,
                c_password,
                email,
            },
        })
        .then(data => { 
            commit(types.FETCH_SUCCESS, { data })
            commit("USER", data);

            return data;
        })
        .catch(err => {
            if(err?.response){
                const { response } = err
                const { data, status } = response

                if(status == 401) commit("USER", null);

                commit(types.FETCH_FAILURE, { errors: arrayToString(data) }) 

                return data
            }
        });
    },
    login ({commit}, {
        password,
        email,
    }) {
        commit(types.FETCH_REQUEST, {})

        return endpoint.post({
            url: `${types.route}/login`,
            params: {
                password,
                email,
            },
        })
        .then(data => { 
            commit(types.FETCH_SUCCESS, { data })
            commit("USER", data);

            return data;
        })
        .catch(err => {
            if(err?.response){
                const { response } = err
                const { data, status } = response

                if(status == 401) commit("USER", null);

                commit(types.FETCH_FAILURE, { errors: arrayToString(data) }) 

                return data
            }
        });
    },
    logout ({commit}) {
        commit(types.FETCH_REQUEST, {})

        return endpoint.get({
            url: `${types.route}/logout`,
        })
        .then(data => { 
            commit("USER", null);
            commit(types.FETCH_SUCCESS, { data })

            return data;
        })
        .catch(err => {
            if(err?.response){
                const { response } = err
                const { data, status } = response

                if(status == 401) commit("USER", null);

                commit(types.FETCH_FAILURE, { errors: arrayToString(data) }) 

                return data
            }
        });
    },
    fetchUser({ commit }, data ) {
        if (data) {
            commit("USER", data );
        } else {
            commit("USER", null);
        }
    },
}
