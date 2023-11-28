import "express-async-errors";

import express, { Application, json } from "express";
import { PrismaClient } from "@prisma/client";
import { handleErrors } from "./middlewares/handleErrors.middleware";
import { router } from "./routers/index.router";

const cors = require("cors");

export const app: Application = express();

export const prisma = new PrismaClient();

const corsOptions = {
  origin: origin.startsWith("https://durvalmusicshop"),
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(json());

app.use("/", router);

app.use(handleErrors);