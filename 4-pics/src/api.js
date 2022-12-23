import axios from "axios";

const searchImages = async () => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID tRbT9IsGQpQ9cC5Afd2nAX4M-sQqYwxzcVbww_xRldc",
    },
    params: {
      query: "oceans",
    },
  });

  console.log(response);

  return response;
};

export default searchImages;
