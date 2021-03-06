import React, { useState, useEffect } from "react"
import Header from "./header"

export default function Meme() {
    
    const [ randImg, setRand ] = useState("http://i.imgflip.com/1bij.jpg")
    const [ topText, setTop ] = useState("")
    const [ botText, setBot ] = useState("")
    const [ allMemeImgs, setMemes ] = useState([])

   

    useEffect(() => {
            async function fetchData() {
            const res = await fetch( "https://api.imgflip.com/get_memes" );
            res
              .json()
              .then(res =>{
                const { memes } = res.data 
                setMemes( memes )
            })
    }
        fetchData()
    })

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const randNum = allMemeImgs[ Math.floor( Math.random() * allMemeImgs.length ) ].url
        setRand( randNum )
    } 


    return(
        <div>
        <Header />
        <div className="main">
           <form className="meme-form" onSubmit={ handleSubmit }>
                    <input 
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={ topText }
                        onChange={ e => setTop(e.target.value) }
                    /> 
                    <input 
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={ botText }
                        onChange={ e => setBot(e.target.value) }
                    /> 
                
                    <button>Generate!</button>
                </form>
                <div className="meme">
                    <h2 className="top">{ topText }</h2>
                    <h2 className="bottom">{ botText }</h2>
                    <img src={ randImg } alt="" />         
                </div>
        </div>
        </div>
    )
    }