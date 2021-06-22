export const getGifs = async (category) => {
    const url =
  `http://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=5&api_key=w3gywAXXGsyA417F6HN4l5Kvj7NwPJfk`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((item) => {
      return {
        id: item.id,
        title: item.title,
        url: item.images?.downsized_medium.url,
      };
    });
    return gifs;
    
  };