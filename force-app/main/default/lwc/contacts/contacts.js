import { LightningElement } from "lwc";
import { CONTACTS_SAMPLE_DATA } from "./data.js";

const ELEMENTS_BY_PAGE = 6;

export default class Contacts extends LightningElement {
  currentPage = 1;

  get totalPages() {
    return Math.ceil(CONTACTS_SAMPLE_DATA.length / ELEMENTS_BY_PAGE);
  }

  get contactsToDisplay() {
    const startIndex = this.currentPage - 1;
    return CONTACTS_SAMPLE_DATA.slice(
      startIndex,
      startIndex + ELEMENTS_BY_PAGE
    );
  }

  handlePageNumberChanged(event) {
    this.currentPage = event.detail;
  }
}