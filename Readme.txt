1.Tests are automated using protractor Framework
2.To use this framework nodejs should be installed in system
3. Project folder structure consists of following
- conf.js:Configuration file which tells protractor where the spec files are ,selenium server address etc.
-spec.js: Test scenarios are present in this file
-PageObjects.js: Consists of Page objects.
-screenshots folder consists of screenshots and html report(my-reprt.html).
-Folder node_modules is protractor-jasmine2-screenshot-reporter  npm package(It can be istalled using command npm i protractor-jasmine2-screenshot-reporter)
4.To Run use the command "protractor conf.js" in command line tool.