import {Router, RouterConfiguration} from 'aurelia-router'

declare var kendo: any;
export class App {
    message = "Hello Aurelia";
    
    columns = [
        {field: "name", title: "Name", template: this.getNameTemplate()},
        {field: "age", title: "Age", template: this.getAgeTemplate()},
        {field: "active", title: "Is Active"}
    ];

    data = [
        {id: "1", name: "Ciaran", age: 36, active: true},
        {id: "2", name: "Stevie", age: 46, active: false},
    ];
 
    getAgeTemplate() {
        const template = `
<span class='enhance-grid-item' data-id='#=data.id#'>
    <click-to-edit display-value='click to edit'>
        <template replace-part='content-template'>
            <input type='text' value.bind='age' />
        </template>
    </click-to-edit>
</span>
`;
        return kendo.template(template);
    }
  
    getNameTemplate() {
        const template = `
<span class='enhance-grid-item' data-id='#=data.id#'>
    <input type='text' value.bind='name' />
</span>
`;
        return kendo.template(template);
    }
}
