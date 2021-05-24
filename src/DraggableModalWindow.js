import React, {Component} from "react";
import "./DraggableModalWindow.css"

class DraggableModalWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            diffX: 0,
            diffY: 0,
            dragging: false,
            styles: {}
        }
        this.dragStart = this.dragStart.bind(this);
        this.dragging = this.dragging.bind(this);
        this.dragEnd = this.dragEnd.bind(this);
    }


    dragStart(e) {
        this.setState({
            diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
            diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
            dragging: true

        });
    }

    dragging(e) {
        if (this.state.dragging) {
            var left = e.screenX - this.state.diffX;
            var top = e.screenY - this.state.diffY;

            this.setState({
                styles: {
                    left: left,
                    top: top
                }
            });
        }
    }

    dragEnd() {
        this.setState({
            dragging: false
        })
    }

    render() {
        var classes = this.props.show ? 'Dialog' : 'Dialog hidden';
        return (
            <div className={classes} style={this.state.styles} onMouseDown={this.dragStart}
                 onMouseMove={this.dragging}
                 onMouseUp={this.dragEnd}>
                <div className="DialogTitle">My dialog</div>
                <div className="Contents">
                    Content:
                    -one
                    -two
                </div>
                <div className="closeButton" onClick={this.props.onClose}>
                    Close
                </div>
            </div>
        )

    }
}

export default DraggableModalWindow;