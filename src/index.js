import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import User from './../src/js/user.js'

function planetCalc(userToCalc) {
  userToCalc.lifeExpectCalc();
  userToCalc.mercuryCalc();
  userToCalc.venusCalc();
  userToCalc.marsCalc();
  userToCalc.jupiterCalc();
  userToCalc.satCalc();
  userToCalc.uranusCalc();
  userToCalc.nepCalc();
  userToCalc.plutoCalc();
}

function planetDisplay(myUser) {
  $("#planets").show();
  $("#merc-out").after(`<h5> Age on planet: ${myUser.mercAge}</h5><br><h5>years left to live: ${myUser.mercYearsLeft}</h5>`);
  $("#venus-out").after(`<h5> Age on planet: ${myUser.venAge}</h5><br><h5>years left to live: ${myUser.venYearsLeft}</h5>`);
  $("#mars-out").after(`<h5> Age on planet: ${myUser.marsAge}</h5><br><h5>years left to live: ${myUser.marsYearsLeft}</h5>`);
  $("#jupiter-out").after(`<h5> Age on planet: ${myUser.jupiterAge}</h5><br><h5>years left to live: ${myUser.jupiterYearsLeft}</h5>`);
  $("#saturn-out").after(`<h5> Age on planet: ${myUser.satAge}</h5><br><h5>years left to live: ${myUser.satYearsLeft}</h5>`);
  $("#uranus-out").after(`<h5> Age on planet: ${myUser.uranusAge}</h5><br><h5>years left to live: ${myUser.uranusYearsLeft}</h5>`);
  $("#nep-out").after(`<h5> Age on planet: ${myUser.nepAge}</h5><br><h5>years left to live: ${myUser.nepYearsLeft}</h5>`);
  $("#pluto-out").after(`<h5> Age on planet: ${myUser.plutoAge}</h5><br><h5>years left to live: ${myUser.plutoYearsLeft}</h5>`);
}

$(document).ready(function(){


  $("#form-submission").submit(function(e){
    e.preventDefault();
    const name = $("#user-name").val();
    const age = $("#user-age").val();
    const lifeExpect = $("#user-life-expect").val();
    
    let myUser = new User(name, age, lifeExpect)
    planetCalc(myUser);
    planetDisplay(myUser);
    
  })
})