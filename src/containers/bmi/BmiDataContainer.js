import { connect } from 'react-redux';
import BmiDataComponent from '../../components/bmi/BmiDataComponent';

import { resetBMI } from '../../actions/bmi/bmiActions'

const mapStateToProps = (state) => ({
    height: state.bmi.height,
    weight: state.bmi.weight,
    unit: state.bmi.unit,
    bmi: state.bmi.bmi,
    qualification: state.bmi.qualification
})

const mapDispatchToProps = (dispatch) => ({
    reset: () => dispatch(resetBMI())
})

const bmiDataContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BmiDataComponent)

export default bmiDataContainer
