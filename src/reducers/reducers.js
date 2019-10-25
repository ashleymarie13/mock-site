/* Reducer initial state */
import {
	UPDATE_PROFILE_MESSAGE,
	VISIT_WORLD,
} from './actions'

/* State view:
	{
		profile: {
			profilePicture: "picture",
			username: "name",
			profileMessage: "message"
		}
	}
*/

const initialState = {}

function profile(state = {} , action) {
	switch(action.type) {
		case UPDATE_PROFILE_MESSAGE:
			return Object.assign({}, state,  {
				...state,
				profileMessage: action.text,
			})
		default:
			return state
	}
}

function MainSite(state = {}, action) {
	return {
		profile: profile(state.profile),
	}
}