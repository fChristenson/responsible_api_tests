import express from "express";
import { User } from "./User";

export const app = express();

app.use(express.json());

app.get("/users", (_req, res) => {
  const user = User("foo", 22);
  res.json(user);
});

// We are missing an API version
app.post("/users", (req, res) => {
  // what if we change this behaviour, what would happen for our customers?
  res.json(req.body);
});

// We are missing an API version
app.post("/api/v1/users", (req, res) => {
  // what if we change this behaviour, what would happen for our customers?
  res.json(req.body);
});
