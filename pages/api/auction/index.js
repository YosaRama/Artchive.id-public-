// Helper
import auctioo from "app/utils/auctioo";
import nextConnect from "next-connect";

const apiHandler = nextConnect();

apiHandler.get(async (req, res) => {
  try {
    const result = await auctioo.get("/events");

    if (!result.data.success) {
      throw new Error(result.data.message);
    }

    const data = await result.data;
    res.json({ success: true, message: "Successfully retrieve events", data: data });
  } catch (error) {
    res.status(200).json({ success: false, message: error.message });
  }
});

apiHandler.post(async (req, res) => {
  const { name, organizer, start_date, end_date, description, thumbnail, vision, mission } =
    req.body;

  try {
    const dataPayload = {
      name: name,
      organizer: organizer,
      start_date: start_date,
      end_date: end_date,
      description: description,
      thumbnail: thumbnail,
      vision: vision,
      mission: mission,
    };

    const result = await auctioo.post("/events", dataPayload);

    if (!result.data.success) {
      throw new Error(result.data.message);
    }

    res.status(200).json({ success: true, message: "Successfully create auction events" });
  } catch (error) {
    res.status(200).json({ success: false, message: error.message });
  }
});

export default apiHandler;
