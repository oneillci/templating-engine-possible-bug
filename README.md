# templating-engine-possible-bug

Possibe bug repro for the aurelia templating engine.
This repro was cloned from the aurelia typescript skeletonso to get up and running requires the following commands
```npm install```
```jspm install -y```
```gulp build```
```gulp watch```

Browse to http://localhost:9000 in Chrome and then IE.

# Project Notes
This is using a Kendo UI grid control and using the Templating Engine enhance method to enable 2-way binding between source data and a kendo cell template.
There is also a ```<click-to-edit>``` component that doesn't attach it's replaceable child control until the outer is clicked on. It's intended usage is for within large datagrids so that lots of unused controls are not required to be databound.

The bug occurs in IE because in app.ts, the age column uses the click-to-edit template 
