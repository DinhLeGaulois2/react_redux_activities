import React from 'react'
import PropTypes from 'prop-types'
import { BMI_CALCULATION, BMI_INCH_POUND, BMI_CM_KG, BMI_QUALIFICATION, BMI_UNIT_CHANGE } from '../../constants/bmiConstants'

import Modal from '../modal/modal'

const bmiDataComponent = ({ height, weight, unit, bmi, qualification, reset }) => {
    return (
        <div>
            {unit == BMI_INCH_POUND && bmi > 0 &&
                <Modal>
                    <div className="panel panel-success">
                        <div className="panel-heading">
                            <p align="center"><font size="+3">Body Mass Index (BMI)</font>
                                <button onClick={reset} className="btnModal">X</button>
                            </p>
                        </div>
                        <div className="panel-body">
                            <h3><b>Height:</b> {height} in</h3>
                            <h3><b>Weight:</b> {weight} lbs</h3>
                            <h3><b>BMI:</b> {bmi}</h3>
                            <hr />
                            <h3><b>You are:</b> <font color="blue">{qualification}</font></h3>
                        </div>
                    </div>
                </Modal>
            }
            {unit == BMI_CM_KG && bmi > 0 &&
                <Modal>
                    <div className="panel panel-success">
                        <div className="panel-heading">
                            <p align="center"><font size="+3">Body Mass Index (BMI)</font>
                                <button onClick={reset} className="btnModal">X</button>
                            </p>
                        </div>
                        <div className="panel-body">
                            <h3><b>Height:</b> {height} cm</h3>
                            <h3><b>Weight:</b> {weight} kg</h3>
                            <h3><b>BMI:</b> {bmi}</h3>
                            <hr />
                            <h3><b>You are:</b> <font color="blue">{qualification}</font></h3>
                        </div>
                    </div>
                </Modal>
            }
        </div>
    )
}

bmiDataComponent.propTypes = {
    height: PropTypes.number,
    weight: PropTypes.number,
    unit: PropTypes.string,
    bmi: PropTypes.number,
    qualification: PropTypes.string,
    reset: PropTypes.func.isRequired
}

export default bmiDataComponent
