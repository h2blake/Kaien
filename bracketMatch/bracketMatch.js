(function () {
  var values = ["[()]", "[{){(}[]", "[]{}[()]", "({({[}])})", "{{[)({}{}", "[[[]]}{"],
    output = [],
    valuesLength = values.length;

  for (var i = 0; i < valuesLength; i++) {
    var characters = values[i].split(""),
      numLeftBrace = 0,
      numRightBrace = 0,
      numLeftBracket = 0,
      numRightBracket = 0,
      numLeftParentheses = 0,
      numRightParentheses = 0;

    for (j = 0; j < characters.length; j++) {
      determineCount(characters[j]);
    }

    var bracesMatch = determineMatch(numLeftBrace, numRightBrace),
        bracketsMatch = determineMatch(numLeftBracket, numRightBracket),
        parenthesisMatch = determineMatch(numLeftParentheses, numRightParentheses);

    addToAnswerArray(bracesMatch, bracketsMatch, parenthesisMatch);
  }

  function determineCount(character) {
    switch (character) {
      case "{":
        return numLeftBrace += 1;
        break;
      case "}":
        return numRightBrace += 1;
        break;
      case "[":
        return numLeftBracket += 1;
        break;
      case "]":
        return numRightBracket += 1;
        break;
      case "(":
        return numLeftParentheses += 1;
        break;
      case ")":
        return numRightParentheses += 1;
        break;
    }
  }

  function determineMatch(toCompareLeft, toCompareRight) {
    return toCompareLeft === toCompareRight;
  }


  function addToAnswerArray(bracesMatch, bracketsMatch, parenthesisMatch) {
    if (bracesMatch && bracketsMatch && parenthesisMatch) {
      output.push("YES");
    } else {
      output.push("NO");
    }
  }


  console.log("Output: ", output);
})();