import { Router } from "express";
import { getTicketById, getTickets } from "../services";
const router = Router();

<<<<<<< HEAD
router.get("/", async (req, res) => {
=======
router.get("", async (req, res) => {
>>>>>>> 89871aa (Add Dockerfile and .dockerignore for tickets service)
  const tickets = await getTickets();
  res.status(200).json({ data: tickets });
});

router.get("/:id", async (req, res) => {
  const ticket = await getTicketById(req.params.id);
  res.status(200).json({ data: ticket });
});

export { router as getTicketsRouter };
