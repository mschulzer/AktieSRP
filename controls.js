$(document).ready(function(){

  var val = 0

  // justér ranges ift. hinanden
  $("input[type=range]").on('input', function(){
    val = (100 - $(this).val())/2
    $("input[type=range]").not($(this)).val(val)
  })



  $("#btn_done").click(function(){
    // når jeg klikker "beregn værdier"
    var s = 0
    var r = [stocks_mean(stocks_return(nvo_data))*100, stocks_mean(stocks_return(nda_data))*100, stocks_mean(stocks_return(dem_data))*100]

    $("input[type=range]").each(function(index){
      s += ($(this).val()/100)*r[index]
    })

    /*
    console.log(b*($("#nvo").val()/100)) // tag varians fra aktierne
    console.log(b*($("#nda").val()/100))
    console.log(b*($("#dem").val()/100))
    */

    $("#aktie_risiko").html("0")
    $("#aktie_varians").html(s)
  })
})
