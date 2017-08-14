const chalk = require('chalk');
const moment = require('moment');

// console.log(chalk.red('Hello world!'));
// console.log("It is", (chalk.blue( moment('locale').format('LLLL'))));
console.log("It is", (chalk.blue( moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))));
console.log("It is the", (chalk.magenta( moment().format("DDDo"))),"day of the year.");
let seconds = function(s){
  return s * 1.1574074074074;
  console.log("It is", (chalk.blue( moment().format(seconds(s)))),"seconds into the day.");
};
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
