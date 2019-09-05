import { API_ENDPOINT } from '../../config'

class BookService {
  async getBooks() {
    try {
      const response = await fetch(`${API_ENDPOINT}/books`)

      return response.json()
    } catch (error) {
      throw new Error('Something went wrong')
    }
  }
}

export default new BookService()