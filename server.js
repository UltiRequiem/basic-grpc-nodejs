import grpc from "@grpc/grpc-js";
import { NewsService } from "./newsDefinition.js";

const news = [
  { id: "1", title: "Note 1", body: "Content 1", postImage: "Post image 1" },
  { id: "2", title: "Note 2", body: "Content 2", postImage: "Post image 2" },
];

const grpcServer = new grpc.Server();

grpcServer.addService(NewsService.service, {
  getAllNews(error, cb) {
    if (error) {
      throw error;
    }

    cb(undefined, { news });
  },
});

grpcServer.bindAsync(
  "localhost:50051",
  grpc.ServerCredentials.createInsecure(),
  (error, port) => {
    if (error) {
      throw error;
    }

    console.log(`Server running on port ${port}!`);

    grpcServer.start();
  }
);
