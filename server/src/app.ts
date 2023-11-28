import "express-async-errors";
import express, { Application, json } from "express";
import { PrismaClient } from "@prisma/client";
import { handleErrors } from "./middlewares/handleErrors.middleware";
import { router } from "./routers/index.router";

export const app: Application = express();

export const prisma = new PrismaClient();

const cors = require("cors");

const corsOptions = {
    origin: ['https://durvalmusicshop-63y16yloq-brunomoleta.vercel.app'],
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    credentials: true,
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

app.use(json());

app.use("/", router);

app.use(handleErrors);