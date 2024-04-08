import { Dispatch } from 'react';

export interface Action {
    type: string;
    payload?: any;
  }

 export interface AuthState {
    user: User | null;
  }


 export interface User {
    id: string;
    username: string;
  }

  
  export interface AuthContextType {
    state: AuthState;
    dispatch: Dispatch<Action>;
    user: User | null; // Make sure to include the user property
  }
  