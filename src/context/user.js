import React, { useState } from "react";

// create the context object
const UserContext = React.createContext()

// create the context provider component
function UserProvider({children}){
   const [user, setUser] = useState(null)
    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
}

export {UserContext, UserProvider}