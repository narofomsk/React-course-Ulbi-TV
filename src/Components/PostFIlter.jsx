import React from 'react'
import SelectedPost from './SelectedPost'

const PostFilter = () => {
	return (
		<div>
			<input
				value={searchQuery}
				onChange={e => setSearchQuery(e.target.value)}
				placeholder='Поиск...'
			/>
			<SelectedPost
				value={selectedSort}
				onChange={sortPost}
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
