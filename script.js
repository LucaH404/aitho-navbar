async function waitHide() {
  try {
    alert("you clicked the english alert ;)");
    const response = "english";
    setTimeout(() => console.log(response), 3000);
  } catch (err) {
    console.log("Request Failed" + err);
  }
}

$(function () {
  $("#bell").on("click", function () {
    waitHide();
  });
});
async function waitAlert() {
  try {
    await alert("hai premuto il pulsante");
    const responseAlert = "boo";
    setTimeout(() => console.log(responseAlert), 3000);
  } catch (err) {
    console.log("Request Failed", err);
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

    currentSrc === "./icon/aitho-icon.png"
      ? $("img.nav-icon").attr("src", "./icon/aitho-icon-white.png")
      : $("img.nav-icon").attr("src", "./icon/aitho-icon.png");
  }
  $("#darkmode").on("click", function () {
    $("#wrapper").toggleClass("wrapper"),
    $("a.nav-link").toggleClass("nav-link-dark");
    $("#navbar").toggleClass("darkmode");
    $("#bell").toggleClass("bell-dark");
    const src = "./icon/aitho-icon-white.png";
    $("img.nav-icon").attr("src", src);
    $("#darkmode").click(toggleImg);
    $("div.cell").toggleClass("cell-dark");
    $("#comment-section").toggleClass("dark-table");
  });
});

let isCalled = false
let limit = 10;
let skip = 0
async function fetchAPI() {
  try {
    const url = `https://dummyjson.com/comments?skip=${skip}&limit=${limit}`;
    const response = await fetch(url);
    const data = await response.json();
    const comments = data.comments;

    const commentArr = comments.map((comment) => {
      return `
        <tbody>
          <tr>
            <th scope="row">${comment.id}</th>
            <td>${comment.user.username}</td>
            <td>${comment.body}</td>
          </tr>
        </tbody>
      `;
    });

    const commentsAsString = commentArr.join("");
    $("#comment-section").append(commentsAsString);
  } catch (err) {
    console.log("Request Failed", err);
  }
  console.log(limit);
}


$(function () {
  $("#comment-event").on("click", function () {
    if (isCalled === false) {
      fetchAPI();
      isCalled = true
    }
    else{
      return null
    }
    $("#comment-section").show();
    $("div.comment-box").show();
    setTimeout(() => $("#more").show(), 240);
  });
});

const showMore = () => {
  skip += limit
  limit = 10;
  fetchAPI();
  console.log
};

$(function () {
  $("div.comment-box").hide();
  $("#comment-section").hide();
  $("#more").hide();
  $("#more").on("click", function () {
    showMore();
  });
});

//sistemare la tabella 