# ExpressJS [link](https://expressjs.com/)
___

1. Minimal and flexible Node.js web application framework
2. Support of lot of HTTP utility methods and middlewares

## My fisr Express web App
```PowerShell
# create a new folder
PS C:\AKA\03_Projects\software-armoury-kb> md my_express_app
PS C:\AKA\03_Projects\software-armoury-kb> cd .\my_express_app\
# Initialize with npm
PS C:\AKA\03_Projects\software-armoury-kb\my_express_app> npm init

This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (my_express_app)
version: (1.0.0)
description: Arun first express app
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to C:\AKA\03_Projects\software-armoury-kb\my_express_app\package.json:
...

# Install Express
PS C:\AKA\03_Projects\software-armoury-kb\my_express_app> npm install express --save
```

Create an __app.js__ with following content
```javascript 
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res) => res.send("Arun's first Express JS application"))
app.listen(port, () => console.log(`App listening on port ${port}`))

```

Run the application
```PowerShell
PS C:\AKA\03_Projects\software-armoury-kb\my_express_app>  node app.js
App listening on port 3000

```

## Add Swagger documentation to the app

Implementation is based on [link](http://www.acuriousanimal.com/2018/10/20/express-swagger-doc.html)

```Powershell
# install the swagger-ui-express
PS C:\AKA\03_Projects\software-armoury-kb\my_express_app> npm install swagger-ui-express --save
# install the swagger-jsdoc
PS C:\AKA\03_Projects\software-armoury-kb\my_express_app> npm install swagger-jsdoc --save
```

## Push the repo to GitHub

1. Initailize a local git repository `git init` and commit the code.
2. Create a Github repository and push the code to new repo using below code

```Powershell
PS C:\AKA\03_Projects\software-armoury-kb\my_express_app> git remote add origin https://github.com/arunkumaranand/sample-express-app.git
PS C:\AKA\03_Projects\software-armoury-kb\my_express_app> git push -u origin master
```

