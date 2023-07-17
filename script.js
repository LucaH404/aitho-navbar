let waitHide = () => {
    return new Promise((resolve, reject) => {
      $(document).ready(function() {
        $("#bell").click(function() {
          $(this).hide();
          resolve(); 
        });
      });
    });
  }
  
waitHide()
.then(() => {
    console.log("vanished");
})
.catch((error) => {
    console.log("error: " + error);
});
  
let waitAlert = () => {
    return new Promise((resolve, reject) => {
        $(document).ready(function() {
            $("#mark").click(function() {
                alert('hai premuto il pulsante')
                resolve();
            })
        });
    })
}

waitAlert().then(() => {
    console.log("boo");
}).catch((error) => {
    console.log("error: " + error)
})
