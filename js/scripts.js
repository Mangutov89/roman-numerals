function romanNumeral(number) {
  if (number >= 4000) {
    var hugeNum = "Your number is too big";
    return hugeNum
  } else if (number >= 100 && number <= 999) {
      var splitNumber3 = number.split('');
      return (arrayThirdThousand[splitNumber3[0]]).concat(arraySecondHundred[splitNumber3[1]]).concat(arrayFirstTen[splitNumber3[2]]);
  } else if (number >= 10 && number <= 99) {
      var splitNumber2 = number.split('');
      return (arraySecondHundred[splitNumber2[0]]).concat(arrayFirstTen[splitNumber2[1]]);
  } else if (number < 10) {
      return arrayFirstTen[(number)];
  }
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
