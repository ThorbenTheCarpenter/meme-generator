import React from "react"
import Header from "./header"
import { navigate } from 'hookrouter';

export default function Start() {


    return(
        <div>
            <Header />
        <h1 className="greeting">
            Welcome to the Meme Generator!
        </h1>
        
        <button className="greetButton" onClick={ e => navigate('/meme') }>
           I'm going in!
        </button>

        </div>
    )
}