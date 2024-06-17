import React from 'react'

function Demo() {
  return (
    <>
    <SayHi/>
    <SayBye/>
  
    </>

  )
}


function SayHi() {
    return(
        <>
        <Hi/>
        <Hi/>
        <Hi/>
        <Hi/>
        <Hi/>
        </>
        
    )
}
function Hi() {
    return (
        <>
        <span>Nothing</span>
        </>
    )
}
function SayBye() {
    return(
        <>
        <Bye/>
        <Bye/>
        <Bye/>
        <Bye/>
        <Bye/>

        </>
        
    )
}
function Bye() {
    return (
        <> 
        <span>byeeb</span>

        </>
    )
}
export default Demo