import React from 'react'

const SelectedPost = ({ options, defaultValue, value, onChange }) => {
	return (
		<select onChange={event => onChange(event.target.value)} value={value}>
			<option disabled>{defaultValue}</option>
			{options.map(option => (
				<option key={option.value} value={option.value}>
					{option.name}
				</option>
			))}
		</select>
	)
}

export default SelectedPost
