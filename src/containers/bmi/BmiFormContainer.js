import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { makeCalculationInchPound } from '../../actions/bmi/bmiActions'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} className="form-control" />
            {touched && error && <span>{error}</span>}
        </div>
    </div>
);

let BmiFormContainer = (props) => {
    const { error, handleSubmit, pristine, reset, submitting } = props;
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="panel panel-success">
                    <div className="panel-heading"><h2 align="center">Let Check Your BMI</h2></div>
                    <div className="panel-body">
                        <Field
                            name="height"
                            type="number"
                            component={renderField}
                            label="Height (inches)"
                        />
                        <Field
                            name="weight"
                            type="number"
                            component={renderField}
                            label="Weight (lbs)"
                        />
                    </div>
                </div>
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <p align="center">
                            <button type="submit" className="menuButton">Submit</button>&nbsp;&nbsp;&nbsp;
                            <button type="button" onClick={reset} className="menuButton">Clear Values</button>
                        </p>
                    </div>
                </div>
                {error && <strong>{error}</strong>}
            </form>
        </div>
    )
}

BmiFormContainer = reduxForm({
    form: 'bmiFormContainer'  // a unique identifier for this form
})(BmiFormContainer)

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (data) => { dispatch(makeCalculationInchPound(data)) }
})

// You have to connect() to any reducers that you wish to connect to yourself
BmiFormContainer = connect(
    null,
    mapDispatchToProps
)(BmiFormContainer)


export default BmiFormContainer