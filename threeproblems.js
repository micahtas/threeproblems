/**
 * Solves the first three problems in five problems every SE should solve https://blog.svpino.com/2015/05/07/five-programming-problems-every-software-engineer-should-be-able-to-solve-in-less-than-1-hour
 * Created by Micah on 9/21/2015.
 */

var testNums = [1, 2,3, 4];

function sumFor(num)
{
  var sum = 0;
  for(var i= 0;  i < num.length; i++)
  {
    sum += num[i];
  }
  return sum;
}

function sumWhile(num)
{
  var sum = 0;
  var i = 0;

  while(i < num.length)
  {
    sum += num[i];
    i++;
  }
  return sum;
}

function sumRecursion(num)
{
  if(num.length === 0)
  {
    return 0;
  }
  else
  {
    return num[0] + sumRecursion(num.slice(1, num.length));
  }
}

function sumTheSimpleWay(num)
{
  return _.reduce(num, function(memo, nums){return memo + nums;}, 0);
}
console.log("sumFor: " + sumFor(testNums));
console.log("sumWhile: " + sumWhile(testNums));
console.log("sumRecursion: " + sumRecursion(testNums));
console.log("sumTheSimpleWay: " + sumTheSimpleWay(testNums));

var testlist1 = [1, 2, 3];
var testlist2 = ["a", "b", "c"];
function zipList(list1, list2)
{
  var resultlist = [];
  for (var i = 0; i < list1.length; i++) {
    resultlist.push(list1[i], list2[i]);
  }
  return resultlist;
}

function zipListTheSimpleWay(list1, list2)
{
  return _.flatten(_.zip(list1, list2));
}
console.log("zipList: " + zipList(testlist1, testlist2));
console.log("zipListTheSimpleWay: " + zipListTheSimpleWay(testlist1, testlist2));

function fib()
{
  var tail = 0;
  var head = 1;
  var fiblist = [tail];

  for(var i = 0; i < 99; i++)
  {
    var temphead = head;
    head = head + tail;
    tail = temphead;
    fiblist.push(head);
  }
  return fiblist;
}
console.log("fib: " + fib());
console.log("fib: " + fib().length);