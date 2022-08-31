import { createContext, useContext, useState } from 'react';
import jwt from 'jsonwebtoken'
import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_API_URL
const tokenUrl = baseUrl + 'api/token/'

const AuthContext = createContext() 


export function useAuth(){
    const auth = useContext(AuthContext)
    if (auth){
        return auth
    }
    throw new Error('Something Wrong')
}

export function AuthProvider(props){
    const [state, setState] = useState({
        tokens: null,
        user: null,
        login,
        logout,
    })
    
    async function login(username, password){
        const response = await axios.post(tokenUrl, {username, password})
        const decodedAccess = jwt.decode(response.data.access)

        const newSate = {
            tokens: response.data,
            user:{
                username:decodedAccess.username,
                email:decodedAccess.email,
                id: decodedAccess.id
            },
        }

        setState(previousState => ({...previousState, ...newSate}))

        
    }

    function logout () {
        const newSate = {
            tokens: null,
            user:null
        }

        setState(previousState => ({...previousState, ...newSate}))
    }


    return (
        <AuthContext.Provider value = {state}>
            {props.children}
        </AuthContext.Provider>
    )

}







