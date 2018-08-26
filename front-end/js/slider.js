  $(document).ready(function() {
 
  var owl = $("#block");
 
  owl.owlCarousel({
      autoPlay :100,
      items : 5, //10 items above 1000px browser width
      itemsDesktop : [1000,5], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
  });
 
  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
  $(".play").click(function(){
    owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
  })
  $(".stop").click(function(){
    owl.trigger('owl.stop');
  })
 
});
    
    $(document).ready(function() {
 
  var owl = $("#womens");
 
  owl.owlCarousel({
      autoPlay :100,
      items :5, //10 items above 1000px browser width
      itemsDesktop : [1000,5], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
  });
 
  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
  $(".play").click(function(){
    owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
  })
  $(".stop").click(function(){
    owl.trigger('owl.stop');
  })
 
});
    $(document).ready(function() {
 
  var owl = $("#mens");
 
  owl.owlCarousel({
      autoPlay :100,
      items :5, //10 items above 1000px browser width
      itemsDesktop : [1000,5], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
  });
 
  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
  $(".play").click(function(){
    owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
  })
  $(".stop").click(function(){
    owl.trigger('owl.stop');
  })
 
});



    jQuery(document).ready(function(){
  
    var sync1 = $("#slider");
  var sync2 = $("#navigation");
  
  var flag = false;
  
  var slides = sync1.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:false,
    autoplayTimeout:6000,
    autoplayHoverPause:false,
    nav: false,
    dots: true
  });
  var thumbs = sync2.owlCarousel({
        items:4,
    loop:false,
    margin:10,
    autoplay:false,
    nav: false,
    dots: false
  }).on('click', '.owl-item', function(e) {
        e.preventDefault(); 
        sync1.trigger('to.owl.carousel', [$(e.target).parents('.owl-item').index(), 300, true]);
  }).on('change.owl.carousel', function(e) {
                if (e.namespace && e.property.name === 'position' && !flag) {
                //nsole.log('...');
    }
  }).data('owl.carousel');

});
    $(document).ready(function(){

            //-- Click on QUANTITY
            $(".btn-minus").on("click",function(){
                var now = $(" div > input").val();
                if ($.isNumeric(now)){
                    if (parseInt(now) -1 > 0){ now--;}
                    $(" div > input").val(now);
                }else{
                    $(" div > input").val("1");
                }
            })            
            $(".btn-plus").on("click",function(){
                var now = $(" div > input").val();
                if ($.isNumeric(now)){
                    $(" div > input").val(parseInt(now)+1);
                }else{
                    $(" div > input").val("1");
                }
            })                        
        }) 