import axios from 'axios'

export default class PostsService {
	static async getAll() {
		try {
			const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
			return response.data
		} catch (e) {
			console.log(e);
		}
	}
}