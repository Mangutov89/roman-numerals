function romanNumeral(number) {
  if (number >= 4000) {
    var hugeNum = "Your number is too big, enter a number between 1-3999"
    return hugeNum;
  }
  else if (number <= 3999 && number >= 1000) {
    var newArray = number.split('');
    for (var i = 0; i < arrayFirstTen.length; i++) {
      if (parseInt(newArray[3]) === i) {
        var arrayResult4 = arrayFirstTen[i];
      }
    }
    for (var i = 0; i < arraySecondHundred.length; i++) {
      if (parseInt(newArray[2]) === i) {
        var arrayResult3 = arraySecondHundred[i];
      }
    }
    for (var i = 0; i < arrayThirdThousand.length; i++) {
      if (parseInt(newArray[1]) === i) {
        var arrayResult2 = arrayThirdThousand[i];
      }
    }
    for (var i = 0; i < arrayFourthThousand.length; i++) {
      if (parseInt(newArray[0]) === i) {
        var arrayResult1 = arrayFourthThousand[i];
      }
    }
  }
  
  return arrayResult1+arrayResult2+arrayResult3+arrayResult4;
}

















var arrayFirstTen = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
var arraySecondHundred = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
var arrayThirdThousand = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
var arrayFourthThousand = ["", "M", "MM", "MMM"];




$(document).ready(function() {
  $("form#convertor").submit(function(event) {
    event.preventDefault();
    var number = $("input#inputNumber").val();
    var result = romanNumeral(number);

    $("#result").show();
    $("#result").text(result);
  });
});
