// pages/api/revalidate.js

export default async function handler(req, res) {
  const { path } = req.query;
  try {
    await res.unstable_revalidate(path);
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
}
