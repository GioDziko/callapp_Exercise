export interface IUser {
  id: string;
  name: string;
  email: string;
  gender: string;
  address: {
    street: string;
    city: string;
  };
  phone: string;
}
export interface userStore {
  users: IUser[];
  isLoading: boolean;
  error: null | string;
  getAllUsers: () => void;
  updateUser: (user: IUser) => void;
  deleteUser: (userId: string) => void;
  addNewUser: (user: IUser) => void;
}
export interface IModal {
  user: IUser;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
}

export interface INewUserModal {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
