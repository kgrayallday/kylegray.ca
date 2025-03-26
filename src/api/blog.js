import api from './api.js';

export const getBlogPosts = async () => {
  try {
    const response = await api.get('blog');
    console.log('API response:', response.data)
    return response.data.data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}
