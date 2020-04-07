import React from 'react';
import './title.scss'


const Title: React.FC = () => {
    return (
        <section className="TITLE">

         <div className="font-bold TITLE-TEXT">
            Merced County <br/>Food Bank </div>
        <div className="title-subtext">
            Let's Make Change Together
        </div>
        <button className="bg-white BUTTON">
            Learn More
        </button>

       
        </section>

    )
}

export default Title;