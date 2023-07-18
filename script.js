let waitHide = () => {
  return new Promise((resolve, reject) => {
    $(document).ready(function () {
      $("#bell").on("click", function () {
        $(this).hide();
        setTimeout(() => resolve('vanished'), 3000);
      });
    });
    
  });
};

waitHide()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log("error: " + error);
  });

let waitAlert = () => {
  return new Promise((resolve, reject) => {
    $(document).ready(function () {
      $("#mark").on("click", function () {
        alert("hai premuto il pulsante");
        setTimeout(() => resolve('boo'), 3000);
      });
    });
    
  });
};

waitAlert()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log("error: " + error);
  });
