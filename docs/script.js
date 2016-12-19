var map = {
  "resume-link": "resume",
  "writings-link": "writings",
  "email-link": "email: markmmoyou@gmail.com",
  "facebook-link": "facebook",
  "linkedin-link": "linkedin",
  "github-link": "github: MarkMoTrin",
};

$(".link").each(function(index) {
  $(this).hover(function() {
    var key = $(this).attr('id');
    $("#hello-link").text(map[key] + ". ");
  }, function() {
    $("#hello-link").text("keep pushing.");
  });
});

