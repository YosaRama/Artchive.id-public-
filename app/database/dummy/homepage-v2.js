// Assets
import { ArtistManagementIcon } from "public/icons/artist-management-icon";
import { GalleryManagementIcon } from "public/icons/gallery-management-icon";
import { ArchiveManagementIcon } from "public/icons/archive-management-icon";
import { CollectorManagementIcon } from "public/icons/collector-management-icon";

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
      "We let you manage your own profile and show the world your artworks. Hey, Collector could buy artwork from you!",
  },
  {
    icon: <CollectorManagementIcon />,
    offer: "Collector Management",
    description:
      "We let you collect artworks from our artist, trade your collection with othercollectors, and you can show it on your profile!",
  },
  {
    icon: <GalleryManagementIcon />,
    offer: "Gallery Management",
    description:
      "Gallery is a wonderful place to exhibit paintings. We have got you a landing pagethat matches your gallery themes!",
  },
  {
    icon: <ArchiveManagementIcon />,
    offer: "Archive Artworks",
    description:
      "We gonna archive all of your artworks so the existence of your artwork would neverwent missing!",
  },
];
