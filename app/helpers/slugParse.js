import slugify from "slugify";

export async function slugParse({ slugData, checkSlugFunc }) {
  let defaultSlug = slugify(slugData, {
    lower: true,
    strict: true,
  });
  let slug = defaultSlug;
  let checkSlug = await checkSlugFunc({ slug });
  let i = 2;
  while (checkSlug) {
    slug = defaultSlug + `-${i}`;
    checkSlug = await checkSlugFunc({ slug });
    i++;
  }

  return slug;
}
