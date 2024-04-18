import axios from 'axios'

export async function fetchAllData() {
    const options = {
        method: 'GET',
        url: 'http://localhost:3000/data'
    };

    try {
        const response = await axios.request(options);
        return response.data
    } catch(error) {
        console.error(error);
    }
}