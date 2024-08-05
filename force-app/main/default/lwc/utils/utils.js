export function isMobile() {
  return window.innerWidth < 768;
}

export const CONSTANTS = {
  TRUNCATION_SIGN: "...",
  COMPACT_PAGE_NUMBER_ONLY: "PAGE_NUMBER_ONLY",
  COMPACT_PAGE_OUT_OF_TOTAL: "PAGE_OUT_OF_TOTAL",
  COMPACT_PAGINATION: "COMPACT_PAGINATION",
  EXTENDED_PAGINATION: "EXTENDED_PAGINATION",
  PROGRESSIVE_REVEAL_PAGINATION: "PROGRESSIVE_REVEAL_PAGINATION",
  MAX_POSSIBLE_PAGES_TO_DISPLAY: 5
};

/**
 * Dispatch a custom event each time a page number is clicked.
 * @param {*} context
 * @param {*} pageNumber
 */
export function dispatchPageNumberChanged(context, pageNumber) {
  context.dispatchEvent(new CustomEvent("pagenumberchanged", { detail: pageNumber, bubbles: true, composed: true }));
}