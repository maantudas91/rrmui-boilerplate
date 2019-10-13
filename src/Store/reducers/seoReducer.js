const initialState = {
	title:"RRMUI BOILERPLATE - By Mandan'i Aina",
	tags : []
}

export default (state = initialState, action) => {
	switch(action.type){
		case 'SET_TITLE':
			return {
				...state,
				title:action.payload
			}
		case 'SET_TAGS':
				return {
					...state,
					tags:action.payload
				}
		default :
			return state
	}
}