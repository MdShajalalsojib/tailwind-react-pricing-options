 
import './App.css'

function App() {
  

  return (
    <>

<div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Md.Shajalal</a>
  </div>
  <div className="flex gap-2">
    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img  
            alt="Tailwind CSS Navbar component"
            src="https://i.ibb.co.com/KjX88rry/1745646133822-removebg-preview.png" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
      
      <h1 className='text-3xl font-bold text-center mt-4 '>Md.Shajalal</h1>

      <div className="card card-side bg-base-100 shadow-sm mt-5 m-10">
  <figure>
    <img
      src=" https://i.ibb.co.com/B27TNPbf/1745646133822.jpg "
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl font-bold">Hi........</h2>
    <h1 className='text-3xl font-bold'>MY Neme is Shajalal</h1>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
       
      
    </>
  )
}

export default App
