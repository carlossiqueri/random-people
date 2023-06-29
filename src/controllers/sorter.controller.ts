import { db } from "database/database.config";
import { Request, Response } from "express";
import { People } from "protocols/index";

const sortPeople = async (req: Request, res: Response) => {
  try {
    // const reponse: People = await db.query(`SELECT * FROM people`);
    // res.status(200).send(reponse);
  } catch (err) {
    res.status(500).send("deu ruim");
  }
};

export default sortPeople;
