 jQuery(function($){
//  D O C U M E N T • R E A D Y
	$(document).ready(function() {
		
	   	// S L I C K • C O D E
	   	$('.carousel').slick({
				autoplay		: true,
				autoplaySpeed	: 5000,
				dots			: true
	   	});
 	
	  // Y O U T U B E  V I D E O  W R A P P E R
	  $('iframe[src*="youtube"]').wrap("<div class='videoWrapper'></div>");

		// E N Q U I R E  J S -- M E D I A   Q U E R I E S
		enquire.register("screen and (max-width:30em)", {

	    // OPTIONAL
	    // If supplied, triggered when a media query matches.
	    // match : function() {
	    	
	    // 	$('#footer-container').append('<div class="menulayout">«</div><nav class="mainmenu"><ul><li><a href="#skills">Skills</a></li><li><a href="#services">Services</a></li><li><a href="#portfolio">Portfolio</a></li></ul></nav>');

	    // 	$('nav.mainmenu').addClass('mobile');
	    	
	    // 	$('.menulayout').click(function(e){
	    // 		e.preventDefault();
	    // 		e.stopPropagation();
	    // 		$(this).toggleClass("close");
	    // 	 	$('nav.mainmenu').slideToggle();
	    	 	
	    // 	});

	    // 	$('html').click(function() {
	    // 		$('nav.mainmenu.mobile').slideUp();
	    // 	});

	    // 	$('#menu-mainmenu > li').show();


	    // },      
	                                
	    // // OPTIONAL
	    // // If supplied, triggered when the media query transitions 
	    // // *from a matched state to an unmatched state*.
	    // unmatch : function() {

	    // 	$('.menulayout').remove();
	    // 	$('nav.mainmenu').removeClass();
	    // 	//$('nav.mainmenu').show();
	    // }  
		});

		// enquire.register("screen and (min-width:40.0625em)", {

		//     match : function() {

		    	
		//     }
		      
		// });


		// L I G H T B O X
		$('.gallery-item a').click(function(e) {
			//prevent default action (hyperlink)
			e.preventDefault();
			
			//Get clicked link href
			var image_href = $(this).attr("href");
			
			/* 	
			If the lightbox window HTML already exists in document, 
			change the img src to to match the href of whatever link was clicked
			
			If the lightbox window HTML doesn't exists, create it and insert it.
			(This will only happen the first time around)
			*/
			
			if ($('#lightbox').length > 0) { // #lightbox exists
				
				//place href as img src value
				$('#content').html('<img src="' + image_href + '" />');
			   	
				//show lightbox window - you could use .show('fast') for a transition
				$('#lightbox').show();
			}
			
			else { //#lightbox does not exist - create and insert (runs 1st time only)
				
				//create HTML markup for lightbox window
				var lightbox = 
				'<div id="lightbox">' +
					'<p>Cerrar</p>' +
					'<div id="content">' + //insert clicked link's href into img src
						'<img src="' + image_href +'" />' +
					'</div>' +	
				'</div>';
					
				//insert lightbox HTML into page
				$('body').append(lightbox);
			}
				
		});
			
		//Click anywhere on the page to get rid of lightbox window
		$('body').delegate('#lightbox', 'click', function() { //must use live, as the lightbox element is inserted into the DOM
			$('#lightbox').hide();
		});
		
		var year = new Date();
		$('#year').html(year.getFullYear());

	});

});


//MEDIA QUERIES

// 640px = 40em
// 1024px = 64em
// 1280 = 80em
