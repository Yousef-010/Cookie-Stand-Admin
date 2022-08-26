import { useState } from 'react'
export default function CookieStandForm() {

    const [state, setState] = useState({standData: [],});
   
    function formHandler(event) {
        event.preventDefault();
        let newStand = {
          Location: event.target.Location.value,
          minCustomers: parseInt(event.target.MinimumCustomersPerHour.value),
          maxCustomers: parseInt(event.target.MaximumCustomersPerHour.value),
          avgCookies: parseFloat(event.target.AverageCookiesPerHour.value),
        };
        setState(newStand);
        console.log(newStand);
       
      }

  return (
    <>
    <div className='w-full max-w-screen-lg p-3 px-5 my-5 rounded-md bg-emerald-300'>
        <h1 className="text-2xl font-medium text-center">Create Cookie Stand</h1>
        <form onSubmit={formHandler} className="my-5 rounded-md ">
            <div className="flex flex-wrap ">
                
                <div className="w-full px-3 mb-5">
                    <label className="text-sm font-bold text-gray-700 ">Location</label>
                    <input className="w-full px-4 py-3 text-gray-700 placeholder-black rounded bg-gray-50 h-1/2" id="Location" type="string" placeholder="Barcelona" required={true} />
                </div>

                <div className="w-full px-3 mb-6 md:w-1/4 md:mb-0">
                    <label className="text-sm font-bold tracking-wide text-gray-700">Minimum Customers Per Hour</label>
                    <input className="w-full px-4 py-3 text-gray-700 placeholder-black rounded bg-gray-50 h-1/2" id="MinimumCustomersPerHour" type="text" placeholder="2" required={true} />
                </div>


                <div className="w-full px-3 mb-6 md:w-1/4 md:mb-0">
                    <label className="text-sm font-bold tracking-wide text-gray-700">Maximum Customers Per Hour</label>
                    <input className="w-full px-4 py-3 text-gray-700 placeholder-black rounded bg-gray-50 h-1/2" id="MaximumCustomersPerHour" type="text" placeholder="4" required={true} />
                </div>
                
                <div className="w-full px-3 mb-6 md:w-1/4 md:mb-0">
                    <label className="text-sm font-bold tracking-wide text-gray-700">Average Cookies Per Hour</label>
                    <input className="w-full px-4 py-3 text-gray-700 rounded 0placeholder-black bg-gray-50 h-1/2" id="AverageCookiesPerHour" type="float" placeholder="2.5" required={true} />
                </div>

                <div className="mt-4 md:w-1/4 ">
                    <button type="submit" className="block w-full h-full font-bold text-gray-700 rounded-md bg-emerald-500">
                    Create
                    </button>
                </div>

            </div>
        </form>
    </div>

    <div>
        <p className="text-gray-500 text-md">Report Table Coming Soon...</p>
    </div>
    
    <div className='mt-5'>
    {JSON.stringify(state) == '{"standData":[]}' ? ("Enter A New Stand") : 
        (
        <p className="text-sm tracking-widest text-gray-600">
          {JSON.stringify(state)}
        </p>
        )
    }
    </div>
    </>
  )
}
