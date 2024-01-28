<<<<<<< HEAD
<<<<<<< HEAD
import {
  AuthErrors,
  EventsType,
  needsAuth,
  validateRequest,
} from "@samoznew/common";
import { Router } from "express";
import { body } from "express-validator";
import { ITicket } from "../models/tickets.model";
import { NatsWrapper } from "../nat.wrapper";
import { createTicket, getTicketById, updateTicket } from "../services";
const router = Router();
const basicValidation = [
=======
import { needsAuth, validateRequest } from "@samoznew/common";
=======
import { AuthErrors, needsAuth, validateRequest } from "@samoznew/common";
>>>>>>> 7ee7d11 (Add new files and update existing files)
import { Router } from "express";
import { body } from "express-validator";
import { createTicket, getTicketById, updateTicket } from "../services";
const router = Router();
<<<<<<< HEAD

router.post(
  "",
>>>>>>> 89871aa (Add Dockerfile and .dockerignore for tickets service)
=======
const basicValidation = [
>>>>>>> 7ee7d11 (Add new files and update existing files)
  needsAuth,
  ...[
    body("title").not().isEmpty().withMessage("Title is required"),
    body("price")
      .isFloat({ gt: 0 })
      .withMessage("Price must be greater than 0"),
  ],
  validateRequest,
<<<<<<< HEAD
<<<<<<< HEAD
];

router.post("/", ...basicValidation, async (req, res) => {
  const { title, price } = req.body;
  const ticket = await createTicket({
    title,
    price,
    userId: req.user!.id,
  });

  NatsWrapper.getInstance()
    .getSubject<ITicket>(EventsType.TICKET_CREATED)
    ?.send(ticket)
    .catch((e) => {
      console.log("ERROR", e);
    });

  res.status(201).json({ data: ticket });
});

router.put("/:id", ...basicValidation, async (req, res) => {
  const { title, price } = req.body;
  const oldData = await getTicketById(req.params.id);

  if (oldData?.userId !== req.user!.id) {
    throw new AuthErrors();
  }

  const ticket = await updateTicket(req.params.id, {
    title,
    price,
    userId: req.user!.id,
  });

  res.status(200).json({ data: ticket });
});
=======
  async (req, res) => {
    const { title, price } = req.body;
    const ticket = await createTicket({
      title,
      price,
      userId: req.user!.id,
    });
=======
];
>>>>>>> 7ee7d11 (Add new files and update existing files)

router.post("/", ...basicValidation, async (req, res) => {
  const { title, price } = req.body;
  const ticket = await createTicket({
    title,
    price,
    userId: req.user!.id,
  });

  res.status(201).json({ data: ticket });
});

router.put("/:id", ...basicValidation, async (req, res) => {
  const { title, price } = req.body;
  const oldData = await getTicketById(req.params.id);

  if (oldData?.userId !== req.user!.id) {
    throw new AuthErrors();
  }
<<<<<<< HEAD
);
>>>>>>> 89871aa (Add Dockerfile and .dockerignore for tickets service)
=======

  const ticket = await updateTicket(req.params.id, {
    title,
    price,
    userId: req.user!.id,
  });

  res.status(200).json({ data: ticket });
});
>>>>>>> 7ee7d11 (Add new files and update existing files)

export { router as createTicketRouter };
