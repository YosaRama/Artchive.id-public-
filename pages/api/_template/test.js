// Libs
import nextConnect from "next-connect";
const apiHandler = nextConnect();

// Queries
import { GET_ALL_ARTWORK_SLUG } from "app/database/query/artwork";
import { GET_ALL_ARTIST_SLUG } from "app/database/query/user";

apiHandler.get(async (req, res) => {
  const {} = req.query;

  try {
    const query = await GET_ALL_ARTIST_SLUG();
    res.status(200).json({ success: true, message: "Successfully get data", data: query });
  } catch (error) {
    res.status(200).json({ success: false, message: "Something Wrong!", error: error });
  }
});

export default apiHandler;
