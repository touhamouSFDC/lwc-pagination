## Overview

Client-side pagination plays a crucial role in enhancing the user experience and performance of web applications, and here we offer reusable pagination components each with a distinct style to suit different use cases. It enhances user experience by providing intuitive navigation for large datasets, featuring previous/next controls, numeric page indicators, and page size configuration. Built using LWC, it ensures optimal performance and usability across devices.

### Context

- Build a reusable pagination component that accepts the page numbers as input, display them in different variation, and allow for a navigation.
- The display can have different variations: Extended view, compact view, allow navigation buttons (next & previous), allow navigating to the first or last page, etc.
- Each time a page or a navigation button is clicked, a custom event **pagenumberchanged** containing the page number is dispatched. The parent component can handle this by displaying the right data of the specified page.

![Alt text](/assets/componentDiagramFlow.png)

## Components

### Lightning Web Component

- **paginationMaster** : Custom Lightning Web Component, this LWC contains sections to render the desired pagination variation based on input variables passed to this component.
- **compactPagination** : Custom Lightning Web Component, represent a pagination with chevrons to navigate to the next or previous pages, it has three ways on how to show the page number:
    - First Variation : Show page number between the chevrons.
    - Second Variation : Show page number out of the total pages between the chevrons.
    - Third Variation : No page number is shown between the chevrons.
- **extendedPagination** : Lightning Web Component, 
- **progressiveRevealPagination** : Lightning Web Component, 

Available public Properties are described in the table below

![Alt text](/assets/propertiesTable.png)

## Demo

### Compact Pagination

#### Compact pagination with no page number

![Alt text](/assets/compactPagination.gif)

#### Compact pagination with page number

![Alt text](/assets/compactPaginationWithPageNumber.gif)

#### Compact pagination with page number of total pages

![Alt text](/assets/compactPaginationWithPagNumberOfTotalPages.gif)

### Extended Pagination

![Alt text](/assets/extendedPagination.gif)

### Progressive Reveal Pagination

![Alt text](/assets/progressivePagination.gif)

## Getting Started

1. Clone the repository:

   ```bash
   https://github.com/touhamouSFDC/lwc-pagination.git

## License

This project is licensed under the MIT License.

```MIT License

Copyright (c) 2024 Tarik OUHAMOU & Zakaria SEMRI

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.