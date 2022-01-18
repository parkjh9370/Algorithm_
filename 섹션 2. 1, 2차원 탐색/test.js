let name = 'my  name  is  jaehyeon'

let space = name.replace(/ +(?= )/g, '')
console.log(space)