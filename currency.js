$(document).ready(function()
{

var fromCountry=$("#currency-one");
var ToCountry=$("#currency-two");
fromCountry.append($("<option></option>").val('').html("Please select country"));
ToCountry.append($("<option></option>").val('').html("Please select country"));
$.ajax({
    url:'https://v6.exchangerate-api.com/v6/453b43b410f75e41ff0c1b15/latest/INR',
    type:'GET',
    dataType:'json',
    success:function(d) {

            $.each(d.conversion_rates,function(index){

             fromCountry.append($("<option></option>").html(index));
             ToCountry.append($("<option></option>").html(index));
            });



    },
    error:function(){
        alert('Error!');
    }

});
//$('#-one').change(function(ev){
//var fromshot=$('#fromshot').val()
//})


    $('#btn').click(function(ev){

    ev.preventDefault()
    var fromcurrency = $("#amount-one").val();
    var fromCountry=$("#currency-one").val();
    var ToCountry=$("#currency-two").val();

    console.log(fromcurrency);
    console.log(fromCountry);
    console.log(ToCountry);
    $.ajax({
        url:'https://v6.exchangerate-api.com/v6/453b43b410f75e41ff0c1b15/latest/'+fromCountry,
        type:'GET',
        dataType:'json',
        success:function(result) {
            $('#amount-two').val(result.conversion_rates[ToCountry]*fromcurrency)
            console.log(fromCountry)
            $('#fromshot').html(fromCountry)
            $('#toshot').html(ToCountry)


        },
        error:function(){
            alert('Error!');
        }

    });
    });


})




