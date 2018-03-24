import React from 'react'

import HomePage from './HomeComponent'
import BMI from '../bmi/BmiMainUI'
import LibraryOfCongress from '../libraryOfCongress/LibraryOfCongressMainUI'

import PropTypes from 'prop-types'

import { I_HOME, I_BMI, I_LIBRARY_CONGRESS } from '../../constants/rootUIConstants'

import Menu from '../../containers/rootUI/MenuContainer'


const RootUIComponent = ({ active_UI }) => (
    <div>
        <p align="center">
            <Menu menuOption="I_HOME">Home</Menu>
            {"  "}
            <Menu menuOption="I_BMI">BMI</Menu>
            {"  "}
            <Menu menuOption="I_LIBRARY_CONGRESS">Library of Congress</Menu>
        </p>
        <br />
        <div>
            { active_UI == I_HOME && <HomePage /> }
            { active_UI == I_BMI && <BMI /> }
            { active_UI == I_LIBRARY_CONGRESS && <LibraryOfCongress /> }
        </div>
    </div>
)

RootUIComponent.propTypes = {
    active_UI: PropTypes.string.isRequired
}

export default RootUIComponent
