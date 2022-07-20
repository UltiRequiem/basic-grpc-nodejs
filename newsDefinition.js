import protoLoader from "@grpc/proto-loader";
import path from "node:path";

const PROTO_PATH = path.join(".", "news.proto");

export const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
