import React from "react";

export default class P6 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x:17,
            y:9,
            title: "welcome to string",
            isView : true,
            emp:['anil','akhil','sunil','bharth']
        }
    }

    countHandler() {
        //this.setState => built in state handler (class component)
        this.setState({
            x: this.state.x + 1,
            y: this.state.y + 2
        })
    }


    render() {
        return (
            <div>
                <h1>STATES IN CLASS COMPONENT</h1>
                <h3> { this.state.title } </h3>
                <h3> x = { this.state.x } and y = { this.state.y }</h3>
                <button onClick={this.countHandler.bind(this)} >INCREMENT</button>
                <hr />
                <h3>
                    Boolean = { this.state.isView ?
                            <span style={{color: 'green'}}> SAY TRUE</span>:
                            <span style={{color: 'red'}}> say false</span>}

                </h3>

                <hr />
            </div>
        )
    }
}
