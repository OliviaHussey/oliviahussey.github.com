$(init)
function init(){
	$('.ui-box1-changeimg').hide()
    $('.ui-box1-img').click(function(){
	    $('.ui-box1-changeimg')[0].src=$(this).attr('src');
        $('.ui-box1-changeimg').show();
        
    });
    $('.ui-box1-changeimg').click(function(){
    	//$('.ui-box1-changebox').hide();
        $('.ui-box1-changeimg').hide();
	});

	 $(".ui-box2-nav-button").eq(0).css("background", "white");
    $(".ui-box2-content-num").eq(0).show();
    $("body").on("click", ".ui-box2-nav-button", function() {
        $(".ui-box2-nav-button").css("background", "none");
        $(this).css("background", "#C0C0C0");
        $(".ui-box2-content-num").hide();
        $(".ui-box2-content-num").eq($(this).index()).fadeIn('slow');
    });

       var sum = 3;
        $(".ui-box3-button").click(function(){
    	sum++;
    	var add = $("<div class=\"ui-box3-textbar\"> <div class=\"ui-box3-textbar-num\">"+ sum +"</div><div class=\"ui-box3-textbar-delete\">Delete</div></div>");
    	$(".ui-box3-body").append(add);
    });
        
       $(".ui-box3-body").on('click',".ui-box3-textbar-delete",function () {
    	$(this).parent().remove();
    	$(".ui-box3-textbar").each(function(){
    		var num = $(this).index() + 1;
    		$(this).children(".ui-box3-textbar").text(num);
    	});

    	sum--;
    });

   
}

