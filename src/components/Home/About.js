import React, {Component} from 'react';

class About extends Component {
    render() {
        return (
            <section className={"about"}>
                <h2 className={"about-title"}>À propos de moi</h2>
                <div className={"about-diplomas"}>
                    <h3 className={"about-diplomas-title"}>Diplômes</h3>
                </div>
                <div className={"about-skills"}>
                    <h3 className={"about-skills-title"}>Compétences</h3>
                </div>
            </section>
        );
    }
}

export default About;