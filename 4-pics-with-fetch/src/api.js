const searchImages = async (term) => {
  const urlWithQueryParams =
    "https://api.unsplash.com/search/photos?" +
    new URLSearchParams({ query: term });

  const response = await fetch(urlWithQueryParams, {
    headers: {
      Authorization: "Client-ID tRbT9IsGQpQ9cC5Afd2nAX4M-sQqYwxzcVbww_xRldc",
    },
  });

  const jsonDecoded = await response.json();

  return jsonDecoded.results;
};

export default searchImages;
