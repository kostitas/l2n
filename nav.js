document.ready(function(){
  function removeActive() {
    $(".nav").find(".active").each(function() {
      $(this).removeClass("active");
    });
  }
  $("#news").click(ifunction(e)) {
    e.preventDefault();
    $.get("news.html", null, function(data) {
      $("#content").html(data);
      removeActive();
      $("#index").addClass("active");
    }); 
  });
  $("#features").click(function(e) {
    e.preventDefault();
    $.get("features.html", null, function(data) {
      $("#content").html(data);
      removeActive();
      $("#features").addClass("active")
    });
  });
  
})
