import express from "express";
const app = express();
const port = 5000;
import { mongoDb } from "./db";
import { UserDocument } from "./model/UserDetails";
import { UserService } from "./service/UserService";
import { StoreDocument } from "./model/Store";
import { StoreService } from "./service/StoreService";
mongoDb();
app.use(express.json());

app.get("/users", async (req, res) => {
  try {
    const users: UserDocument[] = await new UserService().getUsers();
    res.json(users);
  } catch (error) {
    console.error("Error getting users:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/stores", async (req, res) => {
  try {
    const stos: StoreDocument[] = await new StoreService().getStores();
    res.json(stos);
  } catch (error) {
    console.error("Error getting users:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
