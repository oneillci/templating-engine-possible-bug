import {inject, TemplatingEngine} from 'aurelia-framework'

declare var kendo: any;
declare var jQuery: any;

@inject(Element, TemplatingEngine)
export class App {
    message = "Hello Aurelia";
    
    data = [
        {id: "1", name: "Ciaran", age: 36, active: true},
        {id: "2", name: "Stevie", age: 46, active: false},
    ];
    
    constructor(private element: Element, private templatingEngine: TemplatingEngine){
    }
    
    attached(){
        // 1. Finds any items with the .enhance class
        // 2. Looks for an id in a data-id attribute
        // 3. Finds that item by id in this.data
        // 4. Uses the templating engine enhance to 'aurelia-ise' the element
        var self = this;
        var items = (<any>jQuery(this.element)).find(".enhance:not([au-target])");

        if (items.length) {
            items.each((index, element) => {
                const id = (<any>$(element)).attr("data-id");
                if (id) {
                    const item = self.data.filter(x => x.id === id)[0];
                    if (item) {
                        const view = this.templatingEngine.enhance({ element: element, bindingContext: item });
                        view.attached();
                    }
                }
            });
        }
    }
    
    getTemplate(id){
        return `
<div class='enhance' data-id='${id}'>
   <input type='text' value.bind='name' />
</div>`;
    }
    
    getClickToEditTemplate(id){
        return `
<span class='enhance' data-id='${id}'>
    <click-to-edit display-value='click to edit'>
        <template replace-part='content-template'>
            <input type='text' value.bind='age' />
        </template>
    </click-to-edit>
</span>`;
    }
}
