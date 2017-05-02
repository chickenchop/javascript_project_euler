var numberLimit = prompt("Insert upper limit")
var compute = function() 
{
  var sum = 0
  for(i=1; i<numberLimit; i++) 
  {
  if (i % 3 === 0 || i % 5 === 0) 
    {
      sum = sum + i;
    }
  }
  return sum;
}
var result = compute();
console.log(result);
