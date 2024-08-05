## Overview

Client-side pagination plays a crucial role in enhancing the user experience and performance of web applications, and here we offer reusable pagination components each with a distinct style to suit different use cases. It enhances user experience by providing intuitive navigation for large datasets, featuring previous/next controls, numeric page indicators, and page size configuration. Built using LWC, it ensures optimal performance and usability across devices.

This solution offers 3 types of pagination
- Compact Pagination (with 3 variants: no numbers, with current page number & with current page of total)
- Extended Pagination
- Progressive Reveal Pagination

## Demo

### Compact Pagination

##### Compact pagination with no page number

![compact-no-numbers](https://github.com/user-attachments/assets/d067b3ce-4c23-49f6-8e3a-32b90639fae7)

##### Compact pagination with page number

![compact-with-page-number](https://github.com/user-attachments/assets/a5aeb977-ebe3-40b7-ac13-ccf5f5592d5a)

##### Compact pagination with page number of total pages

![compact-with-total](https://github.com/user-attachments/assets/d3159f13-68de-4077-b84b-a2e91f714053)

### Extended Pagination

![extended-pagination](https://github.com/user-attachments/assets/5277d552-c336-4f69-88a6-5e094c71a667)

### Progressive Reveal Pagination

![progressive-reveal-1](https://github.com/user-attachments/assets/354860cc-3750-4454-bb2f-69ed8b2f160e)

### Context

- Build a reusable pagination component that accepts the page numbers as input, display them in different variation, and allow for a navigation.
- The display can have different variations: Extended view, compact view, allow navigation buttons (next & previous), allow navigating to the first or last page, etc.
- Each time a page or a navigation button is clicked, a custom event **pagenumberchanged** containing the page number is dispatched. The parent component can handle this by displaying the right data of the specified page.

![Alt text](/assets/componentDiagramFlow.png)

## Core Components

### Lightning Web Component

- **paginationMaster** : Custom Lightning Web Component, this LWC contains sections to render the desired pagination variation based on input variables passed to this component.
    - **compactPagination** : Custom Lightning Web Component, represent a pagination with chevrons to navigate to the next or previous pages, it has three ways on how to show the page number:
        - First Variation : Show page number between the chevrons.
        - Second Variation : Show page number out of the total pages between the chevrons.
        - Third Variation : No page number is shown between the chevrons.
     - **extendedPagination** : Custom Lightning Web Component, presents an extended pagination view.
     - **progressiveRevealPagination** : Custom Lightning Web Component, presents a progressive pagination view.

Available public Properties are described in the table below

![Alt text](/assets/propertiesTable.png)

## Example

- contacts (LWC) is an example of usage of the pagination component. The idea is to simulate displaying a large number of contacts, and handle all the navigation interactions with the pagination solution.
- In this example, we're mocking the server-side call to get the relevant page data.
- The pagination master component is used as child, where we pass all the indicators needed as well as handle the page number changes.

## Getting Started

1. Clone the repository:

   ```bash
   https://github.com/touhamouSFDC/lwc-pagination.git

2. Deploy metadata using sf command:

   ```bash
   sf project deploy start -x ./manifest/package.xml

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
