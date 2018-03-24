import React from 'react'

import LibraryOfCongressDataContainer from '../../containers/libraryOfCongress/LibraryOfCongressDataContainer'
import LibraryOfCongressContainer from '../../containers/libraryOfCongress/LibraryOfCongressContainer'

const LibraryOfCongressMainUI = () => (
    <div className="panel panel-primary">
        <div className="panel-body">
            <LibraryOfCongressContainer />
            <LibraryOfCongressDataContainer />
        </div>
    </div>
)

export default LibraryOfCongressMainUI
