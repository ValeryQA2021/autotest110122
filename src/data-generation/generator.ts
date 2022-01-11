import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://labs-api.testing.it-kamasutra.com/api/',
    headers: {
        // 'FRIEND-TOKEN': '123'
    }
});

export const generate = async (data: any) => {
    const generatingRes = await instance.post('testing/data/generate', data);
    if (generatingRes.data.ok) return;

    let error: any;
    try {
        error = JSON.parse(generatingRes.data.error)
    } catch {
        error = generatingRes.data.error
    }
    throw new Error(generatingRes.data.error)
}

