import { LightningElement, api } from 'lwc';

export default class PaginationMaster extends LightningElement {


    @api isCompact;
    @api isExtended;
    @api isProgressive;

    @api totalPages;
    @api currentPage;

    @api compactPageNumberFormat;
}