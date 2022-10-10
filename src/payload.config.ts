import { buildConfig } from "payload/config";
import path from "path";
// import Examples from './collections/Examples';
import Users from "./collections/Users";
import Media from "./collections/Media";
import { cloudStorage } from "@payloadcms/plugin-cloud-storage";
import { gcsAdapter } from "@payloadcms/plugin-cloud-storage/gcs";

export default buildConfig({
  serverURL: "http://localhost:3000",
  admin: {
    user: Users.slug,
  },
  collections: [Users, Media],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [
    cloudStorage({
      collections: {
        media: {
          adapter: gcsAdapter({
            options: {
              credentials: {
                type: "service_account",
                private_key: process.env.GCS_PRIVATE_KEY,
                client_email: process.env.GCS_CLIENT_EMAIL,
                client_id: process.env.GCS_CLIENT_ID,
              },
            },
            bucket: process.env.GCS_BUCKET,
          }),
          prefix: "media",
        },
      },
    }),
  ],
});
