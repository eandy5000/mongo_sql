// variables
var indexTracker = 0;
var people;

$(document).ready(function(){



    $.ajax({

        type : "GET",
        url  : "/data",
        success : function(zeta) {
            people = zeta;
            unwrapData(zeta);

        }

    });





//page call functions
    updateIndexPoints();
    createNavButtons();


//listeners
    $("#prev").on('click', prevSlide);
    $("#next").on('click', nextSlide);
    console.log("index tracker ", indexTracker);

});

//functions


function unwrapData(data){

for (var i = 0; i < data.zeta.length; i++){
    var arrayOfPeers = data.zeta[i];
    $('.main').append("<div class='person' id='" + i + "'</div>")
    $('.person').last().append("<h1>"+arrayOfPeers.name+"</h1>");
    $('.person').last().append("<h5>"+arrayOfPeers.github+"</h5>");
    $('.person').last().append("<p1>"+arrayOfPeers.shoutout+"</p1>");

    }
//unwrap end below
}

function updateIndexPoints(){



//updateIndex ends below
}

function createNavButtons(){

    $('.main').parent().append("<div class='navigation'></div>");
    $('.navigation').last().append("<div class='nav' id='prev'>Previous</div> ");
    $('.navigation').last().append("<div class='nav' id='next'>Next</div>");


}

function nextSlide(){

    incrementTracker();
    console.log("index tracker ", indexTracker);

   //nextslide ends below
}

function prevSlide(){
    decrementTracker();
    console.log("index tracker ", indexTracker);
    //prevslide ends below
}

function incrementTracker(){
    var sliderCount = people.length;
    var newTracker = (indexTracker + 1) % sliderCount;
    indexTracker = newTracker;

    console.log("index tracker in + ", indexTracker);
    //increment tracker ends below
}

function decrementTracker(){

    var sliderCount = people.length;
    var newTracker = (indexTracker - 1) % sliderCount;

    if (newTracker < 0) {
        newTracker = sliderCount - 1;
    }

    indexTracker = newTracker;
    console.log("index tracker in - ", indexTracker);

    //decrement tracker ends below
}

