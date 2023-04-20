export default async function handler(req, res) {
  try {
    const query = req?.url.split('?')[1];
    const url = `${process.env.BACKEND_URL_SEARCH}search?${query}`;
    const response = await fetch(url);
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
