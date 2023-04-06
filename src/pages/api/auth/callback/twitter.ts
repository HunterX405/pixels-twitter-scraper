import NextAuth from "next-auth"
import { authOptions } from "../[...nextauth]"

export default async function callback(req: any, res: any) {
    try {
      await NextAuth(req, res, authOptions);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" })
    }
  }