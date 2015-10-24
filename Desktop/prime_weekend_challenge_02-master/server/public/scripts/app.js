// variables
var indexTracker = 0;
var people;

$(document).ready(function(){



    $.ajax({

        type : "GET",
        url  : "/data",
        success : function(fooFoo) {
            people = fooFoo.zeta;
            unwrapData(fooFoo);

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
    var $el = $('.person').last();
    $('.main').append("<div class='person' id='" + i + "'</div>")
    $el.append("<h1>"+arrayOfPeers.name+"</h1>");
    $el.append("<h5>"+arrayOfPeers.github+"</h5>");
    $el.append("<p1>"+arrayOfPeers.shoutout+"</p1>");

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
    createNameDisplay(people, indexTracker);


   //nextslide ends below
}

function prevSlide(){
    decrementTracker();
    createNameDisplay(people, indexTracker);

    //prevslide ends below
}

function incrementTracker(){
    var sliderCount = people.length;
    var newTracker = (indexTracker + 1) % sliderCount;
    indexTracker = newTracker;


    //increment tracker ends below
}

function decrementTracker(){

    var sliderCount = people.length;
    var newTracker = (indexTracker - 1) % sliderCount;

    if (newTracker < 0) {
        newTracker = sliderCount - 1;
    }

    indexTracker = newTracker;


    //decrement tracker ends below
}
// trying to figure out why css isn't changing when .selected is added
// background should turn yellow



function createNameDisplay(array ,index){
    var selected = indexTracker;
$('#'+ selected +'').addClass('.selected');

console.log("name display working");

}