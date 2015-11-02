$(document).ready(function() {
	fill();
	resize();
});

function resize(){
	$("#fullpage").height($(window).height());
	$("#fullpage").width($(window).width());
};

function fill(){

$("#menuwrap").click(function(){
	console.log("clicked menu")
    $("#duimpje").delay(250).queue(function(){
    	$(this).toggleClass('show');
    	$(this).dequeue();

     $("#guardians").delay(250).queue(function(){
    	$(this).toggleClass('show');
    	$(this).dequeue();

    $("#alistar").delay(250).queue(function(){
    	$(this).toggleClass('show');
    	$(this).dequeue();
});
});
});

	$("#top").toggleClass('crossleft');
	$("#middle").toggleClass('displaynone');  
	$("#bottom").toggleClass('crossright');   
});
}