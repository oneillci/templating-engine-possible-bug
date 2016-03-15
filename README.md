# templating-engine-possible-bug

Possibe bug repro for the aurelia templating engine.
This repro was cloned from the aurelia typescript skeleton, so to get up and running requires the following commands
```npm install```
```jspm install -y```
```gulp build```
```gulp watch```

Browse to http://localhost:9000 in Chrome and then IE.

# Project Notes
##Running this project within IE11 causes an 'out of stack space' error. It works as intended in Chrome & FF.

##grid-view-ts
This is using a Kendo UI grid control and using the Templating Engine enhance method to enable 2-way binding between source data and a kendo cell template.

## click-to-edit.ts
The ```<click-to-edit>``` component doesn't attach it's replaceable child control until the outer is clicked on. It's intended usage is for within large datagrids so that lots of unused controls are not required to be databound.

## app.html
Notice the ```<click-to-edit>``` component. Once the display value is clicked on, the input field is inserted in the DOM.

## app.ts
This has properties for the columns and data of the ```<grid-view>``` to bind to.
Both the name & age template have the a class of ```.enhance-grid-item``` and this is picked up in grid-view.ts to enhance with the templating engine.
In ```getAgeTemplate()```, the ```<click-to-edit>``` control is used and this causes the stack space error in IE11. If the ```<click-to-edit>``` is replaced with a ```<div>``` as in the following snippet, it works fine.
```getAgeTemplate() {
      const template = `
<span class='enhance-grid-item' data-id='#=data.id#'>
  <div>
    <input type='text' value.bind='age' />
  </div>
</span>
`;
        return kendo.template(template);
    }```

