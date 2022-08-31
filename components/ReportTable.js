import {hours } from '../data'

export default function ReportTable({cookieSold, isloading, deleteResourse, fetchResourse, data_stand}) {

  async function handleClick (id){deleteResourse(id)}

  if (data_stand){
    data_stand.map(stand => {
      stand.total = 0
      Object.keys(stand.hourly_sales ).map(hour =>{
      stand.total += stand.hourly_sales[hour]
    })
    
  })
}
  let arr = [
    cookieSold['6am'].reduce((a, b) => a + b, 0),
    cookieSold['7am'].reduce((a, b) => a + b, 0),
    cookieSold['8am'].reduce((a, b) => a + b, 0),
    cookieSold['9am'].reduce((a, b) => a + b, 0),
    cookieSold['10am'].reduce((a, b) => a + b, 0),
    cookieSold['11am'].reduce((a, b) => a + b, 0),
    cookieSold['12pm'].reduce((a, b) => a + b, 0),
    cookieSold['1pm'].reduce((a, b) => a + b, 0),
    cookieSold['2pm'].reduce((a, b) => a + b, 0),
    cookieSold['3pm'].reduce((a, b) => a + b, 0),
    cookieSold['4pm'].reduce((a, b) => a + b, 0),
    cookieSold['5pm'].reduce((a, b) => a + b, 0),
    cookieSold['6pm'].reduce((a, b) => a + b, 0),
    cookieSold['7pm'].reduce((a, b) => a + b, 0)
          ]

  return (
    <>
      <table className="table-fixed divide-x divide-black-500 border-separate border-spacing-y-0.5 ">
        <thead className="text-xs uppercase  bg-emerald-600 items-center border border-slate-600">
          <tr className="text-xs items-center ">
            <th scope="col" className="py-1 px-6 items-center " >Locations</th>

            {
              hours.map(hour => {
                return <th key={hour} className="p-2 items-center  px-3 "> {hour} </th>
              })
            }

            <th  className="py-1 px-6 items-center   font-bold " >Totals</th>
          </tr>
        </thead>
        <tbody className='   bg-emerald-500 items-center '>
          {  
            
              data_stand.map(item => {
              return <tr key={item.location} className=' divide-x divide-white-500 items-center  '> 
              
              <td className="py-1 px-8 items-center  " key={item.location} >
                {!isloading  && item.location || 'pendign'}
                <button onClick={(e) => handleClick(item.id)} className='inline-flex  float-right ml-6 p-1    rounded-t border focus:outline-none hover:bg-gray-100     ' >
                <svg id = {item.id} className="w-5 h-5" fill="none" stroke="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg%22%3E"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </button>
                </td>
              
              {Object.keys(item.hourly_sales ).map(hour => {return <td key={hour} className="py-1 px-4 items-center" >{!isloading && item.hourly_sales[hour] || 'pendign'}</td>})}
              
              <td className=" px-8 items-center "   >{!isloading && item.total || 'pending'}</td>
              </tr>
              
            }) 
          }
        </tbody>
        <tfoot className='   bg-emerald-500 items-center '>
          <tr className=' divide-x divide-white-500 items-center  '>
            <td className="py-1 px-7 font-bold" >Totals</td>
                  <td className="py-1 px-5 items-center font-bold" >{arr[0]}</td>
                  <td className="py-1 px-5 items-center font-bold" >{arr[1]}</td>
                  <td className="py-1 px-5 items-center font-bold" >{arr[2]}</td>
                  <td className="py-1 px-5 items-center font-bold" >{arr[3]}</td>
                  <td className="py-1 px-5 items-center font-bold" >{arr[4]}</td>
                  <td className="py-1 px-5 items-center font-bold" >{arr[5]}</td>
                  <td className="py-1 px-5 items-center font-bold" >{arr[6]}</td>
                  <td className="py-1 px-5 items-center font-bold" >{arr[7]}</td>
                  <td className="py-1 px-5 items-center font-bold" >{arr[8]}</td>
                  <td className="py-1 px-5 items-center font-bold" >{arr[9]}</td>
                  <td className="py-1 px-5 items-center font-bold" >{arr[10]}</td>
                  <td className="py-1 px-5 items-center font-bold" >{arr[11]}</td>
                  <td className="py-1 px-5 items-center font-bold" >{arr[12]}</td>
                  <td className="py-1 px-5 items-center font-bold" >{arr[13]}</td>
            <td className="py-1 px-7 items-center font-bold" >{arr.reduce((a, b) => a + b, 0)}</td>
          </tr>
        </tfoot>
      </table>
    </>
  )
}