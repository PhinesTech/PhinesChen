import React, { Component } from 'react';

import './storage.scss';
import { StorageProps } from './storage.types';

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

class Storage extends Component<StorageProps> {
    constructor(props: any) {
        super(props);
        this.generateTable = this.generateTable.bind(this);
    }

    generateTable() {
        let table: Array<any> = [];

        this.props.storage.forEach((element: any) => {
            let {
                product_id,
                product_name,
                product_amount,
                product_group,
                distribution_to,
                distribution_from,
                pack_date,
            } = element;

            table.push(
                <tr className="tablehover" property="row" mv-multiple="true" key={product_id}>
                    <td property="date">{`${(new Date(pack_date)).getMonth()}/${(new Date(pack_date)).getDate()}/${(new Date(pack_date)).getFullYear()}`}</td>
                    <td property="name">{product_name}</td>
                    <td property="itemnumber">{product_id}</td>
                    <td property="quantity">{product_amount}</td>
                    <td property="product">{product_group}</td>
                    <td property="distributionTO">{distribution_to}</td>
                    <td property="distributionFROM">{distribution_from}</td>
                </tr>,
            );
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th id="date">Date</th>
                        <th id="name">Name</th>
                        <th id="itemnumber">Item #</th>
                        <th id="quantity">Quantity</th>
                        <th id="product">Product</th>
                        <th id="distributionTO">To </th>
                        <th id="product">From </th>
                    </tr>
                </thead>
                <tbody>{table}</tbody>
            </table>
        );
    }

    render() {
        return (
            <section className="STORAGE">
                <div className="center7">
                    <div className="right">
                        <div className="title">Food Storage</div>
                        <br />

                        <div className="container" data-ng-app="myApp" data-ng-controller="myCtrl">
                            <div className="row">
                                <div className="searchtitle">
                                    <h2>Search: &nbsp;</h2>
                                </div>
                                <div className="col-md-10">
                                    <input type="text" className="search" data-ng-model="table" />
                                </div>
                            </div>
                            <br />
                            <div
                                data-pagination="2"
                                data-num-pages="numPages()"
                                data-current-page="currentPage"
                                data-max-size="maxSize"
                                data-boundary-links="true"
                            ></div>
                        </div>
                        <main mv-app="table" mv-storage="local" mv-mode="edit">
                            {this.generateTable()}
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

                <a
                    className="inspiration "
                    href="https://github.com/PhinesTech"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    PhinesTech{' '}
                </a>
            </section>
        );
    }
}

export default Storage;
