This project read data from file and print in console and can also format the data

#Making Node commands Global:

For making node command global first type ||#!/usr/bin/env node|| on main file
 then:
write npm init -y on bash, then a package.json file will be made 
,then edit this file and add bin as:
  "bin": {
    "global name for main script" :"main script file"  
  }
ie. 
  "bin": {
    "zenbot" :"main.js"  
  }
now type npm link on console 
and done.

Now it will work everywhere on machine ie- zen is equal to node main.js