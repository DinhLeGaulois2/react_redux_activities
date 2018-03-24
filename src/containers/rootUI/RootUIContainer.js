import { connect } from 'react-redux'
import RootUIComponent from '../../components/rootUI/RootUIComponent'

import { set_HOME_UI, set_BMI_UI, set_LIBRARY_CONGRESS_UI } from '../../actions/rootUI/routUIAction'

const mapStateToProps = (state) => ({
    active_UI: state.rootUI.active_UI,
})

const RootUIContainer = connect(
    mapStateToProps
)(RootUIComponent)

export default RootUIContainer