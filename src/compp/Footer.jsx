import React from "react"

function Footer(){
    var dat = new Date();
    var yer = dat.getFullYear();
  return ( <footer> <p > 
    copyright {yer}</p></footer>
  )
}

export default Footer ;