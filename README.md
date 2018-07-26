# bus-station

To test thist application, you have two options.

*1: Pass two environment variables on your terminal, like so:
```bash
  numberGroups=2 numberPeople=1,2,1,1,1,2,1,3 node app.js
```

Note: if you're on Windows, you have to set the variables before, like so:
```bash
  set numberGroups=2
  set numberPeople=1,2,1,1,1,2,1,3
  node app.js
```

*2 Change the variables values on the code on line 36 and 37.
```javascript
    let mutableVariableNumbers = '1,2,1,1,1,2,1,3';
    let mutableVariableGroup = 8;
```
