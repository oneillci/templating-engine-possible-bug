# templating-engine-possible-bug

Possibe bug repro for the aurelia templating engine.
This repro was cloned from the aurelia typescript skeleton, so to get up and running requires the following commands
`npm install`
`jspm install -y`
`gulp build`
`gulp watch`

Browse to http://localhost:9000 in Chrome and then IE.

# Project Notes
##Running this project within IE11 causes an 'out of stack space' error. It works as intended in Chrome & FF.

## src/click-to-edit.ts
The `<click-to-edit>` component doesn't attach it's replaceable child control until the outer is clicked on. 
It's intended usage is for within large datagrids so that lots of unused controls are not required to be databound. 
This is declared as a globalResource in main.ts.

## src/app.html
Notice the `<click-to-edit>` component. Once the display value is clicked on, the input field is inserted in the DOM. 
This demonstrates that the `<click-to-edit>` works standalone.

Within the `repeat.for`, the innerHtml of two divs is bound to templates from the view-model - a simple template, 
and one that uses the `<click-to-edit>` component.

## src/app.ts
Has a data property for the `repeat.for` to bind to.

In `attached()`, it enhances the elements with the `.enhance` class.

In `getClickToEditTemplate()`, the `<click-to-edit>` control is used and this causes the stack space error in IE11. 
If the `<click-to-edit>` is not used, as in the `getTemplate()` method, it works fine.


