import { PrismaClient } from "@prisma/client";
const Prisma = new PrismaClient();
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World ");
});
app.get("/customers", async (req, res) => {
  try {
    const customers = await Prisma.customer.findMany();
    res.send(customers);
  } catch (error) {
    res.status(404).send("No Customer Found");
  }
});
// app.get("/books/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const book = await Prisma.books.findMany({
//       where: {
//         id: Number(id),
//       },
//     });
//     res.json(book);
//   } catch (error) {
//     res.status(404).send("Book does not exist");
//   }
// });

// app.post("/books", async (req, res) => {
//   try {
//     const book = await Prisma.books.create({ data: req.body });
//     res.json(book);
//   } catch (error) {
//     res.status(500).json({ error: error });
//   }
// });
// app.delete("/books/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const book = await Prisma.books.delete({
//       where: {
//         id: Number(id),
//       },
//     });
//     res.send("Book Removed");
//   } catch (error) {
//     res.status(404).send("Book Not Found");
//   }
// });
// app.patch("/books/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const book = await Prisma.books.update({
//       where: {
//         id: Number(id),
//       },
//       data: req.body,
//     });
//     res.send(book);
//   } catch (error) {
//     res.status(404).send(error);
//   }
// });

// app.get("/users", async (req, res) => {
//   try {
//     const user = await Prisma.users.findMany();
//     res.send(user);
//   } catch (error) {
//     res.status(404).send("No User Found");
//   }
// });
// app.get("/users/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const user = await Prisma.users.findMany({
//       where: {
//         id: Number(id),
//       },
//     });
//     res.send(user);
//   } catch (error) {
//     res.status(404).send("User does not exist");
//   }
// });

// app.post("/users", async (req, res) => {
//   try {
//     const user = await Prisma.users.create({ data: req.body });
//     res.json(user);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// app.delete("/users/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     await Prisma.users.delete({
//       where: {
//         id: Number(id),
//       },
//     });
//     res.send("User Removed");
//   } catch (error) {
//     res.status(404).send("User Not Found");
//   }
// });
// app.patch("/users/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const user = await Prisma.users.update({
//       where: {
//         id: Number(id),
//       },
//       data: req.body,
//     });
//     res.send(user);
//   } catch (error) {
//     res.status(404).send(error);
//   }
// });
app.listen(8001, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("server is running on port 8001");
});
