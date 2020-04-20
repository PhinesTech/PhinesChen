import React from 'react';
import VEGGIES from '../../assets/images/vegies.jpg';
import SENIOR from '../../assets/images/Brown-bag-31-1.jpg';
import STRAWBERRIES from '../../assets/images/FINAL-Merced-County-Food-Bank (1).jpg';

import './news.scss';

const News: React.FC = () => {
    return (
        <section className="NEWS">
            <div className="updates">
                <br />
                <br />

                <h1>Stories</h1>
            </div>
            <div className="newsbox firstbox">
                <div className="newsheader ">New Program Aims to Help Families in need find healthier produce</div>
                <div className="newscontent ">
                    June 17, 2017
                    <span>
                        <img src={VEGGIES} alt="Newspaper"></img>
                    </span>
                    <h3>
                        Health and food bank officials in Merced County are teaming up on a project to make fresh
                        produce more accessible to food pantries and low-income households. The Merced County Food Bank
                        and the Merced County Public Health Department are launching the Glean Grow Give project this
                        summer.
                    </h3>
                </div>
            </div>
            <div className="newsbox secondbox">
                <div className="newsheader ">Food Insecurity a Growing Problem in Merced County</div>
                <div className="newscontent">
                    December 16, 2016
                    <span>
                        <img src={STRAWBERRIES} alt="Newspaper"></img>
                    </span>
                    <h3>
                        Local food pantries are seeing increased demand this holiday season, despite a spike in year-end
                        charitable giving. Since 2014, the Merced County Food Bank has also served as an official
                        distribution site for the state’s drought-relief food box program, handing out an average of
                        12,000 boxes every month to those in need.
                    </h3>
                </div>
            </div>
            <div className="newsbox thirdbox">
                <div className="newsheader ">One story of need turned into help for hundreds of hungry seniors</div>
                <div className="newscontent">
                    October 27, 2016
                    <span>
                        <img src={SENIOR} alt="Newspaper"></img>
                    </span>
                    <h3>
                        The Senior Brown Bag Program is a service for residents ages 55 and older, according to the
                        current executive director for the Merced County Food Bank, Bill Gibbs. A bag filled with food
                        is given out twice a month in 16 cities throughout Merced County and one site in Mariposa
                        County.
                    </h3>
                </div>
            </div>
        </section>
    );
};

export default News;
