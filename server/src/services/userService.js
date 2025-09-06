import User from "../Models/User.js";
import userUtils from "../utils/userUtils.js";
import bcrypt from "bcrypt";

export default {
    async register(userData) {
        const existingEmail = await User.findOne({ email: userData.email });

        if (existingEmail) {
            throw new Error("Email already exists!");
        }

        const createdUser = await User.create(userData);

        if (!createdUser) {
            throw new Error("Invalid User!");
        }

        const token = userUtils.getToken(createdUser);

        return {
            _id: createdUser.id,
            email: createdUser.email,
            accessToken: token,
        };
    },
    async login(userData) {
        const user = await User.findOne({ email: userData.email });

        if (!user) {
            throw new Error("Invalid Email or Password!");
        }

        const isValid = await bcrypt.compare(userData.password, user.password);

        if (!isValid) {
            throw new Error("Invalid Email or Password!");
        }

        const token = userUtils.getToken(user);

        return {
            _id: user.id,
            email: user.email,
            accessToken: token,
        };
    },
};
