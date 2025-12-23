import { Types } from "mongoose";
import User from "./user.model";
import { Errors } from "../../constants/error-codes";

export class UserRepository {

  createUser = async (userBody: any) => {
    const { role } = userBody;

    const newUser = new User(userBody);

    return await newUser.save();
  };

  findUserById = async (id: string) => {
    return await User.findById(id);
  };
  findUserByEmail = async (email: string) => {
    return await User.findOne({ email });
  };

  updateUserPassword = async (id: Types.ObjectId, hashedPassword: string) => {
    return await User.findByIdAndUpdate(
      id,
      { password: hashedPassword },
      { new: true }
    );
  };

  updateProfile = async (id: string, body: any) => {
    return await User.findByIdAndUpdate(id, body, { new: true });
  };
}
