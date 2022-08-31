export default function Header({OnLogout, user}) {
    function handlelogout(event) {
      event.preventDefault();
      OnLogout()
    }
    return (
      <header className='px-6 py-4 text-4xl text-black bg-emerald-500 flex '>
        <h1>Cookie Stand Admin</h1>
        <div className='  text-4xl text-black bg-emerald-500 absolute top-0 right-5 '>
        <span className ='ml-1 mr-1 text-sm bg-gray-100 border rounded p-2 h-9'>{user.username}</span>
        <button className ='ml-1 mr-1 text-sm bg-gray-300 border rounded hover:bg-gray-500 p-2 h-9' onClick={handlelogout}>SignOut</button>
        <button className ='ml-1 mr-1 text-sm bg-gray-300 border rounded hover:bg-gray-500 p-2 h-9'>Overview</button>
        </div>
      </header>
    )
  }