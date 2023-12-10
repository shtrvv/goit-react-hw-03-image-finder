import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '40253142-cb6894ff2fafd8467210783e3';

export const fetchImages = async (value, page) => {
    const response = await axios.get(`?q=${value}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
    return response.data;
}