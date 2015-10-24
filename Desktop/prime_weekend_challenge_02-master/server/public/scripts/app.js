$(document).ready(function(){



    $.ajax({

        type : "GET",
        url  : "/data",
        success : function(zeta) {
            unwrapData(zeta);
        }

    });
// variables
//var arrayOfPeers=[];


//page call functions


});

//functions


function unwrapData(data){

for (var i = 0; i < data.zeta.length; i++){
    var arrayOfPeers[] = data.zeta[i];
    }
   console.log("array of peers in unwrap",arrayOfPeers);
    createCarousel(arrayOfPeers);
    return;
}

function createCarousel(array){
for (var i = 0; i < array.length;i++) {

        $('.main').append("<div class='person' id='" + i + "'</div>")
        $('.person').last().append("<h1>"+array.name+"</h1>");
        $('.person').last().append("<h5>"+array.github+"</h5>");
        $('.person').last().append("<p1>"+array.shoutout+"</p1>");
    console.log("working");

    }

}




