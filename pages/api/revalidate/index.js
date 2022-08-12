// pages/api/revalidate.js

export default async function handler(req, res) {
  const { path } = req.query;
  try {
    await res.revalidate(path);
    return res.json({ revalidated: true });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ success: false, message: "Error revalidating", error: err });
  }
}
