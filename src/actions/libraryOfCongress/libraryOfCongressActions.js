import axios from "axios"
import { reset } from 'redux-form'

import {
    LIBRARY_CONGRESS_SEARCH_SUCCESS,
    LIBRARY_CONGRESS_SEARCH_FAILURE,
    LIBRARY_CONGRESS_SEARCH_TERM_ERASE
} from '../../constants/libraryOfCongressConstants'

export const take20 = (items) => {
    let first20 = items.slice(0, 20)
    let result = []
    for(let i=0 ; i<first20.length ; i++){
        let obj = first20[i]
        result.push({
            title: obj.title,
            subjects: obj.subject,
            url: "https://chroniclingamerica.loc.gov" + obj.id,
            dateOfPublication: obj.place_of_publication
        })
    }
    return result
}

export const congressSearch = (data) => {
    return (dispatch) => {
        axios.get("https://chroniclingamerica.loc.gov/search/titles/results/?terms=" + data.term + "&format=json")
            .then(response => {
                dispatch({
                    type: LIBRARY_CONGRESS_SEARCH_SUCCESS,
                    searchTerm: data.term,
                    response: take20(response.data.items)
                })
            })
            .catch((error) => dispatch({ type: LIBRARY_CONGRESS_SEARCH_FAILURE, error: error }));
    }
}

export const resetCongressForm = () => {
    return (dispatch) => {
        dispatch({type: LIBRARY_CONGRESS_SEARCH_TERM_ERASE })
        dispatch(reset('congressFormContainer'))  // requires form name
    }
}