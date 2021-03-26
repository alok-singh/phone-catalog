export const getApiData = async (url, options = { method: 'GET' }, attempt = 1) => {
  try {
    const urlResponse = await fetch(url);
    const data = await urlResponse.json();
    if (data) {
      return data;
    }
    else {
      if (attempt < 3) {
        return getApiData(url, options, attempt + 1);
      }
    }
  } catch (error) {
    return [];
  }
};