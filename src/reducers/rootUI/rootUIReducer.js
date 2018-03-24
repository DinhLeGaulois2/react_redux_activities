import { I_BMI, I_LIBRARY_CONGRESS, I_HOME } from '../../constants/rootUIConstants'

const rootUIReducer = (state = {
    active_UI: I_HOME
}, action) => {
    switch (action.type) {
        case I_HOME:
            return Object.assign({}, state, { active_UI: I_HOME })
        case I_BMI:
            return Object.assign({}, state, { active_UI: I_BMI })
        case I_LIBRARY_CONGRESS:
            return Object.assign({}, state, { active_UI: I_LIBRARY_CONGRESS })
    }
    return state;
}

export default rootUIReducer