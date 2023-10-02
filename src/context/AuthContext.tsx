import { User } from 'firebase/auth'
import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import {auth} from '../Config/firebaseConfig'
interface ContextType{
    user: User | undefined;
}
const useAuth = () => {
    const context = useContext(Context)
    return context
}
const Context = createContext<ContextType | undefined>(undefined)
const AuthContext = ({children}: {children: ReactNode}) => {
    const [user, setUser] = useState<User | undefined>(undefined)


    useEffect(() => {
        const unSubscribe = auth.onAuthStateChanged((authUser) => {
          if (authUser) {
            // User is signed in.
            setUser(authUser);
            console.log('logged in')
          } else {
            // User is signed out.
            setUser(undefined);
            console.log('logged out')
          }
        });
        return () => {
          // Unsubscribe from the observer when the component unmounts.
          unSubscribe();
        };
      }, []);

  return (
    <Context.Provider value ={{user}}>
            {children}
    </Context.Provider>
  )
}

export {AuthContext, useAuth} 