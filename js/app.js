(function ($) {
$("#random").click(function(){
  console.log("button clicked");
})
var search = $("#search");

function searchWiki(){
  var searchValue = $('#searchValue').val();
  
}

search.click(searchWiki());

}(jQuery));
