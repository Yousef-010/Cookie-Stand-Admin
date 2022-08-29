import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CreateForm from "./CreateForm"
import ReportTable from "./ReportTable"

import { useState } from 'react'
import {hourly_sales, hours} from '../data'
export default function CookieStandAdmin() {
  

  function randomizerHourlySales (minimum, maximum){
    minimum = Math.ceil(minimum)
    maximum = Math.floor(maximum)
    return (Math.floor(Math.random() * (maximum - minimum +1)) + minimum)
  }


  const [cookieState, setcookieState] = useState([]);
  const [cookieSold, setcookieSold] = useState([]);
   
    function formHandler(event) {
        event.preventDefault();
        let newStand = {
          Location: event.target.Location.value,
          minCustomers: parseInt(event.target.MinimumCustomersPerHour.value),
          maxCustomers: parseInt(event.target.MaximumCustomersPerHour.value),
          avgCookies: parseFloat(event.target.AverageCookiesPerHour.value),
          values: {}
        };

        // horizental summation 
        let total_sales = 0
         hours.map(hour => {
          let customers = randomizerHourlySales(newStand.minCustomers, newStand.maxCustomers)
          newStand.values[hour] = customers * parseInt(newStand.avgCookies)
          total_sales += newStand.values[hour]
        })
        newStand.total = total_sales
        setcookieState([...cookieState, newStand]); 

        let dailyStand = {
          '6am': cookieState.map(ele => { return ele.values['6am']}) ,
          '7am': cookieState.map(ele => { return ele.values['7am']}) ,
          '8am': cookieState.map(ele => { return ele.values['8am']}) ,
          '9am': cookieState.map(ele => { return ele.values['9am']}) ,
          '10am': cookieState.map(ele => { return ele.values['10am']}) ,
          '11am': cookieState.map(ele => { return ele.values['11am']}) ,
          '12pm': cookieState.map(ele => { return ele.values['12pm']}) ,
          '1pm': cookieState.map(ele => { return ele.values['1pm']}) ,
          '2pm': cookieState.map(ele => { return ele.values['2pm']}) ,
          '3pm': cookieState.map(ele => { return ele.values['3pm']}) ,
          '4pm': cookieState.map(ele => { return ele.values['4pm']}) ,
          '5pm': cookieState.map(ele => { return ele.values['5pm']}) ,
          '6pm': cookieState.map(ele => { return ele.values['6pm']}) ,
          '7pm': cookieState.map(ele => { return ele.values['7pm']}) 
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


      <Header />

      <main className='flex flex-col py-4 space-y-8 items-center pt-6 ' >
        <CreateForm formHandler={formHandler} />
        {
          cookieState.length > 0 ?<ReportTable key={cookieState.Location} cookieState={cookieState} cookieSold={cookieSold}/>  :<h2 className='font-bold'>No Cookie Stands Available</h2>
        }
        
         
      </main>

      <Footer cookieState={cookieState}/>
    </>
  )
}