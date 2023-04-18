export default async function handler(req, res) {
  try {
    const { query, offset, filters, filter } = req.query;
    let url = `${process.env.BACKEND_URL_SEARCH}search?q=${query}`;
    offset && (url += `&offset=${offset}`);
    filters && filter && (url += `&${filters}=${filter}`);
    const response = await fetch(url);
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
