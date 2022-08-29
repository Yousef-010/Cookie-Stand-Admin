export default function Footer({cookieState}) {
  return (
    <footer className='px-7 py-2 mt-16 font-medium text-gray-700 bg-emerald-500'>
       <p>{cookieState? cookieState.length : 0 } Locations World Wide </p>
    </footer>
  )
}
