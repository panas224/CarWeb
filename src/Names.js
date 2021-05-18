import {Component} from "react";
import Name from "./Name";

class Names extends Component {
    render() {
        return (
            <div>
                    {this.props.names.map(name => <Name name={name}/>)}
            </div>
        )
    }

}

export default Names;