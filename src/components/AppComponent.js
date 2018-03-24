import React from 'react'
require('../style.scss')

import RootUIContainer from '../containers/rootUI/RootUIContainer'

const App = () => (
    <div className="container">
        <br />
        <div className="panel panel-primary innerContainer">
            <div className="panel-body">
                <RootUIContainer />
            </div>
        </div>
    </div>
)

export default App
