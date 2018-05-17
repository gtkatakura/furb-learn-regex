{
  const flatten = array => [].concat(...array)

  const uniq = array => array.reduce((filtered, element) => (
    filtered.includes(element)
      ? filtered
      : [...filtered, element]
  ), [])

  const normalize = array => uniq(flatten(array)).sort()
}

Grammar
  = symbols:Expression+ { return normalize(symbols) }

Expression
  = left:TermExpression rights:("|" TermExpression)* { return left.concat(rights ? flatten(rights.map(right => right[1])) : []) }

TermExpression
  = symbols:(AlphanumericExpression / CaptureExpression) RepetitionPart? { return symbols }

CaptureExpression
  = "(" symbols:Expression+ ")" { return flatten(symbols) }

AlphanumericExpression
  = Alphanumeric+

RepetitionPart
 = ("+" / "*" / "{" Integer+ "}")? "?"?

Alphanumeric
  = (Integer / LowerCase)

Integer "integer"
  = [0-9]

LowerCase "lower case"
  = [a-z]

_ "whitespace"
  = [ \t\n\r]*
