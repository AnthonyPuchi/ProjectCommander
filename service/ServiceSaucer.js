import axios from 'axios';

export const saucer = 'http://localhost:8081/saucer';
export const proteins = 'http://localhost:8081/proteins';
export const saucerProteinsSaucer = 'http://localhost:8081/saucer/proteins-saucer';
export const saucerProteins = 'http://localhost:8081/saucerProteins';
export const petition = 'http://localhost:8081/petition';
export const saucerProteinsPortions = 'http://localhost:8081/saucerProteins/portions';


export const getAPI = async (url) => {
    const response = await axios.get(url);
    return response.data;
};

export const createAPI = async (url, arg) => {
    const response = await axios.post(url, arg);
    return response.data;
};

export const updateAPI = async (url, arg) => {
    const response = await axios.put(url, arg);
    return response.data;
};
