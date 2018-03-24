import { connect } from 'react-redux';
import LibraryOfCongressDataComponent from '../../components/libraryOfCongress/LibraryOfCongressDataComponent';
import { resetCongressForm } from '../../actions/libraryOfCongress/libraryOfCongressActions'

const mapStateToProps = (state) => ({
    searchTerm: state.congress.searchTerm,
    response: state.congress.response
})

const mapDispatchToProps = (dispatch) => ({
    reset: () => dispatch(resetCongressForm())
})

const LibraryOfCongressDataContainer = connect(
    mapStateToProps,
    mapDispatchToProps

)(LibraryOfCongressDataComponent)

export default LibraryOfCongressDataContainer
