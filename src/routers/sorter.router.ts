import { Router } from "express";
import sortPeople from "controllers/sorter.controller";

const sorterRouter = Router();

sorterRouter.get("/person", sortPeople);

export default sorterRouter;
