import mongoose from "mongoose";
import { User, UserDocument } from "../model/UserDetails";

export class UserService {
  // Create a new user
  async createUser(userData: Partial<UserDocument>): Promise<UserDocument> {
    const newUser = new User(userData);
    await newUser.save();
    return newUser;
  }

  // Get all users (consider pagination for large datasets)
  async getUsers(): Promise<UserDocument[]> {
    return await User.find();
  }

  // Get a specific user by ID
  async getUserById(userId: string): Promise<UserDocument | null> {
    return await User.findById(userId);
  }

  // Update a user's details
  async updateUser(
    userId: string,
    updateData: Partial<UserDocument>
  ): Promise<UserDocument | null> {
    return await User.findByIdAndUpdate(userId, updateData, { new: true }); // Return the updated document
  }

  // Delete a user (consider soft deletion if needed)
  async deleteUser(userId: string): Promise<boolean> {
    const deletedUser = await User.findByIdAndDelete(userId);
    return !!deletedUser; // Return true if user was deleted, false otherwise
  }
}
