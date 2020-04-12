import React from 'react';


import './dashboard.scss';

const Dashboard: React.FC = () => {
    return (
        <section className="DASHBOARD">
                    <div className="center">
            <div className="left">
                <div className="dashboardlogo">
                </div>
                <div className="company">
                <div className="company-name">Merced County <br/> Food Bank</div>
                <div className="company-description">Welcome, Admin </div>
                </div>
                <div className="navigation">
                <ul>
                    <li><div className="homeicon">Home</div></li>
                    <li> <div className="donateicon">Donate</div></li>
                    <li> <div className="packageicon">Package</div></li>
                    <li> <div className="contacticon">Contact</div></li>
                </ul>
                </div>
            </div>
            <div className="right">
                <div className="title">Dashboard</div>
                <div className="description">Track your food distribution</div>
                <div className="row">
                <div className="graph">
                    <svg viewBox="0 0 250 60" width="250" height="90">
                    <path d="M 209.328 17.34 C 221.956 17.588 235.264 32.599 250 22.328" fill="none" vectorEffect="non-scaling-stroke" troke-width="2" stroke="rgb(243,243,250)" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit="3"></path>
                    <linearGradient id="_lgradient_1" x1="0%" y1="50%" x2="100%" y2="50%">
                        <stop offset="0%" stopOpacity="1" className="stylelish"></stop>
                        {/* style="stop-color:rgb(120,113,255);" */}
                        <stop offset="100%" stopOpacity="1" className="styleling" ></stop>
                        {/* style="stop-color:rgb(111,234,255);" */}
                    </linearGradient>
                    <path d=" M 0 43.634 C 5.934 43.634 11.318 51.209 17.462 51.342 C 33.219 51.683 30.603 59.567 39.187 59.868 C 46.963 60.141 50.44 44.192 60.537 43.77 C 69.126 43.77 72.129 52.461 79.739 52.433 C 90.904 52.433 94.93 38.455 106.648 39.78 C 129.082 42.317 124.556 27.606 139.157 27.177 C 153.758 26.747 158.235 44.485 171.96 44.725 C 196.438 45.155 189.782 17.1 208.248 17.1" fill="none" vectorEffect="non-scaling-stroke" troke-width="2" stroke="url(#_lgradient_1)" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit="3"></path>
                    <path d="M 206.649 17.218 C 206.649 15.739 207.85 14.538 209.328 14.538 C 210.807 14.538 212.008 15.739 212.008 17.218 C 212.008 18.696 210.807 19.897 209.328 19.897 C 207.85 19.897 206.649 18.696 206.649 17.218 Z" fill="rgb(111,232,255)"></path>
                    <text transform="matrix(1,0,0,1,195,5)" >+14%</text>
                    {/* style="font-family:&amp;quot;Open Sans&amp;quot;;font-weight:700;font-size:12px;font-style:normal;fill:#6fe8ff;stroke:none;" */}
                    <div className="stock">
                        <div className="stock-logo paperpillar"><i className="fa fa-inverse fa-angle-double-up"></i></div>
                        <div className="stock-info">
                        <div className="stock-name">PPRPLR</div>
                        <div className="stock-fullname">Paperpillar Studio</div>
                        </div>
                    </div>
                    </svg>
                </div>
                <div className="graph">
                    <svg viewBox="0 0 250 60" width="250" height="90">
                    <path d="M 209.328 17.34 C 221.956 17.588 235.264 32.599 250 22.328" fill="none" vectorEffect="non-scaling-stroke" troke-width="2" stroke="rgb(243,243,250)" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit="3"></path>
                    <linearGradient id="_lgradient_2" x1="0%" y1="50%" x2="100%" y2="50%">
                        <stop offset="0%" stopOpacity="1" ></stop>
                        {/* style="stop-color:rgb(248, 135, 129);" */}
                        <stop offset="100%" stopOpacity="1" ></stop>
                        {/* style="stop-color:rgb(247, 198, 130);" */}
                    </linearGradient>
                    <path d=" M 0 43.634 C 5.934 43.634 11.318 51.209 17.462 51.342 C 33.219 51.683 30.603 59.567 39.187 59.868 C 46.963 60.141 50.44 44.192 60.537 43.77 C 69.126 43.77 72.129 52.461 79.739 52.433 C 90.904 52.433 94.93 38.455 106.648 39.78 C 129.082 42.317 124.556 27.606 139.157 27.177 C 153.758 26.747 158.235 44.485 171.96 44.725 C 196.438 45.155 189.782 17.1 208.248 17.1" fill="none" vectorEffect="non-scaling-stroke" troke-width="2" stroke="url(#_lgradient_2)" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit="3"></path>
                    <path d="M 206.649 17.218 C 206.649 15.739 207.85 14.538 209.328 14.538 C 210.807 14.538 212.008 15.739 212.008 17.218 C 212.008 18.696 210.807 19.897 209.328 19.897 C 207.85 19.897 206.649 18.696 206.649 17.218 Z" fill="rgb(247, 198, 130)"></path>
                    <text transform="matrix(1,0,0,1,195,5)">+14%</text>
                    {/* style="font-family:&amp;quot;Open Sans&amp;quot;;font-weight:700;font-size:12px;font-style:normal;fill:rgb(247, 198, 130);stroke:none;" */}
                    </svg>
                    <div className="stock">
                    <div className="stock-logo dandruft"><i className="fa fa-inverse fa-circle-thin"></i></div>
                    <div className="stock-info">
                        <div className="stock-name">DDFT</div>
                        <div className="stock-fullname">Dandruft Craft</div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="row column">
                <div className="sub-title">Goods</div>
                <div className="asset-category">
                    <div className="category">
                    <div className="asset">
                        <div className="asset-logo"><i className="fa fa-bolt"></i></div>
                    </div>
                    <div className="asset-name">Energy</div>
                    </div>
                    <div className="category">
                    <div className="asset">
                        <div className="asset-logo"><i className="fa fa-inbox"></i></div>
                    </div>
                    <div className="asset-name">Gold</div>
                    </div>
                    <div className="category">
                    <div className="asset">
                        <div className="asset-logo"><i className="fa fa-clone"></i></div>
                    </div>
                    <div className="asset-name">Metals</div>
                    </div>
                    <div className="category">
                    <div className="asset">
                        <div className="asset-logo"><i className="fa fa-pagelines"></i></div>
                    </div>
                    <div className="asset-name">Grains</div>
                    </div>
                    <div className="category">
                    <div className="asset">
                        <div className="asset-logo"><i className="fa fa-adjust"></i></div>
                    </div>
                    <div className="asset-name">Livestock</div>
                    </div>
                    <div className="category">
                    <div className="asset">
                        <div className="asset-logo"><i className="fa fa-tencent-weibo"></i></div>
                    </div>
                    <div className="asset-name">Cotton</div>
                    </div>
                    <div className="category">
                    <div className="asset">
                        <div className="asset-logo"><i className="fa fa-leaf"></i></div>
                    </div>
                    <div className="asset-name">Corn</div>
                    </div>
                    <div className="category">
                    <div className="asset">
                        <div className="asset-logo"><i className="fa fa-tint"></i></div>
                    </div>
                    <div className="asset-name">Oil</div>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="half">
                    <div className="sub-title">Today Gainers</div>
                    <div className="stock">
                    <div className="stock-logo apple"><i className="fa fa-inverse fa-apple"></i></div>
                    <div className="stock-info">
                        <div className="stock-name">APPL</div>
                        <div className="stock-fullname">Apple Inc.</div>
                    </div>
                    <div className="stock-value">+14.5%</div>
                    </div>
                    <div className="stock">
                    <div className="stock-logo facebook"><i className="fa fa-inverse fa-facebook"></i></div>
                    <div className="stock-info">
                        <div className="stock-name">FB</div>
                        <div className="stock-fullname">Facebook, Inc.</div>
                    </div>
                    <div className="stock-value">+12.9%</div>
                    </div>
                    <div className="stock">
                    <div className="stock-logo amazon"><i className="fa fa-inverse fa-amazon"></i></div>
                    <div className="stock-info">
                        <div className="stock-name">AMZN</div>
                        <div className="stock-fullname">Amazon.com, Inc.</div>
                    </div>
                    <div className="stock-value">+10.2%</div>
                    </div>
                </div>
                <div className="half">
                    <div className="sub-title">Popular this week</div>
                    <div className="stock">
                    <div className="stock-logo twitter"><i className="fa fa-inverse fa-twitter"></i></div>
                    <div className="stock-info">
                        <div className="stock-name">TWTR</div>
                        <div className="stock-fullname">Twitter Inc.</div>
                    </div>
                    <div className="stock-value">+14.5%</div>
                    </div>
                    <div className="stock">
                    <div className="stock-logo paypal"><i className="fa fa-inverse fa-paypal"></i></div>
                    <div className="stock-info">
                        <div className="stock-name">PYPL</div>
                        <div className="stock-fullname">Paypal Holdings Inc.</div>
                    </div>
                    <div className="stock-value">+12.9%</div>
                    </div>
                    <div className="stock">
                    <div className="stock-logo google"><i className="fa fa-inverse fa-google"></i></div>
                    <div className="stock-info">
                        <div className="stock-name">GOOGL</div>
                        <div className="stock-fullname">Alphabet Inc.</div>
                    </div>
                    <div className="stock-value">+10.2%</div>
                    </div>
                </div>
                </div>
            </div>
            </div><a className="inspiration " href="https://github.com/PhinesTech" target="_blank">PhinesTech  </a>
        </section>
    );
};

export default Dashboard;
