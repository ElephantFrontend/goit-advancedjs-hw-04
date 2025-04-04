import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: '49425225-4fab9228e9772b9206d5850f9',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

async function fetchImages(query, page = 1, perPage = 15) {
  try {
    const response = await axios.get('', {
      params: {
        q: query,
        page: page,
        per_page: perPage,
      },
    });

    const { hits, total, totalHits } = response.data;

    return { hits, total, totalHits };
  } catch (err) {
    throw new Error("Something went wrong while fetching images...");
  }
}

export default fetchImages;