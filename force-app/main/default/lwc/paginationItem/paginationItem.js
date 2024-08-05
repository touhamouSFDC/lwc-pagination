import { LightningElement, api } from "lwc";
import { CONSTANTS } from "c/utils";

export default class PaginationItem extends LightningElement {
  @api isPrevious;
  @api isNext;

  @api pageNumber;
  @api currentPageNumber;

  @api showNavigationButtonLabel;
  @api previousIcon;
  @api nextIcon;
  @api hideNavigationButtonBorder;

  /**
   * Calculates the CSS classes to apply based on whether the pagination item is a previous/next button, page indicator, or current page indicator.
   * @returns {string} CSS class(s) to apply.
   */
  get pageDynamicStyle() {
    let classes = "pagination-item";

    if(this.isNext || this.isPrevious) {
      classes += " navigation-item";
    }
    if(this.pageNumber === this.currentPageNumber) {
      classes += " selected-item";
    }
    if(this.hideNavigationButtonBorder) {
      classes += " no-border";
    }

    return classes;
  }

  /**
   * Determines if the content is a truncation sign.
   * @returns {boolean} `true` if the content is a truncation sign; otherwise, `false`.
   */
  get isTruncationSign() {
    return (
      this.pageNumber === CONSTANTS.TRUNCATION_SIGN &&
      !this.isNext &&
      !this.isPrevious
    );
  }

  /**
   * Determine if the page number is indeed a number. This is useful to identify cases where the item is not a navigation button or a truncation sign.
   * @returns {boolean} `true` if the page number is a number; otherwise, `false`.
   */
  get isPageNumber() {
    return !this.isTruncationSign;
  }
}