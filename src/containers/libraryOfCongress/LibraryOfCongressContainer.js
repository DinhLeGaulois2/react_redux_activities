import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { congressSearch } from '../../actions/libraryOfCongress/libraryOfCongressActions'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} 
                placeholder={label} 
                type={type} 
                className="form-control" 
                autoComplete="off"
                autoCorrect="off"
                spellCheck="off"
            />
            {touched && error && <span>{error}</span>}
        </div>
    </div>
);

let LibraryOfCongressContainer = (props) => {
    const { error, handleSubmit, pristine, reset, submitting } = props;
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="panel panel-success">
                    <div className="panel-heading"><h2 align="center">[Source: "Library Of Congress"]</h2></div>
                    <div className="panel-body">
                        <Field
                            name="term"
                            type="text"
                            component={renderField}
                            label="Search"
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

LibraryOfCongressContainer = reduxForm({
    form: 'congressFormContainer'  // a unique identifier for this form
})(LibraryOfCongressContainer)

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (data) => { dispatch(congressSearch(data)) }
})

// You have to connect() to any reducers that you wish to connect to yourself
LibraryOfCongressContainer = connect(
    null,
    mapDispatchToProps
)(LibraryOfCongressContainer)


export default LibraryOfCongressContainer