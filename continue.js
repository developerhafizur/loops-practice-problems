var numbers = [34, 45, 55, 59, 60, 64, 133, 33];
for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  if(number > 38){
      continue;
  }
  console.log(number);
}

