import { useReducer,createContext } from "react"

export const AuthContext = createContext()

export const authReducer = (state,action) => {
    switch (action.type) {
        case "LOGIN":
            return {...state, user: action.payload}
           
        


        default: 
            return state

    } 

}

///crete custom auth context provider component wich wraps provider on this context

export const AuthContextProvider = ({children}) => { //children represent what ever this component wrap in the future (app component)
    ///return template and inside tamplete return 
    const [state,dispatch] = useReducer(authReducer, {
        user: null
    })
    // later with dispatch contron user login signup
    return (
        <AuthContext.Provider value={{...state, dispatch}}>  
            {children}

        </AuthContext.Provider>
    )

}