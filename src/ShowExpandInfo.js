import React, {Component} from "react";

class ShowExpandInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {show: false}
        this.toggleDiv = this.toggleDiv.bind(this)
    }

    toggleDiv = () => {
        const {show} = this.state;
        this.setState({show: !show})
    }

    render() {
        return (
            <div className="app-info">
                <br/>
                <button onClick={this.toggleDiv}>Show/Expand info</button>
                <br/><br/>
                {
                    this.state.show && <Box/>
                }
            </div>
        )
    }
}

class Box extends Component {
    render() {
        return (
            <div>
                GOT QUESTIONS?
                Contact me: via <a href="https://www.google.com/intl/ru/gmail/about/">Email</a>
            </div>
        )
    }
}

export default ShowExpandInfo;