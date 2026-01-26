$(window).on('load', function() {
	$('.menu').on('click', function() {
		$('.group').toggleClass('active');
		$('.nav').toggleClass('active');
	});

	// 

	$('.carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:false,
	    dots:false,
	    autoplay:true,
    	autoplayTimeout:5000,
	    responsive:{
	        0:{
	            items:1.1
	        },
	        426:{
	            items:1.2
	        },
	        769:{
	            items:2.2
	        },
	        1024:{
	            items:3
	        }
	    }
	});

	$('.benefits .owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:false,
	    dots:false,
	    autoplay:true,
    	autoplayTimeout:3000,
	    responsive:{
	        0:{
	            items:1.5
	        },
	        426:{
	            items:2.2
	        },
	        769:{
	            items:3.5
	        },
	        1024:{
	            items:5
	        }
	    }
	});

	$('.brands .owl-carousel').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:false,
	    dots:false,
	    autoWidth:true,
	    autoplay:true,
    	autoplayTimeout:1000,
	    responsive:{
	        0:{
	            items:2
	        },
	        769:{
	            items:5
	        },
	        1024:{
	            items:8
	        }
	    }
	});

	$('.jungle .owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:false,
	    dots:true,
	    responsive:{
	        0:{
	            items:2
	        },
	        426:{
	            items:3
	        },
	        769:{
	            items:5
	        },
	        1024:{
	            items:6
	        }
	    }
	});
});