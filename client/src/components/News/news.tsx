import React from 'react';
import './news.scss';

const News: React.FC = () => {
    return (
        <section className="NEWS">
            <div className="updates">
                <br/>
                <br/>
                <br/>
            <h1>
                News
            </h1>
            </div>
            <br/>
            <div className="newsheader">
                New Program Aims to Help Families in need find
                healthier <br/> fresh produce in Merced County
                <p>
                June 17, 2017
                </p>
                <p>
                Health and food bank officials in Merced County are teaming up on a 
                <br/>project to make fresh produce more accessible to food pantries and 
                low-<br/>income  households. 

                The Merced County Food Bank and the Merced County <br/> Public Health Department 
                are launching the Glean Grow Give project this summer <br/> as a way to add 
                healthier food to diets, said Bill Gibbs, executive director <br/>of the food bank.
                </p>
            </div>
            <br/>
            <div className="newsheader">
                Food Insecurity a Growing Problem in Merced County
                <p>
                December 16, 2016
                </p>
                <p>
                Local food pantries are seeing increased demand this holiday season, <br/>
                despite a spike in year-end charitable giving. 

                Since 2014, the Merced County Food Bank <br/> has also served as an official distribution 
                site for the state’s drought-relief food box <br/> program, handing out an average of 12,000 
                boxes every month to those in need.
                </p>
            </div>
            <br/>
            <div className="newsheader">
                One story of need turned into help for hundreds of hungry seniors
                <p>
                October 27, 2016
                </p>
                <p>
                The Senior Brown Bag Program is a service for residents ages 55 and older, <br/> 
                according to the current executive director for the Merced County Food Bank, 
                Bill Gibbs. <br/> A bag filled with food is given out twice a month in 16 cities 
                throughout <br/> Merced County and one site in Mariposa County.
                </p>
            </div>

            
        </section>
     );
};
    
export default News;
