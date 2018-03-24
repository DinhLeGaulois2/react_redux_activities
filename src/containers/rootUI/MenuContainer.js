import { connect } from 'react-redux'

import { set_HOME_UI, set_BMI_UI, set_LIBRARY_CONGRESS_UI, set_GOOGLE_MAPS_UI } from '../../actions/rootUI/routUIAction'

import { I_HOME, I_BMI, I_LIBRARY_CONGRESS, I_GOOGLE_MAPS } from '../../constants/rootUIConstants'

import MenuButtonComponent from '../../components/rootUI/MenuButtonComponent'

const mapDispatchToProps = (dispatch, ownProps) => ({
    onMenuClick: () => {
        if (ownProps.menuOption == "I_HOME")
            dispatch(set_HOME_UI())
        else if (ownProps.menuOption == "I_BMI")
            dispatch(set_BMI_UI())
        else if (ownProps.menuOption == "I_LIBRARY_CONGRESS")
            dispatch(set_LIBRARY_CONGRESS_UI())
        else if (ownProps.menuOption == "I_GOOGLE_MAPS")
            dispatch(set_GOOGLE_MAPS_UI())
    }
})

const MenuContainer = connect(
    null,
    mapDispatchToProps
)(MenuButtonComponent)

export default MenuContainer
