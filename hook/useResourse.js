import axios from "axios";
import useSWR from "swr";

export const apiUrl = process.env.NEXT_PUBLIC_API_URL
export const apiAdd = apiUrl+'api/v1/cookie_stands/'

import { useAuth } from '../contexts/auth'


export function useResource (){
    const {tokens} = useAuth() 

    const {data, error, mutate} = useSWR([apiUrl, tokens], fetchResourse )

    async function fetchResourse () {
        
        
        if (!tokens){
            return 
        }
        try {
            const response = await axios.get(apiAdd, config())
            return response.data
        }
        catch (error) {
            console.log('error', error)
        }
    }

    async function createResourse (info) {
        try{
            await axios.post(apiAdd, info, config())
            mutate()
        }
        catch (error){
            console.log('error', error)
            alert(error.message)
        }

    }

    async function deleteResourse (id) {
        try{
            const url = apiAdd + id+'/' 
            await axios.delete(url, config())
            mutate()
        }
        catch (error){
            alert(error.message)
        }
    }


    function config(){
        return {
            headers: {
                'Authorization': 'Bearer ' + tokens.access
            }
        }
    }
    return {
        data_stand: data,
        createResourse,
        fetchResourse,
        deleteResourse
    }
}


