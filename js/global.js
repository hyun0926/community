$(function() {
  // radio, checkbox style
  $(".iCheck").iCheck({
    checkboxClass: 'icheckbox_flat-red',
    radioClass: 'iradio_flat-red'
  });	
  // tab 메뉴
  $('.tabList a').click(function(e){
    e.preventDefault();
    $('.tabList a, .tabCon').removeClass('current');
    $(this).add($($(this).attr('href'))).addClass('current');
  });
	//open popup + 1
	$('.popup01').on('click', function(event){
		event.preventDefault();
		$('.popupCon01').addClass('is-visible');
	});
	//open popup + 2
	$('.popup02').on('click', function(event){
		event.preventDefault();
		$('.popupCon02').addClass('is-visible');
	});
	//open popup PIN
	$('.popupPin').on('click', function(event){
		event.preventDefault();
		$('.popupPinCon').addClass('is-visible');
	});	
	//close popup
	$('.cd-popup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
		if(event.which=='27'){
			$('.cd-popup').removeClass('is-visible');
		}
	});	
	// slide menu
	var swiper = new Swiper('.slide_menu', {
		slidesPerView: 4,
		spaceBetween: 0,
		// init: false,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			1920: {
				slidesPerView: 6,
				spaceBetween: 00,
			},
			768: {
				slidesPerView: 4,
				spaceBetween: 0,
			},
			640: {
				slidesPerView: 3,
				spaceBetween: 0,
			},
			320: {
				slidesPerView: 3,
				spaceBetween: 0,
			}
		}
	});	
	
	
	$(document).ready(function(){
		$('.dropdown__select').on('click',function(){
			$(this).siblings('.dropdown__options-wrap').toggleClass('active');
			if($(this).hasClass("active")){
				$(this).removeClass("active");
			}else{
				$(this).addClass("active");
			}
		});
		$('.dropdown .dropdown__option').on('click',function(){
			var html = $(this).html();
			var value = $(this).find('span').data('value');
			$(this).closest('.dropdown__options-wrap').siblings('.dropdown__select').find('.dropdown__select-wrap').html(html);
			$(this).closest('.dropdown__options-wrap').removeClass('active');
			$(this).closest('.dropdown__options-wrap').prev().removeClass('active');
			$(this).closest('.dropdown').data('value',value);
		});
	});	
	
	
});

$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.cover').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
});
