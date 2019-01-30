import { FETCHING_FRIENDS,
         FRIENDS_FETCHED,
         FRIENDS_SAVED,
         SAVING_FRIENDS,
         UPDATING_FRIEND,
         FRIEND_UPDATED,
         DELETING_FRIEND,
         FRIEND_DELETED
         } from '../actions';

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [],
    error: null
}

export const friendReducer = (state = initialState, action) => {
    console.log('reducer', action);
        case FETCHING_FRIENDS:
            console.log('fetching_friends')
            return {
                ...state,
                error: '',
                isFetching: true
            };
        case FRIENDS_FETCHED:
            return {
                ...state,
                friends: action.payload,
                isFetching: false,
                error: ''
            };
        case FRIENDS_SAVED:
            return {

            };
        case SAVING_FRIENDS:
            return {

            };
        case UPDATING_FRIEND:
            return {

            };
        case FRIEND_UPDATED:
            return {

            };
        case DELETING_FRIEND:
            return {

            };
}
