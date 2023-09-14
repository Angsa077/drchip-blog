import { verify } from "jsonwebtoken";
import User from "../models/User";
import Post from "../models/Post";

const authGuard = async (req, res, next) => {
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            const token = req.headers.authorization.split(" ")[1];
            const { id } = verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(id).select("-password");
            next();
        } catch (error) {
            let err = new Error("Not authorized, Token failed");
            err.statusCode = 401;
            next(err);
        }
    } else {
        let error = new Error("Not authorized, No token");
        error.statusCode = 401;
        next(error);
    }
};

const adminGuard = async (req, res, next) => {
    if (req.user && req.user.admin) {
        next();
    } else {
        let error = new Error("Dilarang masuk selain admin");
        error.statusCode = 401;
        next(error);
    }
};

export { authGuard, adminGuard };