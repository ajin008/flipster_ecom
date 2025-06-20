import { IUser, UserModel } from "../db/modals/UserModel";

export const findUserByEmail = async (email: string): Promise<IUser | null> => {
  return await UserModel.findOne({ email });
};

export const createUser = async (data: Partial<IUser>): Promise<IUser> => {
  const user = new UserModel(data);
  return await user.save();
};
