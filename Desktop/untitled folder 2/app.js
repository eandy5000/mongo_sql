$(document).ready(function(){
console.log("hi");

for (var i=0;i<10;i++)
//change how you view the for loop if you want 1-10, rather than changing the for loop logic



{
	var index=i+1;
$("#container").append("<div class='person'></div>")
var $el= $("#container").children().last();
$el.append('<p>'+ index + ". " +  'andy</p>');
$el.append('<button class="changeButton">change</button>');

var delayTime=i*500;

$el.hide()
	.delay(delayTime)
	.slideDown(900, function(){
	console.log("hi ", i);
});
//slideUp slideToggle slideDown

}
$('#container') .on ('click', '.changeButton', function(){
	$(this).parent().toggleClass('selected');
	//addClass removeClass toggleClass
console.log("button working");
});

});

//fadeIn fadeOut fadeToggle

// $(this).css("background-color": "green");
// above uses .css 