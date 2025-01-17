// Query
import {
  GET_ARTWORK,
  CREATE_ARTWORK,
  GET_TOTAL_ARTWORK,
  CHECK_ARTWORK_BY_SLUG,
} from "dashboard/database/query/artwork";
import { stringCapitalize } from "dashboard/helpers/capitalize";

// Libs
import { slugParse } from "dashboard/helpers/slugParse";
import nextConnect from "next-connect";

const apiHandler = nextConnect();
const messageHead = "artwork";

//#region Get Handler
apiHandler.get(async (req, res) => {
  const {
    page,
    limit,
    client,
    artistId,
    excludeSlug,
    excludeArtist,
    genreId,
    artistName,
    isExhibition,
  } = req.query;
  try {
    const result = await GET_ARTWORK({
      page,
      limit,
      client,
      artistId,
      excludeSlug,
      excludeArtist,
      genreId,
      artistName,
      isExhibition,
    });
    const total = await GET_TOTAL_ARTWORK({
      client,
      artistId,
      excludeSlug,
      excludeArtist,
      genreId,
      artistName,
      isExhibition,
    });
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
//#endregion

//#region Post Handler
apiHandler.post(async (req, res) => {
  const {
    sku,
    artist_id,
    title,
    year,
    material,
    description,
    genre_id,
    media_id,
    cover_id,
    type,
    height,
    width,
    price,
    markupPrice,
    status,
    approve,
  } = req.body;
  const titleParse = stringCapitalize(title);
  try {
    //? ============== Create Slug ============= ?//
    const slug = await slugParse({ slugData: title, checkSlugFunc: CHECK_ARTWORK_BY_SLUG });
    // * ====================================== * //

    const result = await CREATE_ARTWORK({
      sku,
      artist_id,
      title: titleParse,
      slug,
      year,
      material,
      description,
      genre_id,
      media_id,
      cover_id,
      type,
      height,
      width,
      price,
      markupPrice,
      status,
      approve,
    });
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
//#endregion

export default apiHandler;
