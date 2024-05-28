import React, {Component} from 'react';
import Menu from "../components/Menu/Menu";
import Presentation from "../components/Home/Presentation";
import About from "../components/Home/About";

class Home extends Component {
    render() {
        return (
            <div>
                <Menu />
                <Presentation />
                <About />
            </div>
        );
    }
}

export default Home;