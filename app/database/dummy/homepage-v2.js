// Assets
import { ArtistManagementIcon } from "public/icons/artist-management-icon";
import { GalleryManagementIcon } from "public/icons/gallery-management-icon";
import { ArchiveManagementIcon } from "public/icons/archive-management-icon";
import { CollectorManagementIcon } from "public/icons/collector-management-icon";
import { List, Col, Row } from "antd";

export const roleSection = [
  {
    title: "ARTIST",
    subtitle: "Show Artwork | Sell Artwork | Manage Profile",
    description: `An artist is a person engaged in an activity related to creating art, practicing the arts, or demonstrating an art. The common usage in both everyday speech and academic discourse refers to a practitioner in the visual arts only.`,
    image: "/images/homepage-role-artist.jpg",
  },
  {
    title: "ART COLLECTOR",
    subtitle: "Buy Artwork | Show Collection | Trade Collection",
    description: `Art connoiseur. Art dealer. Art enthusiast. Art lover. “A famous art collector is walking through the city when he notices a mangy cat lapping milk from a saucer in the doorway of a store, and he does a double take”.`,
    image: "/images/homepage-role-collector.jpg",
    textPosition: "left",
  },
  {
    title: "GALLERY",
    subtitle: `Show Gallery Artwork | Do Artwork Transaction`,
    description: `An art gallery is an exhibition space to display and sell artworks. As a result, the art gallery is a commercial enterprise working with a portfolio of artists.`,
    image: "/images/homepage-role-gallery.jpg",
  },
];

export const offerList = [
  {
    icon: <ArtistManagementIcon />,
    offer: "Artist Management",
    description:
      "We let you manage your own profile and show the world your artworks. Hey, Collector could buy artworks from you!",
  },
  {
    icon: <CollectorManagementIcon />,
    offer: "Collector Management",
    description:
      "We let you buy artworks from our artist, trade your collections with other collectors, and you can show it on your profile!",
  },
  {
    icon: <GalleryManagementIcon />,
    offer: "Gallery Management",
    description:
      "Gallery is a wonderful place to exhibit paintings. We have got you a landing page that matches your gallery themes!",
  },
  // {
  //   icon: <ArchiveManagementIcon />,
  //   offer: "Archive Artworks",
  //   description:
  //     "We gonna archive all of your artworks so the existence of your artwork would neverwent missing!",
  // },
];

export const list1 = [
  {
    key: "1",
    desc: (
      <p>Click &quot;Register&quot; or &quot;Login&quot; Button at the top right corner screen.</p>
    ),
  },
  {
    key: "2",
    desc: (
      <p>
        Now you are at register page (if you at login page, you can scroll down and click
        &quot;Create Account&quot; button).{" "}
      </p>
    ),
  },
  {
    key: "3",
    desc: (
      <p>
        Fill in your identities i.e phone number, name, and role, and click &quot;Sign Up&quot;
        button.
      </p>
    ),
  },
  {
    key: "4",
    desc: (
      <p>Wait until confirmation page appear and verify your phone number (Whatsapp number).</p>
    ),
  },
  {
    key: "5",
    desc: <p>Now you account is ready. Try to re-login your account using phone number.</p>,
  },
];

export const list2 = [
  {
    key: "1",
    desc: <p>Now you could login using into your existing account using phone number only.</p>,
  },
];

export const list3 = [
  {
    key: "1",
    desc: <p>First, you need to login into your account.</p>,
  },
  {
    key: "2",
    desc: (
      <p>
        In Homepage, click &quot;Studio&quot; button on header section or click &quot;Plus
        Sign&quot; in your profile account page or on navigation bar when using mobile devices.
      </p>
    ),
  },
  {
    key: "3",
    desc: <p>Fill your artwork details and upload a clear artwork photo.</p>,
  },

  {
    key: "4",
    desc: (
      <p>
        We will markup your original artwork price by 40%. The markups include certificate,
        packaging (optional), and and for our profit.
      </p>
    ),
  },
  {
    key: "5",
    desc: (
      <p>
        In media gallery section, we suggest you to upload your artworks side view to quicken us in
        curating your artwork.
      </p>
    ),
  },
  {
    key: "6",
    desc: (
      <p>&quot;Save&quot; your artwork and wait about 1 x 24 hours for your artwork curation.</p>
    ),
  },
  {
    key: "7",
    desc: <p>If your artwork pass our curation, your artwork will be published in Artchive.id</p>,
  },
  {
    key: "8",
    desc: (
      <p>
        If your artwork does not pass our curation, then you will get a notification about the
        painting data that does not pass out curation. You can edit your artwork data in
        /Profile/Studio and click edit on the artwork that has the &quot;Edit Required&quot; tag.
      </p>
    ),
  },
];

export const faqList = [
  {
    header: (
      <h4>
        How to <span>register</span> in Artchive.id?
      </h4>
    ),
    key: "1",
    description: (
      <>
        {list1.map((item, index) => {
          return (
            <>
              <Col xl={{ span: 1 }} lg={{ span: 1 }} md={{ span: 2 }} xs={{ span: 2 }}>
                {item.key}.
              </Col>
              <Col xl={{ span: 23 }} lg={{ span: 23 }} md={{ span: 22 }} xs={{ span: 22 }}>
                {item.desc}
              </Col>
            </>
          );
        })}
      </>
    ),
  },
  {
    header: (
      <h4>
        How to <span>login</span> into Artchive.id?
      </h4>
    ),
    key: "2",
    description: (
      <>
        {list2.map((item, index) => {
          return (
            <>
              <Col xl={{ span: 24 }} lg={{ span: 24 }} md={{ span: 24 }} xs={{ span: 24 }}>
                {item.desc}
              </Col>
            </>
          );
        })}
      </>
    ),
  },
  {
    header: (
      <h4>
        How to <span>upload</span> artworks in Artchive.id
      </h4>
    ),
    key: "3",
    description: (
      <>
        {list3.map((item, index) => {
          return (
            <>
              <Col xl={{ span: 1 }} lg={{ span: 1 }} md={{ span: 2 }} xs={{ span: 2 }}>
                {item.key}.
              </Col>
              <Col xl={{ span: 23 }} lg={{ span: 23 }} md={{ span: 22 }} xs={{ span: 22 }}>
                {item.desc}
              </Col>
            </>
          );
        })}
      </>
    ),
  },
];
