import { httpServer } from "./app";
import { PORT } from "./config/config";
import { disconnectDB } from "./db/connection";

process.on("SIGINT", async () => {
  console.log("shutting down server...");

  disconnectDB();

  httpServer.close(() => {
    console.log("server closed");
    process.exit(0);
  });
});

console.log(PORT);

httpServer.listen(PORT, () => {
  console.log(`server is running on port ${PORT} ${process.env.NODE_ENV}`);
});
