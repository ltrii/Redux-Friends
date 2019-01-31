import Axios from "axios";

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const FRIENDS_SAVED = 'FRIENDS_SAVED';
export const SAVING_FRIENDS = 'SAVING_FRIENDS';
export const UPDATING_FRIEND = 'UPDATING_FRIEND';
export const FRIEND_UPDATED = 'FRIEND_UPDATED';
export const DELETING_FRIEND = 'DELETING_FRIEND';
export const FRIEND_DELETED = 'FRIEND_DELETED';

export const fetchingFriends = () => dispatch => {
    dispatch({ type: FETCHING_FRIENDS });
    Axios
        .get(
            'http://localhost:5000/api/friends/'
        )
        .then(res => dispatch({ type: FRIENDS_FETCHED, payload: res.data }))
        .catch(err => console.log('error fetching'))
}

export const savingFriends = (friend) => dispatch => {
    dispatch({ type: SAVING_FRIENDS });
    Axios
        .post(`http://localhost:5000/api/friends/`, friend)
        .then(res => {
            dispatch({ type: FRIENDS_SAVED, payload: res.data });
        })
        .catch(err => console.log(err));
}

export const deletingFriend = (id) => dispatch => {
    dispatch({ type: DELETING_FRIEND });
    Axios
        .delete(`http://localhost:5000/api/friends/${id}`)
        .then(res => {
            dispatch({ type: FRIEND_DELETED, payload: res.data }, {params: {id: this.props.id}});
        })
        .catch(err => console.log(err));
}

export const updatingFriend = (newName, newAge, newEmail, id) => dispatch => {
    dispatch({ type: UPDATING_FRIEND });
    Axios
        .put(`http://localhost:5000/api/friends/${id}`, {
            id: id,
            name: newName,
            email: newEmail,
            age: newAge
        })
        .then(res => {
            dispatch({ type: FRIEND_UPDATED, payload: res.data })
        })
        .catch(err => {
            console.log(err);
        })
}