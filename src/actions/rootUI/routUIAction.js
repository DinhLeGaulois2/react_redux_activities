import { I_BMI, I_LIBRARY_CONGRESS, I_HOME } from '../../constants/rootUIConstants'

export const set_BMI_UI = () => {
    return (dispatch) => { dispatch({type: I_BMI }) }
}

export const set_LIBRARY_CONGRESS_UI = () => {
    return (dispatch) => { dispatch({type: I_LIBRARY_CONGRESS }) }
}

export const set_HOME_UI = () => {
    return (dispatch) => { dispatch({type: I_HOME }) }
}