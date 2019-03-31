var apiKey = "LFq0N7JpXkZoaIf7CB9WBL9R8zOI6jhL"; // Your API Key/Client ID.
// If you don't have one, go get it here: https://www.behance.net/dev/register
var user = "saif-suboo5d73"; // This is your behance username

$(function() {
  $.ajax({
    url:
      "https://api.behance.net/v2/users/" +
      user +
      "/projects?client_id=" +
      apiKey,
    dataType: "jsonp",
    success: function(results) {
      var projectsArray = new Array();
      for (var i = 0; i < 21; i++) {
        var project = results.projects[i];

        var output;
        output =
          '<div class="col-md-6 col-lg-4 col-xs-12" data-aos="fade-right" data-aos-delay="200" data-aos-offset="300"><a target="_blank" href="' +
          project.url +
          '"><div class="project-container"><div class="img-backdrop"></div><div class="description-container"><h2 class="caption">' +
          project.name +
          '</h2></div><img src="' +
          project.covers[404] +
          '" class="img-responsive"></div></a></div>';

        projectsArray.push(output);
      }
      var $content = $("#behance-feed .row");
      $content.html(projectsArray);
    }
  });
});
