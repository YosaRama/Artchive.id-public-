// Libs
import moment from "moment";
import nextConnect from "next-connect";
const apiHandler = nextConnect();

// Helper
import { slugParse } from "app/helpers/slugParse";
import { stringCapitalize } from "app/helpers/capitalize";

// Queries
import {
  CREATE_EXHIBITION,
  GET_EXHIBITION,
  GET_TOTAL_EXHIBITION,
  CHECK_EXHIBITION_BY_SLUG,
} from "app/database/query/exhibition";

const messageHead = "exhibition";

// GET HANDLER
apiHandler.get(async (req, res) => {
  const { page, limit } = req.query;
  try {
    const result = await GET_EXHIBITION({ page: page, limit: limit });
    const total = await GET_TOTAL_EXHIBITION();
    if (result) {
      res.status(200).json({
        success: true,
        message: `Successfully get ${messageHead}`,
        data: result,
        total: total,
      });
    } else {
      res.status(200).json({
        success: false,
        message: `Failed get ${messageHead}`,
        data: result,
        total: total,
      });
    }
  } catch (error) {
    res.status(200).json({
      success: false,
      message: error.message,
    });
  }
});

// POST HANDLER
apiHandler.post(async (req, res) => {
  const request = req.body;

  try {
    //? ============== Title Parse ============= ?//
    const titleParse = stringCapitalize(request.title);
    // * ====================================== * //
    //? ============== Create Slug ============= ?//
    const slug = await slugParse({
      slugData: request.title,
      checkSlugFunc: CHECK_EXHIBITION_BY_SLUG,
    });
    // * ====================================== * //

    //? ============== Data Parse ============= ?//
    const data = {
      ...request,
      title: titleParse,
      slug: slug,
      startDate: moment(request.startDate).format(),
      endDate: moment(request.endDate).format(),
    };
    // * ====================================== * //

    const result = await CREATE_EXHIBITION(data);
    // const result = true;
    if (result) {
      res.status(200).json({
        success: true,
        message: `Successfully create ${messageHead}`,
        data: result,
      });
    } else {
      res.status(200).json({
        success: false,
        message: `Failed create ${messageHead}`,
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
