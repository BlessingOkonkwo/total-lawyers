"use strict";

class Theme {
    constructor(toBindListener) {
        select(toBindListener).addEventListener("click", this.change.bind(this));
        this.htmlDatasets = select("html").dataset;

        // color schema has to be first created (_themes.scss) before it can be added to this.colorSchemas
        this.colorSchemas = ["one", "two"];
        this.idx = 0;

        // automatically sets first color theme from this.colorSchemas
        this.change();
    }

    change() {
        const theme = this.colorSchemas[this.idx % this.colorSchemas.length];
        this.htmlDatasets.theme = theme;
        this.idx++;
    }
}

//new Theme("html");

// DOM manipulation helper functions
function select(item) {
    return document.querySelector(item);
}

function selectAll(item) {
    return document.querySelectorAll(item);
}

function create(element) {
    return document.createElement(element);
}

function cl(item) {
    console.log(item);
}

function cd(item) {
    console.dir(item);
}
