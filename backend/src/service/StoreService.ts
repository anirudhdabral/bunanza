import mongoose from 'mongoose';
import { Store, StoreDocument } from '../model/Store';

export class StoreService {
  // Create a new store
  async createStore(storeData: Partial<StoreDocument>): Promise<StoreDocument> {
    const newStore = new Store(storeData);
    await newStore.save();
    return newStore;
  }

  // Get all stores (consider pagination for large datasets)
  async getStores(): Promise<StoreDocument[]> {
    return await Store.find();
  }

  // Get a specific store by ID
  async getStoreById(storeId: string): Promise<StoreDocument | null> {
    return await Store.findById(storeId);
  }

  // Update a store's details
  async updateStore(storeId: string, updateData: Partial<StoreDocument>): Promise<StoreDocument | null> {
    return await Store.findByIdAndUpdate(storeId, updateData, { new: true }); // Return the updated document
  }

  // Delete a store (consider soft deletion if needed)
  async deleteStore(storeId: string): Promise<boolean> {
    const deletedStore = await Store.findByIdAndDelete(storeId);
    return !!deletedStore; // Return true if store was deleted, false otherwise
  }
}
