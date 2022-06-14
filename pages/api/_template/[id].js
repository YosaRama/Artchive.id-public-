// Query
import { DELETE_DATA, GET_DATA_BY_ID, UPDATE_DATA } from "app/database/query/_template";

// Helper
import nextConnect from "next-connect";

const apiHandler = nextConnect();
const messageHead = "Template";

// GET SINGLE HANDLER
/**
 * @swagger
 * /api/_template/{:id}:
 *   get:
 *     description: GET Single Template API
 *     responses:
 *       200:
 *         description: this is just an get single template API from artchive.id
 */
apiHandler.get(async (req, res) => {
  const id = req.query.id;
  try {
    const result = await GET_DATA_BY_ID({ id });
    if (result) {
      res.status(200).json({
        success: true,
        message: `Successfully get single ${messageHead} - ${id}`,
        data: result,
      });
    } else {
      res.status(200).json({
        success: false,
        message: `Failed get single ${messageHead} - ${id}`,
      });
    }
  } catch (error) {
    res.status(200).json({
      success: false,
      message: error.message,
    });
  }
});

// EDIT SINGLE HANDLER
/**
 * @swagger
 * /api/_template/{:id}:
 *   put:
 *     description: PUT Single Template API
 *     responses:
 *       200:
 *         description: this is just an update single template API from artchive.id
 */
apiHandler.put(async (req, res) => {
  const id = req.query.id;
  try {
    const result = await UPDATE_DATA({ id });
    if (result) {
      res.status(200).json({
        success: true,
        message: `Successfully update ${messageHead} - ${id}`,
        data: result,
      });
    } else {
      res.status(200).json({
        success: false,
        message: `Failed update ${messageHead} - ${id}`,
        data: result,
      });
    }
  } catch (error) {
    res.status(200).json({
      success: false,
      message: error.message,
    });
  }
});

// DELETE SINGLE HANDLER
/**
 * @swagger
 * /api/_template/{:id}:
 *   delete:
 *     description: DELETE Single Template API
 *     responses:
 *       200:
 *         description: this is just an delete single template API from artchive.id
 */
apiHandler.delete(async (req, res) => {
  const id = req.query.id;
  try {
    const result = await DELETE_DATA({ id });
    if (result) {
      res.status(200).json({
        success: true,
        message: `Successfully delete ${messageHead} - ${id}`,
        data: result,
      });
    } else {
      res.status(200).json({
        success: false,
        message: `Failed delete ${messageHead} - ${id}`,
        data: result,
      });
    }
  } catch (error) {
    res.status(200).json({
      success: false,
      message: error.message,
    });
  }
});

export default apiHandler;
