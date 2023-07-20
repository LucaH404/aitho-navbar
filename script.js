async function waitHide() {
  try{
    alert('you clicked the english alert ;)')
    const response = 'english'
    setTimeout(() => console.log(response), 3000);
  }
  catch (err){
    console.log('Request Failed' + err)
  }
}

 $(function () {
  $("#bell").on("click", function () {
       waitHide();
    });
});
async function waitAlert() {
  try{
    await alert("hai premuto il pulsante")
    const responseAlert = 'boo';
    setTimeout(() => console.log(responseAlert), 3000);
  }
  catch (err) {
    console.log('Request Failed', err); 
    
  }
}

$(function () {
    $("#mark").on("click", function () {
        waitAlert();
    });
});

$(function () {
  function toggleImg() {
    var currentSrc = $("img.nav-icon").attr("src");

    currentSrc === "./icon/aitho-icon.png" ? $("img.nav-icon").attr("src", "./icon/aitho-icon-white.png") : $("img.nav-icon").attr("src", "./icon/aitho-icon.png")
  }
  $("#darkmode").on("click", function () {
      $("#wrapper").toggleClass("wrapper"),
      $("a.nav-link").toggleClass("nav-link-dark")
      $("#navbar").toggleClass("darkmode")
      $("#bell").toggleClass("bell-dark")
      const src = "./icon/aitho-icon-white.png"
      $("img.nav-icon").attr("src", src);
      $("#darkmode").click(toggleImg);
      
  });
});