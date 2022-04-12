const axios = require('axios');

const requestMovies = async () => {
  try {
    const response = await axios.get(
      'https://afternoon-oasis-79606.herokuapp.com/home/discover'
    );

    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

requestMovies();
