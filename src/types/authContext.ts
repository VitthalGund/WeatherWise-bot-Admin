export type userData = {
  username: string;
  email: string;
};

export type auth = {
  email: string;
  roles: string[];
  accessToken: string;
};

export type AuthContext = {
  updateUserData: (data: userData) => void;
  updateAuth: (data: auth) => void;
  setPersist: (data: string) => void;
  auth: auth;
  userData: userData;
  persist: string;
};

export type User = {
  chatId: string;
  username: string;
  locationName: string;
  blocked: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleDeleteUser: (chatId: string) => Promise<any>;
};
