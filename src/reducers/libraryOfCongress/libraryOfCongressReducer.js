import {
    LIBRARY_CONGRESS_SEARCH_SUCCESS,
    LIBRARY_CONGRESS_SEARCH_FAILURE,
    LIBRARY_CONGRESS_SEARCH_TERM_ERASE
} from '../../constants/libraryOfCongressConstants'

const initialState = {
    searchTerm: "",
    response: [],
    error: null
}

const libraryOfCongressReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIBRARY_CONGRESS_SEARCH_SUCCESS:
            return Object.assign({}, state, { searchTerm: action.searchTerm, response: action.response })
        case LIBRARY_CONGRESS_SEARCH_FAILURE:
            return Object.assign({}, state, { error: action.error })
        case LIBRARY_CONGRESS_SEARCH_TERM_ERASE:
            return initialState

    }
    return state;
}

export default libraryOfCongressReducer