import { LightningElement, api } from "lwc";
import { dispatchPageNumberChanged, CONSTANTS } from "c/utils";

export default class CompactPagination extends LightningElement {

    @api totalPages;

    @api set currentPage(value) {
        this._currentPage = Number(value);
    }

    @api set pageNumberFormat(value) {
        this._pageNumberFormat = value;
    }
    
    /**
     * Determines which format the page number will be based on the value of page format passed in the input variable
     * @returns {*} return the correct format based on the format, either empty, current page number or `{current page OF total page}`
     */
    get pageNumberFormat() {
        let numberFormat;
        switch(this._pageNumberFormat) {
            case CONSTANTS.COMPACT_PAGE_NUMBER_ONLY:
                numberFormat = this._currentPage;
                break;
            case CONSTANTS.COMPACT_PAGE_OUT_OF_TOTAL:
                numberFormat = `${this._currentPage} OF ${this.totalPages}`;
                break;
            default:
                numberFormat = '';
        }

        return numberFormat;
    }

    get currentPage() {
        return this._currentPage;
    }

    _currentPage = 1;
    _pageNumberFormat;

    /**
     * Determines whether pagination should be displayed based on the total number of pages.
     * Pagination is shown if there are more than one page available.
     * @returns {boolean} `true` if there are more than one page; otherwise, `false`.
     */
    get showPagination() {
        return this.totalPages > 1;
    }

    /**
     * Checks if there is a previous page available for navigation.
     * A previous page is available if the current page is not the first page.
     * @returns {boolean} `true` if the current page is not the first page; otherwise, `false`.
     */
    get hasPrevious() {
        return this._currentPage !== 1;
    }

    /**
     * Checks if there is a next page available for navigation.
     * A next page is available if the current page is not the last page and there are page numbers to display.
     * @returns {boolean} `true` if the current page is not the last page and there are page numbers available; otherwise, `false`.
     */
    get hasNext() {
        return this._currentPage !== this.totalPages;
    }

    /**
     * Handler to navigate to the previous page.
     * Dispatch a custom event each time we navigate to a new page number.
     */
    goToPrevious() {
        if (this._currentPage > 1) {
            this._currentPage -= 1;
            dispatchPageNumberChanged(this, this._currentPage);
        }
    }

    /**
     * Handler to navigate to the next page, and dispatch a custom event.
     * Dispatch a custom event each time we navigate to a new page number.
     */
    goToNext() {
        if (this._currentPage < this.totalPages) {
            this._currentPage += 1;
            dispatchPageNumberChanged(this, this._currentPage);
        }
    }
}