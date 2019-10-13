export const setTitle = (_title) => dispatch => {
	dispatch({
		type:'SET_TITLE',
		payload:_title
	})
}

export const setTags = (_tags) => dispatch => {
	dispatch({
		type:'SET_TAGS',
		payload:_tags
	})
}