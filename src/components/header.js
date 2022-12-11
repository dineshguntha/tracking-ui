import React from 'react'
import { BrowserRouter as Link} from "react-router-dom";

export default function Header() {
    return (
        <div className="flex flex-row items-center w-full">
          <div className="md:basis-1/2 sm:basis-1/2 xs:basis-full">
            <h1 className="font-medium text-3xl py-4">Pizza Tracker</h1>
          </div>
          <div className="md:basis-1/2 sm:basis-1/2 xs:basis-full">
            <ul>
              <li className="inline px-4 py-4">
                <Link to="/">Home</Link>
              </li>
              <li className="inline px-4 py-4">
                <Link to="track">Track</Link>
              </li>
            </ul>
          </div>
        </div>
    )
}