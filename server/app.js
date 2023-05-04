require("dotenv").config();
const express = require("express");
const notFound = require("./middleware/not-found");
const usersRouter = require("./routes/users");
const errorHandlerMiddleware = require("./middleware/error-handler");
const app = express();

app.use("/api/v1/users", usersRouter);

// middleware
app.use(errorHandlerMiddleware);
app.use(notFound);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is listening on port ${port}...`));
