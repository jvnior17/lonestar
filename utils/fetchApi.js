import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '2bf52b8427mshdf4b81ef9b2e9f1p13530ejsnc108a9abec3c'
    },
    });
  return data;
}
