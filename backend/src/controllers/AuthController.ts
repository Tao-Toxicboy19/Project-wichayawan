import { Request, Response } from "express";

export const AuthController = async (req: Request, res: Response) => {
    res.status(200).send("Welcome")
}