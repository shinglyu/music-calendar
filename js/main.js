window.addEventListener('load', function(){
  /*
  var date_elem = document.getElementById("date");
  var time = new Date();
  date_elem.innerText = (time.getMonth()+1) + "/" + time.getDate();
  */

  // TODO: make this dynamic
  var list = bach_all;
  var title = list[Math.floor(Math.random() * list.length)];

  var y_link_elem = document.getElementById('youtube_link');
  y_link_elem.href = "https://youtube.com/results?search_query=" + encodeURI(title);
  //y_link_elem.target= "_blank";

  var s_link_elem = document.getElementById('spotify_link');
  s_link_elem.href = "spotify:search:" + encodeURI(title);
  //s_link_elem.target= "_blank";

  var title_elem = document.getElementById("music_title");
  //title_elem.innerText = "";
  title_elem.innerText = title;
});
