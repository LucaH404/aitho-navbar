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
  $("#darkmode").on("click", function () {
      $("#wrapper").toggleClass("wrapper")
    
  });
});