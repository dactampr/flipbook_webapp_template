

$(document).ready(function(){
	
	//CACHE MONEY BABY
	function preloadImages(array){
		if(!preloadImages.list){
			preloadImages.list = [];
		}
		var list = preloadImages.list;
		for (var i = 0; i < array.length; i++){
			var img = new Image();
			img.onload = function(){
				var index = list.indexOf(this);
				if (index !== -1){
					list.splice(index, 1);
				}
			}
			list.push(img);
			img.src = array[i];
		}
	}
	
	var currentPage = 1;
    var pageWidth = window.innerWidth;
	
	if (pageWidth < 500){
		preloadImages(["panels/mobile_dan_panel1.jpg",
		"panels/mobile_dan_panel2.jpg",
		"panels/mobile_dan_panel3.jpg",
		"panels/mobile_dan_panel4.jpg",
		"panels/mobile_dan_panel5.jpg",
		"panels/mobile_dan_panel6.jpg",
		"panels/mobile_dan_panel7.jpg",
		"panels/mobile_dan_panel8.jpg",
		"panels/mobile_dan_panel9.jpg",
		"panels/mobile_dan_panel10.jpg",
		"panels/mobile_dan_panel11.jpg",
		"panels/mobile_dan_panel12.jpg",
		"panels/mobile_dan_panel13.jpg",
		"panels/mobile_dan_panel14.jpg",
		"panels/mobile_dan_panel15.jpg",
		"panels/mobile_dan_panel16.jpg",
		"panels/mobile_dan_panel17.jpg",
		"panels/mobile_dan_panel18.jpg",
		"panels/mobile_dan_panel19.jpg",
		"panels/mobile_dan_panel20.jpg",
		"panels/mobile_dan_panel21.jpg",
		"panels/mobile_dan_panel22.jpg",
		"panels/mobile_dan_panel23.jpg",
		"panels/mobile_dan_panel24.jpg",
		"panels/mobile_dan_panel25.jpg",
		"panels/mobile_dan_panel26.jpg",
		"panels/right-arrow-hover.png",
		"panels/left-arrow-hover.png",
		"panels/left-arrow.png",
		"panels/right-arrow.png"]);
	} else {
		preloadImages(["panels/dan_panel1.jpg",
		"panels/dan_panel2.jpg",
		"panels/dan_panel3.jpg",
		"panels/dan_panel4.jpg",
		"panels/dan_panel5.jpg",
		"panels/dan_panel6.jpg",
		"panels/dan_panel7.jpg",
		"panels/dan_panel8.jpg",
		"panels/dan_panel9.jpg",
		"panels/dan_panel10.jpg",
		"panels/dan_panel11.jpg",
		"panels/dan_panel12.jpg",
		"panels/dan_panel13.jpg",
		"panels/dan_panel14.jpg",
		"panels/dan_panel15.jpg",
		"panels/dan_panel16.jpg",
		"panels/dan_panel17.jpg",
		"panels/dan_panel18.jpg",
		"panels/dan_panel19.jpg",
		"panels/dan_panel20.jpg",
		"panels/dan_panel21.jpg",
		"panels/dan_panel22.jpg",
		"panels/dan_panel23.jpg",
		"panels/dan_panel24.jpg",
		"panels/dan_panel25.jpg",
		"panels/dan_panel26.jpg",
		"panels/right-arrow-hover.png",
		"panels/left-arrow-hover.png",
		"panels/left-arrow.png",
		"panels/right-arrow.png"]);
	}
	
    

	//Load incredibly annoying elements
	if (pageWidth < 500){
		$('.image_container').append('<img class="active_image" alt="" src="panels/mobile_dan_panel1.jpg"/>');
	}else{
		$('.image_container').append('<img class="active_image" alt="" src="panels/dan_panel1.jpg"/>');
	}
	
	//Load navigation
	$('.navigation').append(" <div class='arrow_left blank'></div><div class='start'></div><div class='arrow_right'></div>");

	
	//Load mouseover images
	/*var arrowRightMouseover = new Image();
	arrowRightMouseover.src = "panels/right-arrow-hover.png";
	var arrowRightMouseoverImage = arrowRightMouseover.src;
	
	var arrowLeftMouseover = new Image();
	arrowLeftMouseover.src = "panels/left-arrow-hover.png";*/
	
    // Forward button
    $('.arrow_right').on('click', function(){
        var newSource;
        var currentSource = $('.active_image').attr('src');
        if (currentPage == 1 && $('.arrow_left').hasClass('blank')){
            $('.arrow_left').removeClass('blank');
        }
        if (currentPage == 26){
            currentPage = 1;
			if (pageWidth < 500){
				newSource = "panels/mobile_dan_panel" + currentPage + ".jpg";
			} else {
            newSource = "panels/dan_panel" + currentPage + ".jpg";
			}
            $('.active_image').attr('src', newSource);
            $('.arrow_left').addClass('blank');
            return currentPage;
        } else {
            currentPage++;
			if (pageWidth < 500){
				newSource = "panels/mobile_dan_panel" + currentPage + ".jpg";
			} else {
            newSource = "panels/dan_panel" + currentPage + ".jpg";
			}
            $('.active_image').attr('src', newSource);
            return currentPage;
        }
    });
    
	if (!('ontouchstart' in document)){
    	$('.arrow_right').hover(function(){
        	$('.arrow_right').addClass('border_hover_right');
    	}, function(){
        	$('.arrow_right').removeClass('border_hover_right');
    	});
	}
    
    // Back button
    $('.arrow_left').on('click', function(){
        var newSource;
        var currentSource = $('.active_image').attr('src');
        if (currentPage == 1){
            return currentPage;
        } else {
            currentPage--;
			if (pageWidth < 500){
				newSource = "panels/mobile_dan_panel" + currentPage + ".jpg";
			} else {
            newSource = "panels/dan_panel" + currentPage + ".jpg";
			}
            $('.active_image').attr('src', newSource);
            
            if (currentPage == 1){
                $('.arrow_left').addClass('blank');
                }
            return currentPage;
        }
    });
    
   if (!('ontouchstart' in document)){
		$('.arrow_left').hover(function(){
        	$('.arrow_left').addClass('border_hover_left');
    	}, function(){
        	$('.arrow_left').removeClass('border_hover_left');
    	});
   }
    
    // Start button
    $('.start').on('click', function(){
        var newSource;
        currentPage = 1;
		if (pageWidth < 500){
				newSource = "panels/mobile_dan_panel" + currentPage + ".jpg";
			} else {
        		newSource = "panels/dan_panel" + currentPage + ".jpg";
			}
        $('.active_image').attr('src', newSource);
        $('.arrow_left').addClass('blank');
        //$('.start').addClass('blank');
        return currentPage;
    });
    

    
    // Click container to advance
    $('.image_container').on('click',function(){
        var newSource;
        var currentSource = $('.active_image').attr('src');
        if (currentPage == 1 && $('.arrow_left').hasClass('blank')){
            $('.arrow_left').removeClass('blank');
            $('.start').removeClass('blank');
        }
        if (currentPage == 26){
            currentPage = 1;
			if (pageWidth < 500){
				newSource = "panels/mobile_dan_panel" + currentPage + ".jpg";
			} else {
            	newSource = "panels/dan_panel" + currentPage + ".jpg";
			}
            $('.active_image').attr('src', newSource);
            $('.arrow_left').addClass('blank');
            return currentPage;
        } else {
            currentPage++;
			if (pageWidth < 500){
				newSource = "panels/mobile_dan_panel" + currentPage + ".jpg";
			} else {
            	newSource = "panels/dan_panel" + currentPage + ".jpg";
			}
            $('.active_image').attr('src', newSource);
            return currentPage;
        }
    })
    
}
)