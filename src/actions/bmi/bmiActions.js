import { BMI_CALCULATION, BMI_INCH_POUND, BMI_CM_KG, BMI_QUALIFICATION, BMI_UNIT_CHANGE, BMI_RESET } from '../../constants/bmiConstants'
import { reset } from 'redux-form'

const isThatGoodDoctor = (ind) => {
    if (ind < 18.5) return "Underweight (bmi < 18.5)"
    else if (ind > 18.5 && ind < 25) return "Normal or Healthy Weight (18.5 < bmi < 25)"
    else if (ind > 24.9 && ind < 30) return "Overweight (24.9 < bmi < 30)"
    else return "Obese (bmi > 30)"
}

// height: inch, weight: pound
export const makeCalculationInchPound = (values) => {
    let h = values.height
    let bmi = (values.weight / h / h) * 703
    return (dispatch) => dispatch({
        type: BMI_CALCULATION,
        height: h,
        weight: values.weight,
        bmi: bmi.toFixed(2),
        qualification: isThatGoodDoctor(bmi)
    })
}

// height: centimeter, weight: kilogram
export const makeCalculationCmKg = (values) => {
    let h = values.height
    let bmi = values.weight / (h * h)
    return (dispatch) => dispatch({
        type: BMI_CALCULATION,
        height: h,
        weight: values.weight,
        bmi: bmi.toFixed(2),
        qualification: isThatGoodDoctor(bmi)
    })
}

// w: kilogram, m: meter, cm: centimeter
export const unitChange = (unit) => {
    return (dispatch) => dispatch(() => ({
        type: BMI_UNIT_CHANGE,
        unit
    }))
}

export const resetBMI = () => {
    return (dispatch) => {
        dispatch({type: BMI_RESET })
        dispatch(reset('bmiFormContainer'))  // requires form name
    }
}