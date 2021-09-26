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
    setAssign ({commit}, {
        id,
        lists,
    }) {
        commit(types.SET_ASSIGN_FETCH_REQUEST, { id })

        return endpoint.post({
            url: `${types.route}/assign`,
            params: {
                food_id: id,
                lists,
            },
        })
        .then(data => {
            console.log('actions->data',data)
            commit(types.SET_ASSIGN_FETCH_SUCCESS, { id })

            return data;
        })
        .catch(err => {
            if(err?.response){
                const { response } = err
                const { data, status } = response

                commit(types.SET_ASSIGN_FETCH_FAILED, { id, errors: arrayToString(data) }) 

                return data
            }
        });
    },
    setDelete ({commit}, {
        id,
        lists,
    }) {
        commit(types.SET_DELETE_FETCH_REQUEST, { id })

        return endpoint.post({
            url: `${types.route}/delete`,
            params: {
                food_id: id,
                lists,
            },
        })
        .then(data => { 
            commit(types.SET_DELETE_FETCH_SUCCESS, { id })

            return data;
        })
        .catch(err => {
            if(err?.response){
                const { response } = err
                const { data, status } = response

                commit(types.SET_DELETE_FETCH_FAILED, { id, errors: arrayToString(data) }) 

                return data
            }
        });
    },
    setFood ({commit}, {
        name,
        description,
        picture,
    }) {
        commit(types.SET_CREATE_FETCH_REQUEST)

        return endpoint.post({
            url: `${types.route}/create`,
            params: {
                name,
                description,
                picture,
            },
        })
        .then(data => {
            console.log('actions->data',data)
            commit(types.SET_CREATE_FETCH_SUCCESS, {
                name,
                description,
                picture,
                data,
            })

            return true;
        })
        .catch(err => {
            if(err?.response){
                const { response } = err
                const { data, status } = response

                commit(types.SET_CREATE_FETCH_FAILED, { errors: arrayToString(data) }) 
            }
            return false
        });
    },
}
