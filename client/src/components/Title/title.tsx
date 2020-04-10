import React from 'react';
import './title.scss'


const Title: React.FC = () => {
    return (
        <section className="TITLE">

         <div className="font-black TITLE-TEXT">
            Merced County <br/>Food Bank </div>
        <div className="title-subtext">
            Let's Make Change Together
        </div>
        <button className="bg-yellow-500 text-white BUTTON font-bold">
           DONATE NOW
        </button>
        <button className="bg-red-500 text-white  BUTTON font-bold">
          COVID-19
        </button>

       
        </section>

    )
}

export default Title;