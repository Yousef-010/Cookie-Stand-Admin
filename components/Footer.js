export default function Footer({data_stand}) {
  return (
    <footer className='px-7 py-2 mt-16 font-medium text-gray-700 bg-emerald-500'>
       <p>{data_stand? data_stand.length : 0 } Locations World Wide </p>
    </footer>
  )
}
