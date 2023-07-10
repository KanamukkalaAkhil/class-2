import React, { useState } from 'react'

//useState = hook -> functional components
// state variables => value
// state handler => method => used change/modify the values of the state


function P5(props) {
    //const [state,handler] = useState(initValue)
    let [num,setNum] = useState(0)
    const [isView,setIsView] = useState(false)

    const clickHandler = () => {
       setNum(num + 1)
    }

    //function binding => direct call
    //callback   =>

    const boolHandler = () => {
       setIsView(!isView)
    }

    return (
        <div>
            <h1>STATE IN FUNCTIONAL COMPONENT </h1>
            <h2>num = { num } </h2>
            <button onClick={clickHandler} >ADD+1</button>
            <hr />

            <div>
                {
                    isView ? <h1>WELCOME TO REACT</h1> : <h1> TRY NEXT TIME</h1>
                }
            </div>
            <button onClick={ () => boolHandler()}> {isView ? "True" : "False"} </button>
        </div>
    )
}
export default P5
