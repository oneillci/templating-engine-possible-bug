import {bindable, inlineView, inject, TemplatingEngine} from "aurelia-framework";

@inlineView(`
<template>
  <div ref="gridElement"></div>
</template>
`)
@inject(TemplatingEngine)
export class GridView {
  @bindable columns;
  @bindable source;
  gridElement;
  $grid;
  
  constructor(private templatingEngine: TemplatingEngine){
    this.templatingEngine = templatingEngine;
  }
  
  attached() {
      this.renderGrid();
      this.setDataSource();
      this.bindEnhanceGridItems();
  }
  
  renderGrid() {
      this.$grid = (<any>$(this.gridElement)).kendoGrid({ columns: this.columns }).data("kendoGrid");
  }
  
  setDataSource() {
    this.$grid.dataSource.data(this.source);
  }
  
  bindEnhanceGridItems() {
      // 1. Finds any items in the grid marked with .enhance-grid-item
      // 2. Looks for an id in a data-id attribute
      // 3. Finds that item by id in this.source
      // 4. Uses the templating engine enhance to 'aurelia-ise' that part of the grid
      var self = this;
      var items = (<any>$(this.gridElement)).find(".enhance-grid-item:not([au-target])");

      if (items.length) {
          items.each((index, element) => {
              const id = (<any>$(element)).attr("data-id");
              if (id) {
                  //const item = sourceById.get(id);
                  const item = self.source.filter(x => x.id === id)[0];
                  if (item) {
                      const view = this.templatingEngine.enhance({ element: element, bindingContext: item });
                      view.attached();
                  }
              }
          });
      }
  }
}