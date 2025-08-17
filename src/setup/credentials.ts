import dotenv from "dotenv";
dotenv.config();

export const Credentials = {
  username: process.env.HUDL_USERNAME || "",
  password: process.env.HUDL_PASSWORD || "",
};
