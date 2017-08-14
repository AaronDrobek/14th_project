const chalk = require('chalk');
const moment = require('moment');

// console.log(chalk.red('Hello world!'));
// console.log("It is", (chalk.blue( moment('locale').format('LLLL'))));
console.log("It is", (chalk.blueBright( moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))));
console.log("It is the", (chalk.magenta( moment().format("DDDo"))),"day of the year.");

  let seconds = (moment().format("ss"));
  let minutes = (moment().format("mm"));
  let hours = (moment().format("k"));
  let minuteSeconds = minutes * 60;
  let hourSeconds = hours * 3600;

  // console.log(seconds);
  // console.log(minuteSeconds, "minute seconds");
  // console.log(hourSeconds, "hour seconds");
  function total(){
    // console.log( (hours * 60) + (minutes * 60) + seconds);
  return  Number(hourSeconds) + Number(minuteSeconds) + Number(seconds);
  }
  console.log("It is " + chalk.cyan(total()) + " seconds into the day.");

if ( moment().isDST()){
console.log("It", chalk.green("is"), "during Daylight Savings Time.");
}else{
console.log("It", chalk.green("is not"), "during Daylight Savings Time")
}
if (moment().isLeapYear()){
  console.log("It", chalk.red("is not"), "not a leap year");
}else{
  console.log("It", chalk.red("is"), "not a leap year");
}
