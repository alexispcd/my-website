import React, {Component} from 'react';

class Button extends Component {

    getClass = (type) => {
        if (type === "border") {
            return "btn-border";
        } else if (type === "filled") {
            return "btn-filled";
        } else {
            return "btn";
        }
    }

    render() {
        return (
            <a className={this.getClass(this.props.type)} href={this.props.link}>
                {
                    this.props.content
                }
            </a>
        );
    }
}

export default Button;