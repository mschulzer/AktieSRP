var p_risk = 0

var xx = [0.75, 0.25]  // weights
var rr = [ 400, 3600]  // variance; already calc. from std.dev.

p_risk = (Math.pow(xx[0],2)*rr[0]) +
         (Math.pow(xx[1],2)*rr[1]) +
         (2*xx[0]*xx[1]*(-240)) // -240 = cov(0,1)

console.log('Output: ' + p_risk)

/*
p_risk = (Math.pow(x[0],2)*Math.pow(r[0],2)) +
         (Math.pow(x[1],2)*Math.pow(r[1],2)) +
         (Math.pow(x[2],2)*Math.pow(r[2],2)) +
         (2*x[0]*x[1]*cov(0,1)) +
         (2*x[0]*x[2]*cov(0,2)) +
         (2*x[1]*x[2]*cov(1,2))

*/

function returnWeights(r, v) {
  //we are in need of cov(y,x)
  var v1 = v[0]*v[0]
  var v2 = v[1]*v[1]
  var cov= -240
  let k = [0, 0, 1, 1] // D = k[3]
  var w1 = []
  var w2 = []
  let c = math.matrix([
            [(2*v1), 2*cov, r[0], 1],  // 12 = cov(x,y)
            [2*cov, (2*v2), r[1], 1],
            [ 1,  1,    0, 0],
            [r[0], r[1], 0, 0] ])

  const myMatrix = math.inv(c)

  var myW1 = 25
/*
  for (let j = 5; j < 50; j+5) {
    console.log('Tring: ' + j + ' and getting: ' + myMatrix.get([0,2])+myMatrix.get([0,3])*myW1)
  }
  */
  w1.push(myMatrix.get([0,2])+myMatrix.get([0,3])*5)
  w1.push(myMatrix.get([0,2])+myMatrix.get([0,3])*10)
  w1.push(myMatrix.get([0,2])+myMatrix.get([0,3])*15)
  w1.push(myMatrix.get([0,2])+myMatrix.get([0,3])*20)
  w1.push(myMatrix.get([0,2])+myMatrix.get([0,3])*25)
  w1.push(myMatrix.get([0,2])+myMatrix.get([0,3])*30)
  w1.push(myMatrix.get([0,2])+myMatrix.get([0,3])*35)
  w1.push(myMatrix.get([0,2])+myMatrix.get([0,3])*40)

  w2.push(myMatrix.get([1,2])+myMatrix.get([1,3])*5)
  w2.push(myMatrix.get([1,2])+myMatrix.get([1,3])*10)
  w2.push(myMatrix.get([1,2])+myMatrix.get([1,3])*15)
  w2.push(myMatrix.get([1,2])+myMatrix.get([1,3])*20)
  w2.push(myMatrix.get([1,2])+myMatrix.get([1,3])*25)
  w2.push(myMatrix.get([1,2])+myMatrix.get([1,3])*30)
  w2.push(myMatrix.get([1,2])+myMatrix.get([1,3])*35)
  w2.push(myMatrix.get([1,2])+myMatrix.get([1,3])*40)


  return [w1, w2]
}
console.log(returnWeights([10,30], [20,60])) // afkast + std.dev
