(function ($) {
$("#random").click(function(){
  console.log("button clicked");
})
var search = $("#search");

function searchWiki(){
  var searchValue = $('#searchValue').val();
  var loading = $('#loading');
  loading.show();
  $.ajax( {
    url: "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch="
    + searchValue + "&prop=revisions&rvprop=content&format=json",
    dataType: 'json',
    type: 'POST',
    headers: { 'Api-User-Agent': 'Example/1.0' },
    success: function(data) {
      var resData = JSON.stringify(data);
    //  console.log(resData);
     resData = JSON.parse(resData);
    // console.log('Search results: ' + resData.query.search[0]);
     var search = resData.query.search;
     var results = $('#results');
     loading.hide();
     for(var i = 0; i<search.length; i++){
       results.append("<a href='https://en.wikipedia.org/wiki/"+ search[i].title +
       "' target='_blank'<p><span class='title'>" + search[i].title + ":    </span>"
       + search[i].snippet +"...</p></a>");
     }
    }
} );
}

search.click( function(){
  searchWiki();
});

}(jQuery));
