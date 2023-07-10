import React, { Component } from "react";

// global
let x = 21;
const y = 17;
let title = "WELCOME TO STRING DATA"
let isAdmin = true


const user = {
   name: "Bharth",
   age:22,
   email:"akhil09@gmail.com"
}

const emp = ['ANA DE ARMOS','GAL GADOT', 'ARUHI', 'NAZRIYA']

class P4 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        //local variables
        let x = 145
        return (
            <div>
                <h1>VARIABLES IN CLASS COMPONENT</h1>
                <h3> x = { x } </h3>
            </div>
        )
    }
}

export default P4