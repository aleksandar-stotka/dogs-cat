import { useReducer, createContext, ReactNode, Dispatch } from "react";

// Define the Action interface
interface Action {
  type: string;
  payload?: any;
}

// Define the AuthState interface
interface AuthState {
  user: User | null;
}

// Define the User interface
interface User {
  id: string;
  username: string;
  // Add other properties as needed
}

// Create the AuthContext
export const AuthContext = createContext<{ state: AuthState; dispatch: Dispatch<Action> }>({
  state: { user: null },
  dispatch: () => {}
});

// Define the authReducer
export const authReducer = (state: AuthState, action: Action): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };

    case "LOGOUT":
      return {...state, user: null};

    // Add cases for other actions if necessary

    default:
      return state;
  }
};

// Define the AuthContextProvider component
export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null
  });
  console.log('Auth context state' ,state)

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
