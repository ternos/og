window.onload = function() {
    console.log("a")
    var f = document.querySelector('meta[property="og:image"]')
    f.attributes[1].value = "https://avatars.mds.yandex.net/get-zen-pub-og/2978046/pub_5ed79652dab262760c6da9c4_5ed8f6fe7cacad43f4028eb8/fb"
    console.log(f.attributes[1].value)
 };