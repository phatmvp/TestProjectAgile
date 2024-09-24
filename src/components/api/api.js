import axios from 'axios';

const API_URL = 'https://api-test-web.agiletech.vn/posts';

export const fetchGalleries = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.posts; // Trả về thuộc tính posts từ phản hồi
  } catch (error) {
    console.error('Error fetching galleries:', error);
    throw error; // Ném lỗi ra ngoài để xử lý ở nơi gọi
  }
};
