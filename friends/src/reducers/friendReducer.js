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
    switch(action.type) {
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
                ...state,
                friends: action.payload,
                isSaving: false,
                error: ''
            };
        case SAVING_FRIENDS:
            return {
                ...state,
                isSaving: true,
                error: ''
            };
        case UPDATING_FRIEND:
            return {
                ...state,
                isUpdating: true,
                error: ''
            };
        case FRIEND_UPDATED:
            return {
                ...state,
                friends: action.payload,
                isUpdating: false,
                error: ''
            };
        case DELETING_FRIEND:
            return {
                ...state,
                isDeleting: true,
                error: ''
            };
        case FRIEND_DELETED:
            return {
                ...state,
                friends: action.payload,
                isDeleting: false,
                error: ''
            };
        default:
            return state;
        }
}

