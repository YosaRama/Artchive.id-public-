export const artworkDetailsDummyData = {
  id: 4,
  sku: "ARTCHIVE/USR-3/ART-4/30042022",
  artist_id: 3,
  title: "This Is Artwork",
  slug: "this-is-artwork",
  year: "2022",
  material: "MIXED_MEDIA",
  description: "This is artwork",
  type: "UNIQUE",
  media_cover_id: 6,
  height: 90,
  width: 80,
  price: "8000000",
  markup_price: "11200000",
  status: "PUBLISH",
  approve: true,
  createdAt: "2022-04-29T16:22:59.638Z",
  updatedAt: "2022-04-29T16:26:08.667Z",
  artist: {
    id: 3,
    email: "yosarama@gmail.com",
    full_name: "Yosa Rama",
    city: "Denpasar, Bali",
    profile: null,
    signature: null,
    slug: "yosa-rama",
  },
  media_cover: {
    id: 6,
    url: "USER-3/ART-4/cc96cd71-def9-4475-a8fd-a25b5b3d500a-artwork-7.jpg",
  },
  media_gallery: [],
  certificate: [],
  genre: [
    {
      id: 3,
      title: "Cubism",
    },
  ],
};

export const artworkListDummyData = [
  {
    id: 4,
    slug: "this-is-artwork",
    title: "This Is Artwork",
    size: "80 x 90",
    imgUrl:
      "https://s3.ap-southeast-1.amazonaws.com/artchivestagingbucket/USER-3/ART-4/cc96cd71-def9-4475-a8fd-a25b5b3d500a-artwork-7.jpg",
    status: "PUBLISH",
  },
  {
    id: 3,
    slug: "realism",
    title: "Realism",
    size: "40 x 45",
    imgUrl:
      "https://s3.ap-southeast-1.amazonaws.com/artchivestagingbucket/USER-3/ART-3/2eefc959-8613-4b1e-afe9-76ebff21089d-europeana-5TK1F5VfdIk-unsplash.jpg",
    status: "PUBLISH",
  },
  {
    id: 2,
    slug: "abstract-realism",
    title: "Abstract Realism",
    size: "60 x 50",
    imgUrl:
      "https://s3.ap-southeast-1.amazonaws.com/artchivestagingbucket/USER-2/ART-2/958cf7fb-e65d-4459-8d54-3a7be5f17c18-birmingham-museums-trust-sJr8LDyEf7k-unsplash.jpg",
    status: "SOLD",
  },
  {
    id: 1,
    slug: "cubism-abstract-art",
    title: "Cubism Abstract Art",
    size: "80 x 90",
    imgUrl:
      "https://s3.ap-southeast-1.amazonaws.com/artchivestagingbucket/USER-3/ART-1/b19e9e27-7e65-4fc0-a1ec-812e9cd7a072-adrianna-geo-1rBg5YSi00c-unsplash.jpg",
    status: "PUBLISH",
  },
];
