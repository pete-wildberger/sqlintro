
$(onReady);

function onReady(){
console.log('JS/JQ loaded');
addImage();
getImages();
}

var getImages = function(){
  $.ajax({
    type: 'GET',
    url: '/images',
    success: function(response ){
      console.log(response);
    }
  });
};

var addImage = function(){
  // test get call to server
  var objectToSend = {
    thing: 'meow'
  }; //end objectToSend
  $.ajax({
    type: 'POST',
    url: '/images',
    data: objectToSend,
    success: function( response ){
      console.log( 'back from post call with:', response );
    } // end success
  }); // end ajax
}; // end getImages
