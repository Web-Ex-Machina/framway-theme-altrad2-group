$(function(){
	$('body').on('change', '#form-equipment *[name="altrad-customer"]', function(e){
	    if(1 == $(this).val())
	      altShowWidget($('#form-equipment *[name="subsidiary"]'));
	    else
	      altHideWidget($('#form-equipment *[name="subsidiary"]'));
	  });

	  $('body').on('change', '#form-equipment *[name="topic"]', function(e){
	    altHideWidget($('#form-equipment *[name^="offer-"]'));
	    if("Information services à l’industrie" == $(this).val() || "Industrial services information" == $(this).val())
	      altShowWidget($('#form-equipment *[name="offer-service"]'));
	    else if("Information produits" == $(this).val() || "Product information" == $(this).val())
	      altShowWidget($('#form-equipment *[name="offer-product"]'));
	  });
});

document.querySelectorAll('i.fa-instagra').forEach((el)=>{
	el.classList.add('fa-instagram')
})

document.querySelectorAll('.blocks--solutions .block-card').forEach((el)=>{
	el.setAttribute('data-preset','minimalist')
})

let slidesPaddingTop = 0;
if (document.querySelector('.headerFW '))
	slidesPaddingTop += parseInt(window.getComputedStyle(document.querySelector('.headerFW ')).height );
if (document.querySelector('.mod_breadcrumb '))
	slidesPaddingTop += parseInt(window.getComputedStyle(document.querySelector('.mod_breadcrumb ')).height );
slidesPaddingTop += 'px';
document.documentElement.style.setProperty('--slides-padding-top',slidesPaddingTop );



function altShowWidget(input){
  input.closest('.widget').removeClass('hidden').addClass('mandatory').find('label').removeClass('hidden').addClass('mandatory').next('select').attr('required', 'true');
  input.closest('.widget').find('.select2-container').removeClass('hidden');
}

function altHideWidget(input){
  input.closest('.widget').addClass('hidden').removeClass('mandatory').find('label').addClass('hidden').removeClass('mandatory').next('select').removeAttr('required');
}