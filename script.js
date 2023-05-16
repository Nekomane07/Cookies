const cookieBox = document.querySelector(".wrapper"),
acceptBtn = cookieBox.querySelector(".buttons button");

acceptBtn.onclick = ()=>{
  // cookie is set to expire after a month
document.cookie = "CookieBy=CookieTester; max-age="+60*60*24*30
  if(document.cookie) {
    alert("Cookies Have Been Enabled")
    cookieBox.classList.add('hide')
  } else {
    alert("ERROR:\nCookies could not be Enabled")
  }
}

// Check for set cookie and hide prompt if so
let checkCookie = document.cookie.indexOf("CookieBy=CookieTester")
checkCookie != 1 ? cookieBox.classList.add('hide'): cookieBox.classList.remove('hide')
console.log(checkCookie)