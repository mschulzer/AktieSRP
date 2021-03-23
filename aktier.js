function stocks_mean(x) { // beregner middelværdi

  var sum = 0
  for (let i = 0; i < x.length; i++) {
    sum += x[i]
  }

  return ((sum)/x.length) // returnerer et enkelt tal
}

function stocks_variance(x) { // beregner varians på hver enkelt

  var m = stocks_mean(x)
  var values = []
  var n = 0

  for (let i = 0; i < x.length; i++) {
    n = Math.pow((x[i] - m), 2)
    n = n/x.length;
    values.push(n)
  }

  return values // returnerer en liste
}

function stocks_return(x) { // ændrer aktiekurser til afkast
  var afkast = []
  var k = 0
  for (let i = 0; i < x.length - 1; i++) {
    k = ((x[i]-x[i+1])/x[i+1])
    afkast.push(k)
  }

  return afkast // returnerer en liste
}

function stocks_variance_collected (x) { // tager en liste
  var collected = 0
  for (let i = 0; i < x.length; i++) {
    collected += x[i]
  }

  return (collected/x.length) // returnerer et enkelt tal
}

function stocks_covar(x, y) { // tager to lister som parametre
  var num = 0

  for (let i = 0; i < x.length; i++) {
    num += (x[i]-stocks_mean(x))*(y[i]-stocks_mean(y))
  }
  return (num/(x.length-1)) // returnerer cov(x, y)
  //return (num/(x.length))
}


// Historiske aktiedata fra 1/1-2020 - 1/12-2020
var nvo_data = [69.85, 67.13, 63.89, 69.43, 65.53, 64.82, 64.97, 65.43, 62.84, 59.73, 57.68, 60.36]
var nda_data = [49.32, 53.27, 47.77, 48.54, 50.63, 48.92, 45.74, 45.11, 43.69, 37.60, 52.21, 52.42]
var dem_data = [240.60, 235.00, 201.30, 199.50, 186.20, 195.40, 174.90, 189.30, 162.75, 150.60, 206.50, 219.00]

var mm = [nvo_data, nda_data, dem_data]
var sets = ["nvo", "nda", "dem"]

for (let n = 0; n < mm.length; n++) {
  if (n == mm.length-1) {
    console.log('Cov(' + sets[0] + ', ' + sets[mm.length-1] + '): ' + stocks_covar(mm[0], mm[mm.length-1]))
  } else {
    console.log('Cov(' + sets[n] + ', ' + sets[n+1] + '): ' + stocks_covar(mm[n], mm[n+1]))
  }
}

/*   Covarians Matrix for NVO, NDA & DEM
 *
 *           +-------+-------+-------+
 *           | data1 | data2 | data3 |
 *   +-------+-------+-------+-------+
 *   | data1 |   *   | 2.961 | 39.58 |
 *   +-------+------------------------
 *   | data2 | 2.961 |   *   | 97.06 |
 *   +-------+------------------------
 *   | data3 | 39.58 | 97.06 |   *   |
 *   +-------+------------------------
 *
 */

 function do_variance(x) {
   var sum = 0
   var m = stocks_mean(x)

   for (let i = 0; i < x.length; i++) {
     sum += Math.pow(x[i]-m, 2)
   }

   return sum/(x.length-1)
 }

function stocks_calculate_combined_return (w, x) { // w= [0.33, 0.33, 0.33], x= [1.11, 5.19, 0.33]
  var sum = 0

  for (let i = 0; i < x.length; i++) {
    sum += w[i] * x[i] // fx 0.33*1.11+0.33*5.19+0.33*0.33 = 2.19
  }

  return sum
}

//console.log(stocks_calculate_combined_return([0.33, 0.33, 0.33], [(stocks_mean(stocks_return(nvo_data))*100), (stocks_mean(stocks_return(nda_data))*100), (stocks_mean(stocks_return(dem_data))*100)])) // afkast af alle 3 aktier
//console.log(stocks_calculate_combined_return([0.33, 0.33, 0.33], [1.11, 5.19, 0.33]))


/********************************
 * Afkast og varians for 3 aktier
 ********************************

var dem = [95.52, 91.68, 85.80, 83.82, 85.68, 91.00, 92.84, 98.00, 93.88, 91.12, 91.70, 87.20]

console.log(stocks_mean(stocks_return(dem))*100)  // DEM afkast i % pr. mnd. (og når det er beregninger på en portefølje, så ganger vi også med vægten)
console.log(do_variance(dem))                     // DEM varians (og når det er beregninger på en portefølje, så ganger vi også med vægten)
*/


console.log(stocks_covar(nvo_data, dem_data))
