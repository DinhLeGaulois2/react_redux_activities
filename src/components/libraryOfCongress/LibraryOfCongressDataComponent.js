import React from "react"
import PropTypes from 'prop-types'

import Modal from '../modal/modal'

const Content2Display = (data) => {
    return (
        <div className="articleDisplay">
            <h3><b><u>Title:</u></b> {data.title}</h3>
            <h3><b><u>Subjects:</u></b></h3>
            {data.subjects.map((s, index) =>
                <li key={index}>{s}</li>
            )}
            <h3><b><u>Url:</u></b> <a href={data.url} target="_blank">{data.url}</a></h3>
            <h3><b><u>Date of Publication:</u></b> {data.dateOfPublication}</h3>
        </div>
    )
}

const LibraryOfCongressDataComponent = ({ searchTerm, response, reset }) => {
    return (
        <div>
            {searchTerm.length > 0 &&
                <Modal>
                    <div className="panel panel-success">
                        <div className="panel-heading">
                            <p align="center"><font size="+3" color="blue">Search Term: {searchTerm.toUpperCase()}</font>
                                <button onClick={reset} className="btnModal">X</button>
                            </p>
                        </div>
                        <div className="panel-body">
                            {response.map((r, index) =>
                                <Content2Display {...r} key={index} />
                            )}
                        </div>
                    </div>
                </Modal>
            }
            {searchTerm.length > 0 && response.length == 0 &&
                <Modal>
                    <div className="panel panel-success">
                        <div className="panel-body">
                            <p align="center"><font size="+3" color="blue">NO DATA FOUND</font>
                                <button onClick={reset} className="btnModal">X</button></p>
                        </div>
                    </div>

                </Modal>
            }
        </div>
    )
}

LibraryOfCongressDataComponent.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    response: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        subjects: PropTypes.arrayOf(PropTypes.string),
        url: PropTypes.string,
        dateOfPublication: PropTypes.string
    })),
    reset: PropTypes.func.isRequired
}

export default LibraryOfCongressDataComponent;
