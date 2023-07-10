import React from "react";

// global
let x = 21;
const y = 17;
let title = "WELCOME TO STRING DATA"
let isAdmin = true


const user = {
   name: "Anil",
   age:22,
   email:"akhil09@gmail.com"
}

const emp = ['ANA DE ARMOS','GAL GADOT', 'ARUHI', 'NAZRIYA']

const P2 = (props) => {
   let x = 9;

    return (
        <div>
            <h1>VARIABLES IN CONST FUNCTIONAL COMPONENT</h1>
            <h2> x = { x } </h2>
            <h2> y = { y } </h2>
            <h2> product = { x * y } </h2>

            <hr />
            <h2> { title }</h2>

            <hr />
            <h3> Boolean = { isAdmin ? "SAY TRUE" : "say false" } </h3>


            <hr />

            <h3> name = { user.name }</h3>
            <h3> age = { user.age }</h3>
            <h3> email = { user.email }</h3>

            <hr />

            <div>

                {

                    emp.map((item,index) => {
                        return (
                            <p key={index} > { index } { item } </p>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default P2