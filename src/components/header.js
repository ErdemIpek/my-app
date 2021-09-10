import React from "react";
import Typed from "react-typed";





const Header = () => {
    return (
        
                
                <text style={{textAlign:"center",}}>
                <Typed 
                style={{
                    color:"white",
                    fontFamily:"DotGothic16",
                    fontSize:40
                    }}
                className="typed-text"
                strings ={["HELLO!","SELAM!", "HALLO!","BONJOUR!","HOLA!","こんにちは！","Привет!","你好!","안녕하세요!"]}
                typeSpeed={50}
                backSpeed={40}
                loop/>
              
                </text>
                
    )
}

export default Header;