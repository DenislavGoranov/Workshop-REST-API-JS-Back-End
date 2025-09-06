import jsonwebtoken from "jsonwebtoken";
const privateKey = "ASDASGASDZXDSA";

export default {
    getToken(user) {
        const payload = {
            id: user.id,
            email: user.email,
        };

        const token = jsonwebtoken.sign(payload, privateKey, {
            expiresIn: "1h",
        });

        return token;
    },
};
