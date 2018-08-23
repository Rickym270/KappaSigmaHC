/*
  This function handles scroll events. When the scrollTop distance is greater than 400 * Aprox the "Where we're at" section * The condiiton triggers and creates a countUp action
*/
$(window).scroll(function(){
  // On window scroll
  if($(window).scrollTop()>390){
    // If distnace from top is greater than 400
    $('.counter').each(function () {
      var $this = $(this),
      countTo = $this.attr('data-count');

      $({ countNum: $this.text()}).animate({
        // Animate the text to what is specified in the countTo variable. Recall, this is set in the data-count attr in the HTML tag.a
        countNum: countTo
      },{
        // Count up to the number in 2 seconds.
        duration: 1000,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });  
    });
  }
});;