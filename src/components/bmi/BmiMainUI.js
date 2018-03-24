import React from 'react'

import BmiFormContainer from '../../containers/bmi/BmiFormContainer'
import BmiDataContainer from '../../containers/bmi/BmiDataContainer'

const BmiMainUI = () => (
    <div>
        <div className="panel panel-primary">
            <div className="panel-body">
                <BmiFormContainer />
                <BmiDataContainer />
            </div>
        </div>
    </div>
)

export default BmiMainUI
