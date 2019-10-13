import React from 'react'
import {connect} from 'react-redux';
import {setTitle, setTags} from '../Store/actions/seoAction.js';

const tags = [
	{name:"robots", content:"noindex, nofollow"}
]

const Error404 = ({setTitle, setTags}) => {	
	React.useEffect(() => {
		setTitle("404 - RRMUI BOILERPLATE | Riv0manana Mandan'i Aina");
		setTags(tags);
	}, [setTags, setTitle])

	return (
		<div>404 Not Found</div>
	)
}

const mapAction = {
	setTitle,
	setTags
}

export default connect(null, mapAction)(Error404);