$(document).ready(function() {
	fill();
	resize();
	$("#guardians").hide();
	$("#alistar").hide();
	$("#jfk").hide();
	$("#big").hide();
});

function resize(){
	$("#fullpage").height($(window).height());
	$("#fullpage").width($(window).width());
};

function fill(){

$("#menuwrap").click(function(){
	console.log("clicked menu")

     $("#guardians").delay(250).queue(function(){
    	$(this).fadeToggle(500, "linear");
    	$(this).dequeue();

    $("#alistar").delay(250).queue(function(){
    	$(this).fadeToggle(500, "linear");
    	$(this).dequeue();

    $("#jfk").delay(250).queue(function(){
    	$(this).fadeToggle(500, "linear");
    	$(this).dequeue();

    $("#big").delay(250).queue(function(){
    	$(this).toggle();
    	$(this).dequeue();
    });
	});
	});
	});

	$("#top").toggleClass('crossleft');
	$("#middle").toggleClass('displaynone');  
	$("#bottom").toggleClass('crossright');   
});
	
	$("#guardians").hover(function(){
		$("#big").css("background-image", "url(../index/img/bigguard.png)");
		
	});

	$("#alistar").hover(function(){
		$("#big").css("background-image", "url(../index/img/bigalist.png)");

	});

	$("#jfk").hover(function(){
		$("#big").css("background-image", "url(../index/img/bigjfk.png)");
	});
}