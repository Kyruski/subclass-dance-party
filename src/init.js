$(document).ready(function() {
  window.dancers = [];
  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random positionß
    
    let hValue = $('body').height() * Math.random();
    let wValue = $('body').width() * Math.random();
    if ($('body').height() - hValue < 100) {
      hValue -= 100;
    }
    if ($('body').width() - wValue < 100) {
      wValue -= 100;
    }

    var dancerInstance = new dancerMakerFunction(
      hValue,
      wValue,
      Math.random() * 1000
    );
    $('body').append(dancerInstance.$node);
    window.dancers.push(dancerInstance);
  });

  $('.couchButton').on('click', function(event) {
    // makes couch visible
    let topValue = $('body').height() - 275;
    let leftValue = $('body').width() - 275;
    $('.couch').css('visibility', 'visible');
    // attracts all James images 
    $('span.jamesDancer').animate({
      top: topValue,
      left: leftValue
    }, 5000);


  });


  // $('.lineDancersUp').on('click', function(event) {
  //   var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

  //   // get the maker function for the kind of dancer we're supposed to make
  //   var dancerMakerFunction = window[dancerMakerFunctionName];

  //   // make a dancer with a random positionß

  //   var dancerInstance = new dancerMakerFunction(
  //     $("body").height() * Math.random(),
  //     $("body").width() * Math.random(),
  //     Math.random() * 1000
  //   );
  //   $('body').append(dancerInstance.$node);
  //   window.dancers.push(dancerInstance);
  //   console.log('dancers are ', window.dancers);
  // });

});

