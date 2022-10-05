import { CollectionConfig } from "payload/types";

const Media: CollectionConfig = {
  slug: "media",
  fields: [
    {
      name: "alt",
      type: "text",
    },
  ],
  upload: {
    staticURL: "/media",
    staticDir: "media",
    imageSizes: [
      {
        name: "thumbnail",
        width: 200,
        height: 200,
        crop: "centre",
      },
    ],
    adminThumbnail: "thumbnail",
    mimeTypes: ["image/*"],
  },
};

export default Media;
