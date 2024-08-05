import { LightningElement, api } from "lwc";
import { isMobile, CONSTANTS } from "c/utils";

const NEIGHBOR_PAGES_TO_DISPLAY = {
  MOBILE: 0,
  OTHER: 2
};

export default class ExtendedPagination extends LightningElement {
  @api totalPages;

  @api set currentPage(value) {
    this._currentPage = Number(value);
  }

  get currentPage() {
    return this._currentPage;
  }

  _currentPage = 1;

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
    return this._currentPage < this.totalPages && this.pagesNumbers.length >= 1;
  }

  /**
   * Generates an array of page numbers to display in a pagination component.
   * The number of neighbor pages displayed around the current page varies based on the device type (mobile or desktop).
   * Handles cases with fewer pages than the total number of pages and includes truncation indicators ("...") if necessary.
   * @returns {Array}
   */
  get pagesNumbers() {
    const neighborPagesToDisplay = isMobile() ? NEIGHBOR_PAGES_TO_DISPLAY.MOBILE : NEIGHBOR_PAGES_TO_DISPLAY.OTHER;

    if (this.totalPages <= neighborPagesToDisplay * 2 + 1) {
      return Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }

    const pages = [];

    // Page 1 to be visible.
    pages.push(1);

    // Add truncation if the current page is "far" from the first page.
    if (this._currentPage - 1 > neighborPagesToDisplay + 1) {
      pages.push(CONSTANTS.TRUNCATION_SIGN);
    }

    for (let i = Math.max(2, this._currentPage - neighborPagesToDisplay); i < this._currentPage; i++) {
      pages.push(i);
    }

    if (!pages.includes(this._currentPage)) {
      pages.push(this._currentPage);
    }

    for (let i = this._currentPage + 1; i <= Math.min(this.totalPages - 1, this._currentPage + neighborPagesToDisplay); i++) {
      pages.push(i);
    }

    // Add truncation if the current page is "far" from the last page.
    if (this._currentPage + 1 < this.totalPages - neighborPagesToDisplay) {
      pages.push(CONSTANTS.TRUNCATION_SIGN);
    }
    // Last page to be visible.
    if (this.totalPages > 1 && this._currentPage !== this.totalPages) {
      pages.push(this.totalPages);
    }

    return pages;
  }

  /**
   * Handler to navigate to a specific page.
   * @param {*} event
   */
  goToPage(event) {
    const targetPageNumber = event.target.dataset.pageNumber;
    if (targetPageNumber !== CONSTANTS.TRUNCATION_SIGN && Number(targetPageNumber) !== this._currentPage) {
      this._currentPage = Number(targetPageNumber);
      this.dispatchPageNumberChanged(Number(targetPageNumber));
    }
  }

  /**
   * Handler to navigate to the previous page
   */
  goToPrevious() {
    const targetPageNumber = Number(this._currentPage) - 1;
    this._currentPage = targetPageNumber;

    this.dispatchPageNumberChanged(targetPageNumber);
  }

  /**
   * Handler to navigate to the next page
   */
  goToNext() {
    const targetPageNumber = Number(this._currentPage) + 1;
    this._currentPage = targetPageNumber;

    this.dispatchPageNumberChanged(targetPageNumber);
  }

  /**
   * Dispatch a custom event each time a page number is clicked.
   * @param {*} pageNumber
   */
  dispatchPageNumberChanged(pageNumber) {
    this._currentPage = pageNumber;
    this.dispatchEvent(new CustomEvent("pagenumberchanged", { detail: pageNumber }));
  }
}