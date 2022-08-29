import {hours } from '../data'


export default function ReportTable({cookieState, cookieSold}) {
  

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
       <table className="table-fixed   divide-x divide-black-500 border-separate border-spacing-y-0.5 ">
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
            cookieState.map(item => {
              return <tr key={item.Location} className=' divide-x divide-white-500 items-center  '> 
              <td className="py-1 px-8 items-center " >{item.Location}</td>
              {Object.keys(item.values).map(hour => {return <td key={hour} className="py-1 px-4 items-center" >{item.values[hour]}</td>})}
              
              <td className=" px-8 items-center "   >{item.total}</td>
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