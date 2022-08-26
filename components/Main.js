import CookieStandForm from "./CookieStandForm"


export default function Main (props) {


    

    return (
        <main className = 'flex flex-col items-center py-4 pt-6 spy'>
            <CookieStandForm onSubmit={props.formHandler} /> 
        </main>
    )
} 