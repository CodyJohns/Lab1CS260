var mshown = false;
$(".menu_bar").click(function() {
  if(!mshown) {
    document.body.style.background = "#111";
	$("#content").animate({marginLeft: "-70%"});
	$("#mob_menu").animate({width: "70%"});
	$("#mob_menu").show(0, function() {
		mshown = true;
	});
  } else {
    $("#content").animate({marginLeft: "0px"});
	$("#mob_menu").animate({width: "0%"});
	$("#mob_menu").hide(0, function() {
		document.body.style.backgroundImage = "url(imgs/homeforest.jpg)";
		document.body.style.backgroundAttachment = "fixed";
		document.body.style.backgroundRepeat = "no-repeat";
		document.body.style.backgroundPosition = "center";
	});
	mshown = false;
  }
});