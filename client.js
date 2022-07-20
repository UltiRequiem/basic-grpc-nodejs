import grpc from "@grpc/grpc-js";

import { packageDefinition } from "./newsDefinition.js";

const { NewsService } = grpc.loadPackageDefinition(packageDefinition);

const client = new NewsService(
  "localhost:50051",
  grpc.credentials.createInsecure()
);

client.getAllNews({}, (error, news) => {
  if (error) {
    throw error;
  }

  console.log(news);
});
