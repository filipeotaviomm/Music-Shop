import "express-async-errors";
import express, { Application, json } from "express";
import { PrismaClient } from "@prisma/client";
import { handleErrors } from "./middlewares/handleErrors.middleware";
import { router } from "./routers/index.router";
import cors from "cors";

export const app: Application = express();

export const prisma = new PrismaClient();

const origins = [
  "https://loja-do-durval.onrender.com/",
  "https://durvalmusicshop-7tzmutdcb-brunomoleta.vercel.app/",
  "http://localhost:5173",
  "https://durvalmusicshop.vercel.app/",
];
const corsOptions = {
  origin: origins,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(json());

app.use("/", router);

app.use(handleErrors);
