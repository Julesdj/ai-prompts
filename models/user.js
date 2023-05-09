import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, "User already exists"],
        required: [true, "Email is requied"],
    },
    username: {
        type: String,
        required: [true, "Username is requied"],
        match: [
            /^(?=.{5,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
            "Invalid username, must be unique and contain 8-20 alphanumeric caracters!",
        ],
    },
    image: {
        type: String,
    },
});

const User = models.User || model("User", UserSchema);

export default User;
