$(document).ready(function(){



    $.ajax({

        type : "GET",
        url  : "/data",
        success : function(zeta) {
        console.log(zeta);
            appendDom(zeta);
        }

    });




});

function appendDom(data){

for (var i = 0; i < data.zeta.length; i++){
    var arrayOfPeers = data.zeta[i];
    //console.log("array of peers ",arrayOfPeers);
    //console.log("array of peers 5th position",arrayOfPeers[4]);
    }
}