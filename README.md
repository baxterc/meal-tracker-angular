# NomNom!

#### A handy meal tracker, project for Epicodus, 8/12/2016

#### By Charlie Baxter

## Description
This is an SPA that uses Angular2 to let you enter meals so that you can track your calorie consumption.  It uses event emitters and listeners to dynamically show you a given day's meals on the page, or an all-time list.  In either case, you will see both an average and a total of the calories consumed for the time selected.  It also filters meal items by whether or not they're high-calorie (500 calories or above for now).  Each food item can also be editted if you make a mistake.

## Setup

* Clone this repository.
* Install Node.js by visiting https://nodejs.org/en/download/ and selecting the appropriate installer for your operating system.
* The Node Package manager will allow you to install this project's dependencies.  Use your terminal or shell and enter the command "npm install gulp -g"
* Next, run "npm install bower -g"
* Then run "gem install sass"
* Use your terminal to navigate to the location where you cloned the repository and run the command "npm install".
* Finally, run the command "bower install".  All of this project's dependencies should now be loaded.
* To build the site and set up a development server for you to view it on, run the command "gulp build" followed by "gulp serve".
* If your browser doesn't automatically load the site, go to http://localhost:3000
* When finished, type Ctrl-c in your console window.

## Technologies Used

* Typescript
* Javascript
* Angular2
* HTML
* CSS
* Node.js
* Bower

## Known Bugs
* Does not show the average calorie count when the file is first loaded
* Does not dynamically update average calorie count when editting.

## Features to add:
* Averages per day
* Find/use an API that might provide calorie counts so that the user can enter food items and get the calories that way.
* Excercise tracking. Let the user know if their calorie consumption exceeded their calorie use.

## Contact & Support
If you run into any issues with this page, have any questions, ideas, or concerns, feel free to email me at charlie.r.baxter@gmail.com.

## Legal
Copyright (c) 2016 Charlie Baxter.  This software is licensed under the MIT License.
