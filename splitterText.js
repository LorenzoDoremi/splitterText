function splitterText(options) {

    // for readability, save variables of the options.
    var id = options.id;
    var text = document.getElementById(id).innerHTML;
    var containerclass = options.containerclass != null ? options.containerclass : "mask";
    var mclass = options.class != null ? options.class : "splitterLetter";
    var l = []; // return string
    var from = options.from; 
    var to = options.to;
    var escape = options.escape != null ? options.escape : " ";

    for (var i = 0; i < text.length; i++) {
      if (text.charAt(i) !=  escape)
        l +=
          '<div class="' +
          containerclass +
          '"> <span class="' +
          mclass +
          '" del="' +
          i +
          '">' +
          text.charAt(i) +
          "</span></div>";
      else l += "<br />";
    }
    // create elements inside target
    document.getElementById(id).innerHTML = l;



    // add custom CSS to elements
    containers = document.getElementsByClassName(containerclass);
    letters = document.getElementsByClassName(mclass);
    for (var i = 0; i < containers.length; i++) {
      containers[i].style.overflow = "hidden";
      containers[i].style.display = "inline-block";
    }
    for (var i = 0; i < letters.length; i++) {
      letters[i].style.display = "block";
    }



    // animate elements
    gsap.from("." + mclass, from);
    gsap.to("." + mclass, to);
  }