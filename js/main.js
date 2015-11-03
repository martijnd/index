$(document).ready(function() {
	fill();
	resize();
	$("#duimpje").hide();
	$("#guardians").hide();
	$("#alistar").hide();
});

function resize(){
	$("#fullpage").height($(window).height());
	$("#fullpage").width($(window).width());
};

function fill(){

$("#menuwrap").click(function(){
	console.log("clicked menu")
    $("#duimpje").delay(250).queue(function(){
    	$(this).fadeToggle(500, "swing");
    	$(this).dequeue();

     $("#guardians").delay(250).queue(function(){
    	$(this).fadeToggle(500, "swing");
    	$(this).dequeue();

    $("#alistar").delay(250).queue(function(){
    	$(this).fadeToggle(500, "swing");
    	$(this).dequeue();
});
});
});

	$("#top").toggleClass('crossleft');
	$("#middle").toggleClass('displaynone');  
	$("#bottom").toggleClass('crossright');   
});
}