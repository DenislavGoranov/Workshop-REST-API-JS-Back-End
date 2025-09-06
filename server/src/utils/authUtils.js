import jsonwebtoken from "jsonwebtoken";
const privateKey = "ASDASGASDZXDSA";

export const isAuth = (req, res, next) => {
    const token = req.header("X-Authorization");

    if (!token) {
        return next();
    }

    try {
        const user = jsonwebtoken.verify(token, privateKey);

        req.user = user;

        next();
    } catch (err) {
        res.status(401).end();
    }
};
