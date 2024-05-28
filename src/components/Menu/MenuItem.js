import React, {Component} from 'react';

class MenuItem extends Component {

    render() {
        return (
            <a className={"menu-item"} href={this.props.link}>
                <p className={"menu-item-content"}>{this.props.content}</p>
            </a>
        );
    }
}

export default MenuItem;