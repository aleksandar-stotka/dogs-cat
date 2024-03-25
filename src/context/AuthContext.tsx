import { useReducer, createContext, ReactNode, Dispatch } from "react";

interface User {
  
 
  id: string;
  username: string;
}

interface AuthState {
  user: User | null;
}

interface Action {
  type: string;
  payload?: any;
}

export const AuthContext = createContext<{ state: AuthState; dispatch: Dispatch<Action> }>({
  state: { user: null },
  dispatch: () => {}
});

export const authReducer = (state: AuthState, action: Action): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };

    case "LOGOUT":
      return {...state, user:null}  

    
      
      
    // Add cases for other actions if necessary

    default:
      return state;
  }
};

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
