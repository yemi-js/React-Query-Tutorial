import { useState } from "react"

import Navbar from "./components/Navbar"
import Planets from "./components/Planets"
import People from "./components/People"

function App() {
 const [page, setPage] = useState("planets")

  return (
    <div className="App container flex flex-col h-screen w-[1280px] mx-auto my-8">
      <h1 className="flex justify-center font-bold text-3xl py-2">Star wars App</h1>
      <Navbar setPage={setPage} />
        <div className="">
        {page === "planets" ? <Planets /> : <People />}
        </div>
    </div>
  )
}

export default App
