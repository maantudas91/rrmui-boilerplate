import React from 'react'
import {Helmet} from 'react-helmet';

const HelmetContainer = ({title, tags}) => {
	return (
		<Helmet>
			<title>{title}</title>
			{
				tags !== undefined && tags.map((tag, i) => (
					<meta key={i} {...tag }/>
				))
			}
		</Helmet>
	)
}

export default HelmetContainer;