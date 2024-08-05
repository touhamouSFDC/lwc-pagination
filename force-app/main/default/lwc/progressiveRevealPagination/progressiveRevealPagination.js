import { LightningElement, api } from "lwc";
import { CONSTANTS, dispatchPageNumberChanged } from "c/utils";

export default class ProgressiveRevealPagination extends LightningElement {
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
    let start, end;

    // If the current page is less or equal than the visible pages middle, the start page must be fixed 1
    if (this.currentPage <= this.visiblePagesMiddle) {
      start = 1;
    }
    // If the current page is greater than the total pages minus the visible pages middle, the start must fixed at the total pages minus the maximum visible pages
    else if (this.currentPage > this.totalPages - this.visiblePagesMiddle) {
      start = this.totalPages - this.maximumVisiblePages + 1;
    }
    // If none of those two cases are verified, the start is dynamically set based on the current page and the visible pages middle
    else {
      start = this.currentPage - this.visiblePagesMiddle + 1;
    }

    end = start + this.maximumVisiblePages - 1;

    const pagesNumbers = [];
    for (let i = start; i <= end; i++) {
      pagesNumbers.push(i);
    }
    return pagesNumbers;
  }

  /**
   * Getter of the number of maximum visible pages based on the total pages and maximum possible pages to display
   **/
  get maximumVisiblePages() {
    return this.totalPages < CONSTANTS.MAX_POSSIBLE_PAGES_TO_DISPLAY ? this.totalPages : CONSTANTS.MAX_POSSIBLE_PAGES_TO_DISPLAY;
  }

  /**
   * Getter of the middle of the visible pages
   **/
  get visiblePagesMiddle() {
    return Math.ceil(CONSTANTS.MAX_POSSIBLE_PAGES_TO_DISPLAY / 2);
  }

  /**
   * Checks if the first page can be visible via a shortcut
   **/
  get showFirst() {
    return this.currentPage !== 1 && !this.pagesNumbers.includes(1);
  }

  /**
   * Checks if the last page can be visible via a shortcut
   **/
  get showLast() {
    return this.currentPage !== this.totalPages && this.pagesNumbers.length >= 1 && !this.pagesNumbers.includes(this.totalPages);
  }

  /**
   * Handler to navigate to a specific page.
   * @param {*} event
   */
  goToPage(event) {
    const targetPageNumber = event.target.dataset.pageNumber;
    if (targetPageNumber !== CONSTANTS.TRUNCATION_SIGN) {
      this._currentPage = Number(targetPageNumber);

      dispatchPageNumberChanged(this, Number(targetPageNumber));
    }
  }

  /**
   * Handler to navigate to the previous page
   */
  goToPrevious() {
    const targetPageNumber = Number(this._currentPage) - 1;
    this._currentPage = targetPageNumber;

    dispatchPageNumberChanged(this, targetPageNumber);
  }

  /**
   * Handler to navigate to the next page
   */
  goToNext() {
    const targetPageNumber = Number(this._currentPage) + 1;
    this._currentPage = targetPageNumber;

    dispatchPageNumberChanged(this, targetPageNumber);
  }

  goToFirst() {
    this._currentPage = 1;
    dispatchPageNumberChanged(this, 1);
  }

  goToLast() {
    this._currentPage = this.totalPages;
    dispatchPageNumberChanged(this, this.totalPages);
  }
}