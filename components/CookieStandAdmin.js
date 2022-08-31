import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CreateForm from "./CreateForm"
import ReportTable from "./ReportTable"

import { useState } from 'react'
import { hours} from '../data'
import { useAuth } from '../contexts/auth'
import { useResource } from '../hook/useResourse'


export default function CookieStandAdmin() {
  
  const { createResourse , fetchResourse, deleteResourse, data_stand} = useResource()
  const { user, logout } = useAuth()

  function randomizerHourlySales (minimum, maximum){
    minimum = Math.ceil(minimum)
    maximum = Math.floor(maximum)
    return (Math.floor(Math.random() * (maximum - minimum +1)) + minimum)
  }


  const [cookieState, setcookieState] = useState([]);
  const [cookieSold, setcookieSold] = useState([]);
  const [isloading, setisloading] = useState(false)

    async function formHandler(event) {
        event.preventDefault();
        let newStand = {
          location: event.target.Location.value,
          minimum_customers_per_hour: parseInt(event.target.MinimumCustomersPerHour.value),
          maximum_customers_per_hour : parseInt(event.target.MaximumCustomersPerHour.value),
          average_cookies_per_sale : parseFloat(event.target.AverageCookiesPerHour.value),
          hourly_sales: {},
          owner:user.id
        };

        // horizental summation 
        let total_sales = 0
        hours.map(hour => {
          let customers = randomizerHourlySales(newStand.minimum_customers_per_hour, newStand.maximum_customers_per_hour )
          newStand.hourly_sales[hour] = customers * parseInt(newStand.average_cookies_per_sale )
          
          total_sales += newStand.hourly_sales[hour]
        })
        newStand.total = total_sales
        
        setisloading(true)
        await createResourse(newStand)
        const data = await fetchResourse()
        if (data){
          
          data.map(stand => {
            stand.total = 0
            hours.map(hour =>{
              stand.total += stand.hourly_sales[hour]
            })
            
          })
          setisloading(false)
        }
        setcookieState(data); 

        let dailyStand = {
          '6am': data_stand.map(ele => { return ele.hourly_sales['6am']}) ,
          '7am': data_stand.map(ele => { return ele.hourly_sales['7am']}) ,
          '8am': data_stand.map(ele => { return ele.hourly_sales['8am']}) ,
          '9am': data_stand.map(ele => { return ele.hourly_sales['9am']}) ,
          '10am': data_stand.map(ele => { return ele.hourly_sales['10am']}) ,
          '11am': data_stand.map(ele => { return ele.hourly_sales['11am']}) ,
          '12pm': data_stand.map(ele => { return ele.hourly_sales['12pm']}) ,
          '1pm': data_stand.map(ele => { return ele.hourly_sales['1pm']}) ,
          '2pm': data_stand.map(ele => { return ele.hourly_sales['2pm']}) ,
          '3pm': data_stand.map(ele => { return ele.hourly_sales['3pm']}) ,
          '4pm': data_stand.map(ele => { return ele.hourly_sales['4pm']}) ,
          '5pm': data_stand.map(ele => { return ele.hourly_sales['5pm']}) ,
          '6pm': data_stand.map(ele => { return ele.hourly_sales['6pm']}) ,
          '7pm': data_stand.map(ele => { return ele.hourly_sales['7pm']}) 
        };
        setcookieSold(dailyStand)
    }
  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
        <meta name="description" content="App to handle admin cookies " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header OnLogout={logout} user={user}/>

      <main className='flex flex-col py-4 space-y-8 items-center pt-6 ' >
        <CreateForm formHandler={formHandler} />
        {
          cookieState.length > 0 ?
          <ReportTable 
          key={cookieState.location} 
          cookieSold={cookieSold} 
          isloading={isloading}
          deleteResourse={deleteResourse}
          fetchResourse={fetchResourse}
          data_stand={data_stand}
          /> 
          :<h2 className='font-bold'>No Cookie Stands Available</h2>
        }
      </main>

      <Footer data_stand={data_stand}/>
    </>
  )
}