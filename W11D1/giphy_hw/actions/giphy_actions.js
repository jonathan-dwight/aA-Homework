import * as APIUtil from '../util/api_util';

export const fetchSearchGiphys = searchTerm => dispatch => {
    return APIUtil.fetchSearchGiphys(searchTerm)
        .then(giphys => dispatch(receiveSearchGiphys(giphys.data)))
};