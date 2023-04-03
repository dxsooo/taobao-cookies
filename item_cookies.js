// ==UserScript==
// @name         淘宝商品详情页cookie抓取
// @namespace    Violentmonkey Scripts
// @version      0.1
// @description  淘宝商品详情页cookie抓取，每20s刷新并将cookie发到本地服务，本地服务将其写入到 cookies.txt
// @author       dxs
// @match        https://item.taobao.com/*
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function () {
  "use strict";

  extractToFile();

  let timeout = 20;
  console.log("%s秒后刷新: ", timeout);
  setTimeout(() => {
    location.reload();
    extractToFile();
  }, timeout * 1000);

  function extractToFile() {
    console.log("extractToFile");
    const cookies = document.cookie;
    console.log(cookies);

    var fd = new FormData();
    fd.set("content", cookies);
    GM_xmlhttpRequest({
      method: "post",
      url: "http://127.0.0.1:5000/append",
      data: fd,
      onload: (res) => {
        console.log(res.responseText);
      },
    });
  }
})();
