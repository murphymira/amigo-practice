/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle("variables")
/* coding examples */

// var name = "mustapha moruf";
// var age = 35;
// var hasDriverLicence = true; 
// var empty = undefined;

// log(name);
// log( age);
// log( hasDriverLicence );
// log(empty);

// log(name +"type=" + typeof name);
// log(age +" type = " + typeof age);
// log(hasDriverLicence + " type = " + typeof hasDriverLicence);
// log(empty + " type = " + typeof empty);
   
var person = {
    name: "mustapha moruf",
    age:21,
    hasDriverLicence: true 
    dateOfBirth:"01/01/2000" 
};

 log(JSON.stringify(person));
 
 log(person.name);
log(person.age);
log(person. hasDriverLicence );
log(empty);


   
