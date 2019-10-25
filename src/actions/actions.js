/*
 * Action types
 */

 /* Profile Action Types */
export const UPDATE_PROFILE_MESSAGE = 'UPDATE_PROFILE_MESSAGE'
export const VISIT_WORLD = 'VISIT_WORLD'






/*
 * Action Creators
 */

 /* Profile Action Creators */

 export function updateProfileMessage(text) {
 	return {
 		type: UPDATE_PROFILE_MESSAGE,
 		text
 	}
 }

 export function visitWorld(text) { // world id as text, or world object tbd
 	return {
 		type: VISIT_WORLD,
 		text
 	}
 }