function showMore() {
    var continuation = document.getElementById("continuation");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("showmore");
  
    if (continuation.style.display === "none") {
      continuation.style.display = "inline";
      btnText.innerHTML = `Show more <img src="img/showmore.png" width="15px" style="margin-left:5px;">`; 
      moreText.style.display = "none";
    } else {
      continuation.style.display = "none";
      btnText.innerHTML = `Show less <img src="img/showless.png" width="15px" style="margin-left:5px;">`; 
      moreText.style.display = "inline";
    }
  }