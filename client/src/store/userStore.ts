import { create } from "zustand";
import { fetchUsers } from "../api";
import { IUser, userStore } from "../interfaces/interface";

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

export const useUserStore = create<userStore>()((set, get) => ({
  ...initialState,
  getAllUsers: async () => {
    try {
      set({ isLoading: true });
      const response = await fetchUsers();
      set({ isLoading: false, users: response });
    } catch (error) {
      if (error instanceof Error) {
        set({ isLoading: false, error: error.message });
      }
    }
  },
  updateUser: (user: IUser) => {
    const { users } = get();
    const newUsers: IUser[] = users.map((prev: IUser) =>
      prev.id === user.id ? user : prev
    );
    set({ users: newUsers });
  },
  deleteUser: (userId: string) => {
    set((prev) => ({
      ...prev,
      users: prev.users.filter((user) => user.id !== userId),
    }));
  },
  addNewUser: (user: IUser) => {
    const { users } = get();
    const newUsers = [...users];
    newUsers.push(user);
    set({ users: newUsers });
  },
}));
