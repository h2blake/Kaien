(function () {
  var values = ["[{){(}[]", "[]{}[()]", "({({[}])})", "{{[)({}{}", "[[[]]}{"],
    output = [],
    bracketsMatch = false,
    parenthesesMatch = false,
    curlyBracesMatch = false;

  for (var i= 0; i < values.length; i++) {

    if (values[i].indexOf("{") != -1 && values[i].indexOf("}") != -1) {
      var numLeftBrace = values[i].split("{").length - 1;
      var numRightBrace = values[i].split("}").length - 1;
      curlyBracesMatch = compareAmounts(numLeftBrace, numRightBrace);
    }

    if (values[i].indexOf("[") != -1 && values[i].indexOf("[") != -1) {
      var numLeftBracket = values[i].split("]").length - 1;
      var numRightBracket = values[i].split("[").length - 1;
      bracketsMatch = compareAmounts(numLeftBracket, numRightBracket);
    }

    if (values[i].indexOf("(") != -1 && values[i].indexOf(")") != -1) {
      var numLeftParentheses = values[i].split("(").length - 1;
      var numRightParentheses = values[i].split(")").length - 1;
      parenthesesMatch = compareAmounts(numLeftParentheses, numRightParentheses);
    }

    if (bracketsMatch && parenthesesMatch && curlyBracesMatch) {
      output.push("YES");
    } else {
      output.push("NO");
    }

    function compareAmounts(Left, Right) {
      return Left === Right;
    }

  }
  console.log(values);
  console.log(output);
})();