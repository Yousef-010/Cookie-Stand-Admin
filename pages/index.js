import CookieStandAdmin from "../components/CookieStandAdmin";
import { useAuth } from '../contexts/auth'
import LoginForm from "../components/LoginForm";

export default function Home() {

  const {user, login} = useAuth()

  return (
    <>
      {
        user? <CookieStandAdmin /> : <LoginForm OnLogin = {login}/>
      }  
    </>
  )
}

