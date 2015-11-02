$(document).ready(function() {
	fill();
	resize();
});

function resize(){
	$("#fullpage").height($(window).height());
	$("#fullpage").width($(window).width());
};

function fill(){
	$("#robert").hide();


$("#menuwrap").click(function(){
	console.log("clicked menu")
	$("#robert").fadeIn(500);
});
}

