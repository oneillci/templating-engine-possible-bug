import {bindable} from "aurelia-framework";

export class ClickToEdit {
  @bindable displayValue = "";
  isEditing = false;
  hasDisplayed = false;
  
  toggleEditing = () => {
    this.isEditing = !this.isEditing;
    this.hasDisplayed = true;
  }
}