import { createContext, useReducer, useEffect, type ReactNode, type Dispatch } from "react";
import { checkAuth } from "@/helpers/helpers";

interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  dailyReviewsGenerated: number;
  lastResetDate: string;
  gravatarUrl: string;
  createdAt: string;
  updatedAt: string;
}

interface AuthState {
  user: User | null;
  isAuthReady: boolean;
}

type AuthAction =
  | { type: "REGISTER"; payload: User }
  | { type: "LOGIN"; payload: User }
  | { type: "UPDATE_USER"; payload: User }
  | { type: "LOGOUT" }
  | { type: "AUTH_READY" };

interface AuthContextTypes {
  user: User | null;
  isAuthReady: boolean;
  dispatch: Dispatch<AuthAction>;
}

export const AuthContext = createContext<AuthContextTypes | undefined>(undefined);

const reducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "REGISTER":
      return { ...state, user: action.payload, isAuthReady: true };
    case "LOGIN":
      return { ...state, user: action.payload, isAuthReady: true };
    case "UPDATE_USER":
      return { ...state, user: action.payload, isAuthReady: true };
    case "LOGOUT":
      return { ...state, user: null, isAuthReady: true };
    case "AUTH_READY":
      return { ...state, isAuthReady: true };
    default:
      return state;
  }
};

interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const initialState: AuthState = {
    user: null,
    isAuthReady: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const user = await checkAuth();
        dispatch({ type: "LOGIN", payload: user });
      } catch (error) {
        console.error(error);
        dispatch({ type: "AUTH_READY" });
      }
    };
    verifyUser();
  }, [dispatch]);

  if (!state.isAuthReady) {
    return null;
  }

  return (
    <>
      <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthContextProvider;
