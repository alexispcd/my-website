import React, {Component} from 'react';
import MenuItem from "./MenuItem";

class Menu extends Component {

    menuItems = [
        {
            link: "https://www.google.com",
            content: "Moi"
        },
        {
            link: "https://www.google.com",
            content: "Compétences"
        },
        {
            link: "https://www.google.com",
            content: "Projets"
        },
        {
            link: "https://www.google.com",
            content: "Expérience"
        },
        {
            link: "https://www.google.com",
            content: "Contact"
        }
    ];

    render() {
        return (
            <div className={"menu"}>
                <h1>Alexis Pocard</h1>
                <div className={"menu-items-container"}>
                    {this.menuItems.map((menuItem) => (
                        <MenuItem link={menuItem.link} content={menuItem.content}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default Menu;