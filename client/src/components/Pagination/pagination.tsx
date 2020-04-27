import React, { Component, Fragment } from 'react';

import { PaginationProps } from './pagination.types';

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

const range = (from: number, to: number, step = 1) => {
    let i = from;
    const range = [];

    while (i <= to) {
        range.push(i);
        i += step;
    }

    return range;
};

class Pagination extends Component<PaginationProps> {
    state = {
        pageLimit: 30,
        totalRecords: 0,
        pageNeighbours: 0,
        totalPages: 1,
        currentPage: 1,
    };

    constructor(props: Readonly<PaginationProps>) {
        super(props);
        const { totalRecords = null, pageLimit = 30, pageNeighbours = 0 } = props;

        this.state.pageLimit = typeof pageLimit === 'number' ? pageLimit : 30;
        this.state.totalRecords = typeof totalRecords === 'number' ? totalRecords : 0;

        this.state.pageNeighbours = typeof pageNeighbours === 'number' ? Math.max(0, Math.min(pageNeighbours, 2)) : 0;

        this.state.totalPages = Math.ceil(this.state.totalRecords / this.state.pageLimit);
    }

    componentDidMount() {
        this.gotoPage(1);
    }

    gotoPage = (page: number) => {
        const { onPageChanged = (f: Function) => f } = this.props;
        const { totalPages, pageLimit, totalRecords } = this.state;

        const currentPage = Math.max(0, Math.min(page, totalPages));

        const paginationData = {
            currentPage,
            totalPages: totalPages,
            pageLimit: pageLimit,
            totalRecords: totalRecords,
        };

        this.setState({ currentPage }, () => onPageChanged(paginationData));
    };

    handleClick = (page: number, evt: { preventDefault: () => void }) => {
        evt.preventDefault();
        this.gotoPage(page);
    };

    handleMoveLeft = (evt: { preventDefault: () => void }) => {
        evt.preventDefault();
        this.gotoPage(this.state.currentPage - this.props.pageNeighbours * 2 - 1);
    };

    handleMoveRight = (evt: { preventDefault: () => void }) => {
        evt.preventDefault();
        this.gotoPage(this.state.currentPage + this.props.pageNeighbours * 2 + 1);
    };

    fetchPageNumbers = () => {
        const totalPages = this.state.totalPages;
        const currentPage = this.state.currentPage;
        const pageNeighbours = this.props.pageNeighbours;

        const totalNumbers = pageNeighbours * 2 + 3;
        const totalBlocks = totalNumbers + 2;

        if (totalPages > totalBlocks) {
            let pages = [];

            const leftBound = currentPage - pageNeighbours;
            const rightBound = currentPage + pageNeighbours;
            const beforeLastPage = totalPages - 1;

            const startPage = leftBound > 2 ? leftBound : 2;
            const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;

            pages = range(startPage, endPage);

            const pagesCount = pages.length;
            const singleSpillOffset = totalNumbers - pagesCount - 1;

            const leftSpill = startPage > 2;
            const rightSpill = endPage < beforeLastPage;

            const leftSpillPage = LEFT_PAGE;
            const rightSpillPage = RIGHT_PAGE;

            if (leftSpill && !rightSpill) {
                const extraPages = range(startPage - singleSpillOffset, startPage - 1);
                pages = [leftSpillPage, ...extraPages, ...pages];
            } else if (!leftSpill && rightSpill) {
                const extraPages = range(endPage + 1, endPage + singleSpillOffset);
                pages = [...pages, ...extraPages, rightSpillPage];
            } else if (leftSpill && rightSpill) {
                pages = [leftSpillPage, ...pages, rightSpillPage];
            }

            return [1, ...pages, totalPages];
        }

        return range(1, totalPages);
    };

    render() {
        if (!this.props.totalRecords) return null;

        if (this.state.totalPages === 1) return null;

        const { currentPage } = this.state;
        const pages = this.fetchPageNumbers();

        return (
            <Fragment>
                <nav aria-label="Countries Pagination">
                    <ul className="pagination">
                        {pages.map((page, index) => {
                            if (page === LEFT_PAGE)
                                return (
                                    <li key={index} className="page-item">
                                        <a
                                            className="page-link"
                                            href="#"
                                            aria-label="Previous"
                                            onClick={this.handleMoveLeft}
                                        >
                                            <span aria-hidden="true">&laquo;</span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                    </li>
                                );

                            if (page === RIGHT_PAGE)
                                return (
                                    <li key={index} className="page-item">
                                        <a
                                            className="page-link"
                                            href="#"
                                            aria-label="Next"
                                            onClick={this.handleMoveRight}
                                        >
                                            <span aria-hidden="true">&raquo;</span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </li>
                                );

                            return (
                                <li key={index} className={`page-item${currentPage === page ? ' active' : ''}`}>
                                    <a className="page-link" href="#" onClick={e => this.handleClick(Number(page), e)}>
                                        {page}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </Fragment>
        );
    }
}

export default Pagination;
