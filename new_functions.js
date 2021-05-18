// FUNKTIONER

function stox_mean (x) {
  var m = 0

  for (var i = 0; i < x.length; i++) {
    m += x[i]
  }
  return (m/x.length)
}

function stox_return (x) {
  var rarray = []
  var num = 0

  for (var i = 0; i < (x.length-1); i++) {
    num = ((x[i+1]/x[i])-1)
    rarray.push(num)
  }
  return (rarray)
}

function stox_variance (x) {

  var m = stox_mean(x)
  var n = 0

  for (let i = 0; i < x.length; i++) {
    n += Math.pow((x[i] - m), 2)
  }

  return (n/(x.length-1))
}

function stox_covar(x, y) {
  var num = 0
  var xm = stox_mean(x)   // bør automatiseres
  var ym = stox_mean(y)

  for (var i = 0; i < x.length; i++) {
    num += (x[i] - xm)*(y[i] - ym)
  }
  return (num/(x.length - 1)) // Σ((xi-xm)*(yi-ym)) / N-1
}



// EKSEMPLER

var new_data = [13.49, 14.22, 15.42, 16.42, 15.36, 16.20, 17.21, 17.12, 19.69, 20.96, 19.88, 22.51, 22.63, 25.33, 25.05, 25.48, 25.20, 25.06, 24.40, 21.33, 19.90, 21.26, 22.71]

console.log('New data mean: ' + stox_mean(stox_return(new_data)))

var h = [-0.01467063,0.01177501,-0.008560162,0.011835468,0.031735379,-0.009478673,0.008349751,0.019631559,-0.039145907,0.014814815,-0.001029384,-0.035784543,-0.006703585,0.023767606,0.032769657,0.022016651,-0.012762491,-0.017786742,0.036217679]
var k = [0.003767435,0.003732209,-0.001869669,-0.000926062,0.013082222,0.002744853,0.002758077,0.017433564,-0.014431481,-0.016437057,-0.013021325,-0.013171872,-0.019095802,-0.027237012,0.008009566,0.001969694,-0.009896124,-0.012003068,0.032404659]

console.log('Cov(h, k): ' + stox_covar(h, k))
console.log('Variance of h: ' + stox_variance(h))
