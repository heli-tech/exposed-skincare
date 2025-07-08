// Mobile toogle nav
function showSidebar() {
			    const sidebar = document.querySelector(".sidebar");
			    sidebar.style.display = 'flex';
			    setTimeout(() => {
			        sidebar.style.transform = 'translateX(0)'; 
			    }, 10);
			}

			function closeSidebar() {
			    const sidebar = document.querySelector(".sidebar");
			    sidebar.style.transform = 'translateX(100%)'; 
			    setTimeout(() => {
			        sidebar.style.display = 'none';
			    }, 300);
}


$('.mobile-banner-slider .slider-wrapper').slick({
				  slidesToShow: 1.2,
				  slidesToScroll: 1,
				  autoplay: true,
				  autoplaySpeed: 2000,
				  dots:true,
				  arrows:false,
				  variableWidth: true,
				  infinite: false,

				});


			$('.icon-text-slider').slick({
				  slidesToShow: 5,
				  slidesToScroll: 5,
				  autoplay: true,
				  autoplaySpeed: 2500,
				  dots:false,
				  arrows:false,
				  infinite: true,
				  responsive: [
					    {
					      breakpoint: 1199,
					      settings: {
					       	  slidesToShow: 3,
				  			  slidesToScroll: 3,
					      }
					    },
					    {
					      breakpoint: 991,
					      settings: {

					      	slidesToShow: 1.8,
				  			  slidesToScroll: 1,
					  
					      }
					    }
					  ]
				});