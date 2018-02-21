module.exports = function solveEquation(equation) {
  let arg = equation.split('').filter(x => x != ' ').join('').split('x');
  let a = parseInt(arg[0]),
    b = parseInt(arg[1].split('').slice(2, arg[1].length).join('')),
    c = parseInt(arg[2]),
    D = (b * b) - (4 * a * c),
    x1 = 0,
    x2 = 0,
    ans = [];
  D = Math.round(Math.sqrt(D));
  if (D > 0) {
    x1 = (-b - D) / (2 * a);
    x2 = (-b + D) / (2 * a);
    ans.push(x1, x2);
  }
  return ans.sort((x,y)=> x - y);
}
