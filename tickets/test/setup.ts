import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import { passwordManager } from "../src/utils";

declare global {
<<<<<<< HEAD
  function signin(idx?: number): string[];
=======
  function signin(): string[];
>>>>>>> 89871aa (Add Dockerfile and .dockerignore for tickets service)
}

let mongo: MongoMemoryServer;
beforeAll(async () => {
  process.env.NODE_ENV = "test";
  process.env.JWT_KEY = "test";

  mongo = await MongoMemoryServer.create();
  const uri = mongo.getUri();
  await mongoose.connect(uri);
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();
  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
<<<<<<< HEAD
  await mongo?.stop();
  await mongoose?.connection?.close();
});

const users = [
  { email: "test@test.com", id: "123" },
  { email: "test@test2.com", id: "321" },
];
global.signin = (idx: number = 0): string[] => {
  const user = users[idx];
  const jwt = passwordManager.generateJWT(user);
=======
  await mongo.stop();
  await mongoose.connection.close();
});

global.signin = (): string[] => {
  const email = "test@test.com";
  const jwt = passwordManager.generateJWT({ email, id: "123" });
>>>>>>> 89871aa (Add Dockerfile and .dockerignore for tickets service)
  const cookie = `session=${Buffer.from(JSON.stringify({ jwt })).toString(
    "base64"
  )};`;
  return [cookie];
};
