export default async function handler(req, res) {
  try {
    const { q } = req.query;
    let url = `${process.env.BACKEND_URL_ITEM}${q}`;
    const response = await fetch(url);
    const data = await response.json();
    url = `${process.env.BACKEND_URL_ITEM}${q}/description`;
    const responseDescription = await fetch(url);
    const dataDescription = await responseDescription.json();
    data.description = dataDescription.plain_text;
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
