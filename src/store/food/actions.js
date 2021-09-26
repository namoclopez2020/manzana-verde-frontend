import * as types from './types'
import endpoint from '@/endpoint'

import { arrayToString } from '@/helpers'

export default {
    getListNotSelected ({commit}, {
        page,
        per_page,
    }) {
        commit(types.FETCH_REQUEST_NOT_SELECTED, {})

        return endpoint.get({
            url: `${types.route}/list`,
            params: {
                page,
                per_page,
            },
        })
        .then(data => {
            commit(types.FETCH_SUCCESS_NOT_SELECTED, data )

            return data;
        })
        .catch(err => {
            if(err?.response){
                const { response } = err
                const { data, status } = response

                commit(types.FETCH_FAILURE_NOT_SELECTED, { errors: arrayToString(data) }) 

                return data
            }
        });
    },
    getListSelected ({commit}, {
        page,
        per_page,
    }) {
        commit(types.FETCH_REQUEST_SELECTED, {})

        return endpoint.get({
            url: `${types.route}/list_of_user`,
            params: {
                page,
                per_page,
            },
        })
        .then(data => { 
            commit(types.FETCH_SUCCESS_SELECTED, data )

            return data;
        })
        .catch(err => {
            if(err?.response){
                const { response } = err
                const { data, status } = response

                commit(types.FETCH_FAILURE_SELECTED, { errors: arrayToString(data) }) 

                return data
            }
        });
    },
}
