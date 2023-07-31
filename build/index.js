"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Convert waitHide and waitAlert functions to use promises instead of alerts
function waitHide() {
    return new Promise((resolve) => {
        alert("you clicked the english alert ;)");
        const response = "english";
        setTimeout(() => {
            console.log(response);
            resolve();
        }, 3000);
    });
}
function waitAlert() {
    return new Promise((resolve) => {
        alert("hai premuto il pulsante");
        const responseAlert = "boo";
        setTimeout(() => {
            console.log(responseAlert);
            resolve();
        }, 3000);
    });
}
// TypeScript equivalent for the remaining code
$(function () {
    $("#bell").on("click", function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield waitHide();
        });
    });
});
$(function () {
    $("#mark").on("click", function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield waitAlert();
        });
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
        $("#wrapper").toggleClass("wrapper");
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
let isCalled = false;
let limit = 10;
let skip = 0;
let count = 0;
function fetchAPI() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const url = `https://dummyjson.com/comments?skip=${skip}&limit=${limit}`;
            const response = yield fetch(url);
            const data = yield response.json();
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
        }
        catch (err) {
            console.log("Request Failed", err);
        }
    });
}
const incCount = () => {
    return count++;
};
$(function () {
    $("#comment-event").on("click", function () {
        if (isCalled === false) {
            fetchAPI();
            $("#counter").empty().append(`Lettura blocco: ${count}`);
            $("#more").empty().append(`Leggi il prossimo blocco  (${count + 1})`);
            isCalled = true;
        }
        else {
            return null;
        }
        $("#comment-section").show();
        $("div.comment-box").show();
        setTimeout(() => $("#more").show(), 240);
    });
});
const showMore = () => {
    skip += limit;
    limit = 10;
    incCount();
    fetchAPI();
};
$(function () {
    $("div.comment-box").hide();
    $("#comment-section").hide();
    $("#more").hide();
    $("#more").on("click", function () {
        showMore();
        $("#counter").empty().append(`Lettura blocco: ${count}`);
        $("#more").empty().append(`Leggi il prossimo blocco  (${count + 1})`);
    });
});
