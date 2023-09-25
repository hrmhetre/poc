import React, {
  createContext,
  Dispatch,
  useReducer,
  useContext,
  ReactNode,
} from "react";

interface User {
  id: number;
  username: string;
  email: string;
  address: string;
  desigination: string;
  phoneNumber: string;
}

interface UserState {
  users: User[];
  selectedUserId: number | null;
}
type UserAction =
  | { type: "ADD_USER"; payload: User }
  | { type: "EDIT_USER"; payload: User }
  | { type: "DELETE_USER"; payload: number }
  | { type: "SELECT_USER"; payload: number };

const UserContext = createContext<
  { state: UserState; dispatch: Dispatch<UserAction> } | undefined
>(undefined);

// Create a reducer function
const userReducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, users: [...state.users, action.payload] };
    case "EDIT_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case "SELECT_USER":
      return { ...state, selectedUserId: action.payload };
    default:
      return state;
  }
};

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(userReducer, {
    users: [],
    selectedUserId: null,
  });

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
