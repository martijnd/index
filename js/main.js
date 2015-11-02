$(document).ready(function() {
	fill();
	resize();
});

function resize(){
	$("#fullpage").height($(window).height());
	$("#fullpage").width($(window).width());
};

function fill(){
	$("#duimpje").hide();


$("#menuwrap").click(function(){
	console.log("clicked menu")
	$("#duimpje").fadeIn(500);
});

$("#duimpje").click(function(){
	console.log("clicked duimpje")
	$("#duimpje").fadeOut(500);
});
}

