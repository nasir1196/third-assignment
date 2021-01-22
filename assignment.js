// kilometer to Meter Function
function kilometerToMeter(kiloMeter) {
  if (kiloMeter <= -1) {
    return "Distance can't be negative";
  } else {
    var kilo = 1000;
    var meter = kilo * kiloMeter;
    return meter;
  }
}
var output = kilometerToMeter(5);
console.log(output);

// function for Budget Calculator
function budgetCalculator(watch, phone, laptop) {
  if (watch <= -1) {
    return "Input Invalid Digit";
  } else if (phone <= -1) {
    return "Input Invalid Digit";
  } else if (laptop <= -1) {
    return "Input Invalid Digit";
  } else {
    var watchPrice = 50;
    var watchValue = watchPrice * watch;
    var phonePrice = 100;
    var phoneValue = phonePrice * phone;
    var laptopPrice = 500;
    var laptopValue = laptopPrice * laptop;
    var totalValue = watchValue + phoneValue + laptopValue;
    return totalValue;
  }
}
var totalBudget = budgetCalculator(5, 5, 5);
console.log(totalBudget);

//Function for Hotel Cost
function hotelCost(day) {
  var rent = 0;
  if(day<=10){
    rent=day*100;
  }else if(day<=20){
    var firstShift=10*100;
    var remainingDay=day-10;
    var secondShift=remainingDay*80;
    rent=firstShift+secondShift;
  }
  else{
    var firstShift=10*100;
    var secondShift=10*80;
    var remainingDay=day-20;
    var thirdShift=remainingDay*50;
    rent = firstShift+secondShift+thirdShift;
  }
  return rent;
}
var totalRent = hotelCost(21);
console.log(totalRent);
