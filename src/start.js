import React from "react"
import Header from "./header"
import { Redirect  } from "react-router-dom"

export default function Start() {

    const handleClick = (e) => {
        return <Redirect to="/meme" />
    }

    return(
        <div>
            <Header />
        <h1 className="greeting">
            Welcome to the Meme Generator!
        </h1>
        
        <button className="greetButton" onClick={ handleClick }>
           I'm going in!
        </button>

        </div>
    )
}