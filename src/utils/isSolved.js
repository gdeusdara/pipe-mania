
const findBegin = (map) => {
  let i = 0;
  let l = 0;
  map.find((item, index) => {
    return item.find((piece, index1) => {
      if(piece[0] === 'B') {
        i = index,
        l = index1
        return true
      }
      return false
    })
  })

  return { i, l }
}

const beginIWayOut = {
  '1': 0,
  '2': 1,
  '3': 0,
  '4': -1
}

const beginLWayOut = {
  '1': 1,
  '2': 0,
  '3': -1,
  '4': 0
}

const LWayIn = {
  '1': '2',
  '2': '3',
  '3': '4',
  '4': '1'
}

const LWayOut = {
  '1': '4',
  '2': '1',
  '3': '2',
  '4': '3'
}

const LIWayOut = {
  '1': -1,
  '2': 0,
  '3': 1,
  '4': 0,
}

const LLWayOut = {
  '1': 0,
  '2': 1,
  '3': 0,
  '4': -1,
}

const reverseLWayOut = {
  '1': '3',
  '2': '4',
  '3': '1',
  '4': '2'
}

const reverseLIWayOut = {
  '1': 0,
  '2': -1,
  '3': 0,
  '4': 1,
}

const reverseLLWayOut = {
  '1': -1,
  '2': 0,
  '3': 1,
  '4': 0,
}

const wayOutNumber = {
  '1': '3',
  '2': '4',
  '3': '1',
  '4': '2',
}

// before =
/*

*/

export default function isSolved(map, index1 = null, index2 = null, before = null) {
  let i = index1;
  let l = index2;

  if (index1 === null || index2 === null) {
    const result = findBegin(map)
    i = result.i
    l = result.l
  }

  const letter = map[i][l][0]
  let number = map[i][l][1]
  if (letter === 'R' || letter === 'B') {
    if (
        ((number === '1' || number === '3') && (before === '1' || before === '3')) ||
        ((number === '2' || number === '4') && (before === '2' || before === '4')) ||
        !before
      ) {
      if (letter === 'B' && before) {
        return true
      }

      if (before === '1') {
        return isSolved(map, i, l+1, before)
      }

      if (before === '2') {
        return isSolved(map, i+1, l, before)
      }

      if (before === '3') {
        return isSolved(map, i, l-1, before)
      }

      if (before === '4') {
        return isSolved(map, i-1, l, before)
      }

      if (!before) {
        const first = isSolved(map, i+beginIWayOut[number], l+beginLWayOut[number], number)
        if (first) {
          return first
        }

        return isSolved(map, i-beginIWayOut[number], l-beginLWayOut[number], wayOutNumber[number])
      }
    }
  }

  if (letter === 'L') {
    if (number === before) {
      return isSolved(map, i+LIWayOut[number], l+LLWayOut[number], LWayOut[before])
    }

    if (before === LWayIn[number]) {
      return isSolved(map, i+reverseLIWayOut[number], l+reverseLLWayOut[number], reverseLWayOut[number])
    }
  }


  return false
}