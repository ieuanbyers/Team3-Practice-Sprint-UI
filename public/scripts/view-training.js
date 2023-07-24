let options = {
        searchable: true, 
        sortable: true, 
        classes: {
            active: "active",
            disabled: "disabled",
            selector: "form-select",
            paginationList: "pagination",
            paginationListItem: "page-item",
            paginationListItemLink: "page-link",
            input: "form-control"
        }
    };
const dataTable = new simpleDatatables.DataTable("#training-table", options)