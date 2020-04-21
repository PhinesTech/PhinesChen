import React from 'react';

import './storage.scss';

// $('.mv-save').on('click', function() {
//     $('.saved').fadeIn().delay(3000).fadeOut();
//   });
  
//   function mobileViewUpdate() {
//       var viewportWidth = $(window).width();
//       if (viewportWidth < 600) {
//         $('td:not([property="breed"])').each(function(event) {
//           header = $(this).attr('property')
          
//           if(! $(this).parent().find('#' + header).length) {
//             $('#' + header).clone().insertBefore(this);
//           }
//         });
//       }
//   }
   
//   $(window).on('load resize', mobileViewUpdate);

const Storage: React.FC = () => {
    return (
            <section className="STORAGE">
                <div className="center7">
                <div className="right">
                    <div className="title">Food Storage</div>
                    <br/>

                    <div className="container" data-ng-app="myApp" data-ng-controller="myCtrl">
                        <div className="row">
                        <div className="searchtitle">
                           <h2>Search: &nbsp;</h2>  
                        </div>
                        <div className="col-md-10">
                            <input type="text" className="search" data-ng-model="table" />
                        </div>
                        </div>
                        <br/>
                        <div data-pagination="2" data-num-pages="numPages()" data-current-page="currentPage" data-max-size="maxSize" data-boundary-links="true"></div>
                    </div>

                    <main mv-app="table" mv-storage="local" mv-mode="edit">
                            <table>
                            <tr>
                            <th id="date">Date</th>
                            <th id="name">Name</th>
                            <th id="itemnumber">Item #</th>
                            <th id="quantity">Quantity</th>
                            <th id="product">Product</th>
                            <th id="distributionTO">To </th>
                            <th id="product">From </th>
                            </tr>
                            <tr  className="tablehover" property="row" mv-multiple>
                                    <td property="date">2/02/2020</td>
                            <td property="name">B. Rice</td>
                            <td property="itemnumber">#94182</td>
                            <td property="quantity">300</td>
                            <td property="product">Grain</td>
                            <td property="distributionTO">Soup Kitchens</td>
                            <td property="distributionFROM">MCFB</td>
                           
                                </tr>
                            <tr className="tablehover" property="row2" mv-multiple>
                                    <td property="date">2/04/2020</td>
                            <td property="name">C. Beans</td>
                            <td property="itemnumber">#19238</td>
                            <td property="quantity">500</td>
                            <td property="product">Vegetables</td>
                            <td property="distributionTO">MCFB</td>
                            <td property="distributionFROM">F. America</td>
                                </tr>
                            <tr className="tablehover" property="row3" mv-multiple>
                                    <td property="date">2/14/2020</td>
                            <td property="name">Chicken</td>
                            <td property="itemnumber">#50942</td>
                            <td property="quantity">200</td>
                            <td property="product">Meat</td>
                            <td property="distributionTO">Soup Kitchens</td>
                            <td property="distributionFROM">MCFB</td>
                        
                                </tr>
                            <tr className="tablehover" property="row4" mv-multiple>
                                    <td property="date">3/03/2020</td>
                            <td property="name">Bananas</td>
                            <td property="itemnumber">#20947</td>
                            <td property="quantity">400</td>
                            <td property="product">Fruits</td>
                            <td property="distributionTO">Food Pantries</td>
                            <td property="distributionFROM">MCFB</td>
                                </tr>
                            <tr className="tablehover" property="row5" mv-multiple>
                                    <td property="date">3/19/2020</td>
                            <td property="name">Carrots</td>
                            <td property="itemnumber">#35873</td>
                            <td property="quantity">700</td>
                            <td property="product">Vegetables</td>
                            <td property="distributionTO">MCFB</td>
                            <td property="distributionFROM">F. America</td>
                                </tr>
                            <tr className="tablehover" property="row6" mv-multiple>
                                <td property="date">3/22/2020</td>
                            <td property="name">C. Tuna</td>
                            <td property="itemnumber">#09271</td>
                            <td property="quantity">300</td>
                            <td property="product">Fish</td>
                            <td property="distributionTO">Food Pantries</td>
                            <td property="distributionFROM">MCFB</td>
                                </tr>
                                <tr className="tablehover" property="row7" mv-multiple>
                                    <td property="date">3/24/2020</td>
                            <td property="name">F. Hamburger</td>
                            <td property="itemnumber">#29875</td>
                            <td property="quantity">100</td>
                            <td property="product">Meat</td>
                            <td property="distributionTO">MCFB</td>
                            <td property="distributionFROM">F. America</td>
                                </tr>
                                <tr className="tablehover" property="row8" mv-multiple>
                                    <td property="date">3/31/2020</td>
                            <td property="name">Canned Fruits</td>
                            <td property="itemnumber">#62274</td>
                            <td property="quantity">250</td>
                            <td property="product">Fruits</td>
                            <td property="distributionTO">E. Shelters</td>
                            <td property="distributionFROM">MCFB</td>
                                </tr>
                                <tr className="tablehover" property="row9" mv-multiple>
                                    <td property="date">4/13/2020</td>
                            <td property="name">Carrots</td>
                            <td property="itemnumber">#43987</td>
                            <td property="quantity">400</td>
                            <td property="product">Vegetables</td>
                            <td property="distributionTO">Soup Kitchens</td>
                            <td property="distributionFROM">MCFB</td>
                                </tr>
                                <tr className="tablehover" property="row10" mv-multiple>
                                    <td property="date">3/31/2020</td>
                            <td property="name">Pasta</td>
                            <td property="itemnumber">#18927</td>
                            <td property="quantity">150</td>
                            <td property="product">Wheat</td>
                            <td property="distributionTO">E. Shelters</td>
                            <td property="distributionFROM">MCFB</td>
                                </tr>
                                <tr className="tablehover" property="row11" mv-multiple>
                                    <td property="date">4/05/2020</td>
                            <td property="name">C. Pineapples</td>
                            <td property="itemnumber">#97823</td>
                            <td property="quantity">300</td>
                            <td property="product">Fruits</td>
                            <td property="distributionTO">MCFB</td>
                            <td property="distributionFROM">USDA</td>
                                </tr>
                                <tr className="tablehover" property="row12" mv-multiple>
                                    <td property="date">4/13/2020</td>
                            <td property="name">C. Green Beans</td>
                            <td property="itemnumber">#54387</td>
                            <td property="quantity">600</td>
                            <td property="product">Vegetables</td>
                            <td property="distributionTO">Soup Kitchens</td>
                            <td property="distributionFROM">MCFB</td>
                                </tr>
                                <tr className="tablehover" property="row13" mv-multiple>
                                    <td property="date">4/23/2020</td>
                            <td property="name">Strawberries</td>
                            <td property="itemnumber">#38572</td>
                            <td property="quantity">500</td>
                            <td property="product">Fruits</td>
                            <td property="distributionTO">MCFB</td>
                            <td property="distributionFROM">USDA</td>
                                </tr>
                            </table>
                            
                        
                        <div className="bar">
                            <button className="add-row">Add Row</button>
                            <div className="saved">Your changes have been saved to local storage</div>
                            <div className="mv-bar mv-ui">
                            <button className="mv-save">Save</button>
                            <button className="mv-export mv-button">Export</button>
                            </div>
                        </div>
                        </main>



                        


                </div>
            </div>

            <a className="inspiration " href="https://github.com/PhinesTech" target="_blank" rel="noopener noreferrer">
                 PhinesTech{' '}
            </a>
            </section>

    );
};

export default Storage;