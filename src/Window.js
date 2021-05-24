import React, { Component } from 'react';

import DraggableModalWindow from "./DraggableModalWindow";
import "./Window.css"

export default class Window extends Component{
    constructor(props) {
        super(props);

        this.state = {
            showDialog: false
        }
    }

    _showDialog() {
        this.setState({showDialog: !this.state.showDialog});
    }

	render() {

		return (
			<div className='MainApp'>
				<div className='button' onClick={this._showDialog.bind(this)}> Show Dialog </div>
                <DraggableModalWindow onClose={this._showDialog.bind(this)} show={this.state.showDialog}/>
			</div>

		);
	}
}