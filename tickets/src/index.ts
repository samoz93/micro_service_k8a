import to from "await-to-js";
import mongoose from "mongoose";
import { app } from "./app";
import { CONFIG } from "./config";
<<<<<<< HEAD
import {
  TicketCreateSubject,
  TicketPublisher,
  TicketUpdateSubject,
} from "./events";
import { NatsWrapper } from "./nat.wrapper";
=======
>>>>>>> 89871aa (Add Dockerfile and .dockerignore for tickets service)

const init = async () => {
  const [err] = await to(mongoose.connect(CONFIG.MONGO_URI));

  if (err) {
    return;
  }

<<<<<<< HEAD
  const nc = await NatsWrapper.getInstance().connect();

  const publisher = new TicketPublisher(nc);
  await publisher.init();

  const create = new TicketCreateSubject(nc);
  await create.init();
  const create2 = new TicketCreateSubject(nc);
  await create2.init();
  const update = new TicketUpdateSubject(nc);
  await update.init();

  create.startListening((data) => {
    console.log("____CREATED", data);
    return true;
  });

  // create2.startListening((data) => {
  //   console.log("____CREATED2", data);
  //   return true;
  // });
  update.startListening((data) => {
    console.log("+++++UPDATE", data);
    return true;
  });

  let subjects = publisher.subjects;
  for (let i = 0; i < 4; i++) {
    const idx = i % subjects.length;
    await publisher.send(subjects[idx], {
      idx,
      i,
      sub: subjects[idx],
    } as any);
  }
  app.listen(CONFIG.PORT, () => {
    console.log("Listening on port " + CONFIG.PORT + CONFIG.natsClient);
=======
  app.listen(CONFIG.PORT, () => {
    console.log("Listening on port " + CONFIG.PORT);
>>>>>>> 89871aa (Add Dockerfile and .dockerignore for tickets service)
  });
};

init();
