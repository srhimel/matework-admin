const processOperand = (operand) => {
  try {
    if (operand === 'AND') operand = ' && '
    else if (operand === 'OR IF') operand = ' || '
    else operand = null
    return operand
  } catch (error) {
    console.log('processOperand: ', error)
  }
}

const processNumericalCondition = (condition) => {
  try {
    switch (condition) {
      case 'is_equal_to':
        condition = ' === '
        break
      case 'is_not_equal':
        condition = ' !== '
        break
      case 'is_greater_than':
        condition = ' > '
        break
      case 'is_less_than':
        condition = ' < '
        break
      default:
        break
    }

    return condition
  } catch (error) {
    console.log('processCondition: ', error)
  }
}

const processStringCondition = (condition) => {
  switch (condition) {
    case 'contains':
      condition = '.includes('
      break
    case 'does_not_contain':
      condition = '.includes('
      break
    default:
      break
  }
  return condition
}

export const convertToExpression = (conditions) => {
  let operands = [],
    totalCondition = '',
    singleConditionArr = []

  conditions.forEach((item) => {
    let operand = item.operand,
      match_by = item.match_by,
      condition = item.condition,
      value = item.value,
      singleCondition = ''

    if (condition === 'contains') {
      condition = processStringCondition(condition)
      singleCondition = singleCondition.concat(
        match_by,
        condition,
        `'${value.toLowerCase()}')`
      )
    } else if (condition === 'does_not_contain') {
      condition = processStringCondition(condition)
      singleCondition = singleCondition.concat(
        `!${match_by}`,
        condition,
        `'${value.toLowerCase()}')`
      )
    } else {
      condition = processNumericalCondition(condition)
      singleCondition = singleCondition.concat(match_by, condition, value)
    }

    singleConditionArr.push(singleCondition)

    operand = processOperand(operand)
    if (operand) operands.push(operand)

    totalCondition = totalCondition.concat(
      operand ? operand : '',
      singleCondition
    )
  })
  return { singleConditionArr, operands, totalCondition }
}
