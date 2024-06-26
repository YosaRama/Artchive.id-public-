// Query
import {
  GET_ARTICLES,
  GET_TOTAL_ARTICLES,
  CREATE_ARTICLES,
  CHECK_ARTICLE_BY_SLUG,
} from "dashboard/database/query/articles";

// Libs
import nextConnect from "next-connect";

// Helper
import { stringCapitalize } from "dashboard/helpers/capitalize";
import { slugParse } from "dashboard/helpers/slugParse";

const apiHandler = nextConnect();
const messageHead = "Articles";

// GET HANDLER
apiHandler.get(async (req, res) => {
  const { page, limit, excludeSlug } = req.query;
  try {
    const result = await GET_ARTICLES({ page, limit, excludeSlug });
    const total = await GET_TOTAL_ARTICLES();
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
      checkSlugFunc: CHECK_ARTICLE_BY_SLUG,
    });
    // * ====================================== * //

    //? ============== Data Parse ============= ?//
    const data = {
      ...request,
      title: titleParse,
      slug: slug,
    };
    // * ====================================== * //

    const result = await CREATE_ARTICLES({ data });
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
