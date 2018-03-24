import { BMI_CALCULATION, BMI_INCH_POUND, BMI_CM_KG, BMI_QUALIFICATION, BMI_UNIT_CHANGE, BMI_RESET } from '../../constants/bmiConstants'

const initialState = {
    height: 0,
    weight: 0,
    unit: BMI_INCH_POUND,
    bmi: 0,
    qualification: "Underweight"
}

const bmiReducer = (state = initialState, action) => {
    switch (action.type) {
        case BMI_CALCULATION:
            return Object.assign({}, state, {
                height: parseInt(action.height),
                weight: parseInt(action.weight), 
                bmi: parseInt(action.bmi), 
                qualification: action.qualification
            })
        case BMI_UNIT_CHANGE:
            return Object.assign({}, state, { unit: action.unit })
        case BMI_RESET:
            return initialState
    }
    return state;
}

export default bmiReducer