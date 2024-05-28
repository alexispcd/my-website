import React, {Component} from 'react';
import Button from "../Utils/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown, faDownload} from "@fortawesome/free-solid-svg-icons";

class Presentation extends Component {

    buttons = [
        {
            link: "https://www.google.com",
            content: <p>Mon CV <FontAwesomeIcon icon={faDownload} /></p>,
            type: "filled"
        },
        {
            link: "https://www.google.com",
            content: "Me contacter",
            type: "filled"
        }
    ];

    handleScroll() {
        window.scrollTo({
            top: window.innerHeight - 150,
            behavior: "smooth"
        });
    }

    render() {
        return (
            <section className={"presentation"}>
                <img className={"presentation-image"}
                     src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt=""/>
                <div className={"presentation-content"}>
                    <div className="presentation-name">Alexis Pocard</div>
                    <div className="presentation-job">Developpeur web</div>
                    <div className="btn-container">
                        {this.buttons.map((button) => (
                            <Button link={button.link} content={button.content} type={button.type}/>
                        ))}
                    </div>
                </div>
                <FontAwesomeIcon icon={faArrowDown} bounce size="sm" onClick={this.handleScroll} style={{cursor: "pointer"}}/>
            </section>
        );
    }
}

export default Presentation;