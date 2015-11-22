var photo = document.getElementById('photo');

var div_photo = photo.getElementsByTagName('div');

function display_name (){
    // div_photo[0].className = "images";
   var title = div_photo[0].getElementsByTagName('h2');
   title.className = "noheader";
}

div_photo[0].addEventListener('mouseover', display_name);
