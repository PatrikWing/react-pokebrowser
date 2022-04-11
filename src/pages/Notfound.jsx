import {Link} from "react-router-dom"

export const Notfound = () => {
  return(
    <div className="flex flex-col items-center justify-center h-screen w-scren gap-y-3">
      <h1 className="text-2xl">404</h1>
      <p className="text-lg">Page not found</p>
      <Link to="/">
      <button>🤩<span className="text-blue-700 underline">to Poke Browse</span>🤩</button>
      </Link>
      
    </div>
  )
}