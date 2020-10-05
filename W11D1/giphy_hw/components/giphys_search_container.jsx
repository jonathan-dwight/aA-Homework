import { connect } from 'react-redux';
import GiphysSearch from './giphys_search';
import { fetchSearchGiphys } from '../actions/giphy_actions';

const mSTP = (state) => {
    const giphys = Object.values(state.giphys);
    return {
        giphys: giphys
    }
}

const mDTP = (dispatch) => {
    return ({
        fetchSearchGiphys: () => {
            return dispatch(fetchSearchGiphys());
        }
    });
};

export default connect(mSTP, mDTP)(GiphysSearch);