/*var loader = new PxLoader(), 
    mobileimage1 = loader.addImage('panels/mobile_contact_panel1.jpg'), 
    headerimage = loader.addImage('panels/title_contact.png'),
    byimage = loader.addImage('panels/by_mary_shyne.png'), 
    rightarrowimage = loader.addImage('panels/right-arrow.png'), 
    leftarrowimage = loader.addImage('panels/left-arrow.png'), 
    start = loader.addImage('panels/start.png');
    
loader.start();*/

$(document).ready(function(){
    var currentPage = 1;
    var pageWidth = window.innerWidth;
    }
);

	//Load incredibly annoying elements
	/*if (pageWidth < 500){
	    $('.author_name_image').append('<img alt="" src="panels/mobile_by_mary_shyne.jpg"/>');
	    $('.title_image').append('<img alt="" src="panels/mobile_title_contact.jpg"/>');
		$('.image_container').append('<img class="active_image" alt="" src="panels/mobile_contact_panel1.jpg"/>');
	}else{
	   $('.title_image').append('<img alt="" src="panels/title_contact.png"/>');
        $('.author_name_image').append('<img alt="" src="panels/by_mary_shyne.png"/>');
		$('.image_container').append('<img class="active_image" alt="" src="panels/contact_panel1.jpg"/>');
	}*/

	
	//Load mouseover images
	/*var arrowRightMouseover = new Image();
	arrowRightMouseover.src = "panels/right-arrow-hover.png";
	var arrowRightMouseoverImage = arrowRightMouseover.src;
	
	var arrowLeftMouseover = new Image();
	arrowLeftMouseover.src = "panels/left-arrow-hover.png";*/
	
    // Forward button
    /*$('.arrow_right').on('click', function(){
        var newSource;
        var currentSource = $('.active_image').attr('src');
        if (currentPage == 1 && $('.arrow_left').hasClass('blank')){
            $('.arrow_left').removeClass('blank');
            //$('.start').removeClass('blank');
        }
        if (currentPage == 73){
            currentPage = 1;
			if (pageWidth < 500){
				newSource = "panels/mobile_contact_panel" + currentPage + ".jpg";
			} else {
            newSource = "panels/contact_panel" + currentPage + ".jpg";
			}
            $('.active_image').attr('src', newSource);
            return currentPage;
        } else {
            currentPage++;
			if (pageWidth < 500){
				newSource = "panels/mobile_contact_panel" + currentPage + ".jpg";
			} else {
            newSource = "panels/contact_panel" + currentPage + ".jpg";
			}
            $('.active_image').attr('src', newSource);
            return currentPage;
        }
    });*/
    
	/*if (!('ontouchstart' in document)){
    	$('.arrow_right').hover(function(){
        	$('.arrow_right').addClass('border_hover_right');
    	}, function(){
        	$('.arrow_right').removeClass('border_hover_right');
    	});
	}*/
    
    // Back button
   	/*$('.arrow_left').on('click', function(){
        var newSource;
        var currentSource = $('.active_image').attr('src');
        if (currentPage == 1){
            return currentPage;
        } else {
            //console.log(currentPage);
            currentPage--;
			if (pageWidth < 500){
				newSource = "panels/mobile_contact_panel" + currentPage + ".jpg";
			} else {
            newSource = "panels/contact_panel" + currentPage + ".jpg";
			}
            $('.active_image').attr('src', newSource);
            
            if (currentPage == 1){
                $('.arrow_left').addClass('blank');
                //$('.start').addClass('blank');
                }
            return currentPage;
        }
    });*/
    
   /*if (!('ontouchstart' in document)){
		$('.arrow_left').hover(function(){
        	$('.arrow_left').addClass('border_hover_left');
    	}, function(){
        	$('.arrow_left').removeClass('border_hover_left');
    	});
   }*/
    
    // Start button
    /*$('.start').on('click', function(){
        var newSource;
        currentPage = 1;
		if (pageWidth < 500){
				newSource = "panels/mobile_contact_panel" + currentPage + ".jpg";
			} else {
        		newSource = "panels/contact_panel" + currentPage + ".jpg";
			}
        $('.active_image').attr('src', newSource);
        $('.arrow_left').addClass('blank');
        //$('.start').addClass('blank');
        return currentPage;
    });*/
    

    
    // Click container to advance
    /*$('.image_container').on('click',function(){
        var newSource;
        var currentSource = $('.active_image').attr('src');
        if (currentPage == 1 && $('.arrow_left').hasClass('blank') && $('.start').hasClass('blank')){
            $('.arrow_left').removeClass('blank');
            $('.start').removeClass('blank');
        }
        if (currentPage == 73){
            currentPage = 1;
			if (pageWidth < 500){
				newSource = "panels/mobile_contact_panel" + currentPage + ".jpg";
			} else {
            	newSource = "panels/contact_panel" + currentPage + ".jpg";
			}
            $('.active_image').attr('src', newSource);
            return currentPage;
        } else {
            currentPage++;
			if (pageWidth < 500){
				newSource = "panels/mobile_contact_panel" + currentPage + ".jpg";
			} else {
            	newSource = "panels/contact_panel" + currentPage + ".jpg";
			}
            $('.active_image').attr('src', newSource);
            return currentPage;
        }
    })*/
    
    //Swipe right (prototype)
    /*$('.image_container').on('swiperight',function(){
        var newSource;
        var currentSource = $('.active_image').attr('src');
        if (currentPage == 1 && $('.arrow_left').hasClass('blank') && $('.start').hasClass('blank')){
            $('.arrow_left').removeClass('blank');
            $('.start').removeClass('blank');
        }
        if (currentPage == 73){
            currentPage = 1;
            newSource = "panels/contact_panel" + currentPage + ".jpg";
            $('.active_image').attr('src', newSource);
            return currentPage;
        } else {
            currentPage++;
            newSource = "panels/contact_panel" + currentPage + ".jpg";
            $('.active_image').attr('src', newSource);
            return currentPage;
        }
    });*/
    
    //Swipe left (prototype)
        /*$('.image_container').on('swipeleft', function(){
        var newSource;
        var currentSource = $('.active_image').attr('src');
        if (currentPage == 1){
            return currentPage;
        } else {
            //console.log(currentPage);
            currentPage--;
                        console.log(currentPage);
            newSource = "panels/contact_panel" + currentPage + ".jpg";
            $('.active_image').attr('src', newSource);
            
            if (currentPage == 1){
                $('.arrow_left').addClass('blank');
                $('.start').addClass('blank');
                }
            return currentPage;
        }
    });*/

