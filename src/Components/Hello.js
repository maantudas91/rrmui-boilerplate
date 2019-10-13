import React from 'react'
import {connect} from 'react-redux';
import {setTitle, setTags} from '../Store/actions/seoAction.js';

const tags = [
	{name:"description", content:"Hello RRMUI Boiler Plate Built by Mandan'i Aina"},
	{name:"robots", content:"index, follow"}
]

const Hello = ({setTitle, setTags}) => {	
	React.useEffect(() => {
		setTitle("RRMUI BOILERPLATE | Riv0manana Mandan'i Aina");
		setTags(tags);
	}, [setTags, setTitle])

	return (
		<div>Hello</div>
	)
}

const mapAction = {
	setTitle,
	setTags
}

export default connect(null, mapAction)(Hello);