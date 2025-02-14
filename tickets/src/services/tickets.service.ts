<<<<<<< HEAD
<<<<<<< HEAD
import { DBError, _, to } from "@samoznew/common";
=======
import { DBError, to } from "@samoznew/common";
>>>>>>> 89871aa (Add Dockerfile and .dockerignore for tickets service)
=======
import { DBError, _, to } from "@samoznew/common";
>>>>>>> 7ee7d11 (Add new files and update existing files)
import { ITicket, TicketModel } from "../models/tickets.model";

export const createTicket = async (ticket: ITicket) => {
  try {
    return await TicketModel.create(ticket);
  } catch (error) {
    throw new DBError(error as Error);
  }
};

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7ee7d11 (Add new files and update existing files)
export const updateTicket = async (id: string, ticket: ITicket) => {
  let [err, data] = await to(TicketModel.findById(id));
  if (err) {
    throw new DBError(err as Error);
  }
  if (!data) {
    throw new DBError(new Error("Ticket not found"));
  }

  data.set(_.omit(ticket, ["id"]));
  [err, data] = await to(data.save());

  if (err) {
    throw new DBError(err as Error);
  }

  return data;
};

<<<<<<< HEAD
=======
>>>>>>> 89871aa (Add Dockerfile and .dockerignore for tickets service)
=======
>>>>>>> 7ee7d11 (Add new files and update existing files)
export const getTickets = async () => {
  const [err, data] = await to(TicketModel.find({}).exec());
  if (err) {
    throw new DBError(err as Error);
  }
  return data;
};

export const getTicketById = async (id: string) => {
  const [err, data] = await to(
    TicketModel.findOne({
      _id: id,
    }).exec()
  );

  if (err) {
    throw new DBError(err as Error);
  }
  return data;
};
