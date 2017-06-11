(function ($) {

var search = $("#search");

function searchWiki(){
  var searchValue = $('#searchValue').val();
  var loading = $('#loading');
  var results = $('#results');
  results.empty();
  loading.show();
  $.ajax( {
    url: "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch="
    + searchValue + "&srlimit=50&prop=revisions&rvprop=content&format=json",
    dataType: 'json',
    type: 'POST',
    headers: { 'Api-User-Agent': 'Example/1.0' },
    success: function(data) {
      var resData = JSON.stringify(data);
    //  console.log(resData);
     resData = JSON.parse(resData);
    // console.log('Search results: ' + resData.query.search[0]);
     var search = resData.query.search;
     console.log("Total: " + search.length);
     loading.hide();
     for(var i = 0; i<search.length; i++){
       results.append("<div class='snippet'><a href='https://en.wikipedia.org/wiki/"+ search[i].title +
       "' target='_blank'<p><span class='title'>" + search[i].title + ":    </span>"
       + search[i].snippet +"...</p></a></div>");
     }
     $("#foot").css("position", "relative");
    }
} );
}

search.click( function(){
  searchWiki();
});

// add keybinding for enter to trigger submit click
$('#searchValue').keypress(function(e){
  if(e.which == 13){//Enter key pressed
    search.click();//Trigger search button click event
  }
});



}(jQuery));
