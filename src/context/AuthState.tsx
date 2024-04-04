import { User } from "./AuthContext";

export interface AuthState {
  user: User | null;
}
