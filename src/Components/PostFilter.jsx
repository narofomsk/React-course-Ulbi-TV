import React from 'react'
import SelectedPost from './SelectedPost'

const PostFilter = ({filter, setFilter}) => {

	return (
		<div>
			<input
				value={filter.query}
				onChange={e => setFilter({...filter, query: e.target.value})}
				placeholder='Поиск...'
			/>
			<SelectedPost
				value={filter.sort}
				onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
				defaultValue='Сортировка по'
				options={[
					{ value: 'title', name: 'По названию' },
					{ value: 'body', name: 'По описанию' },
				]}
			/>
		</div>
	)
}

export default PostFilter
