const cookieBox = document.querySelector(".wrapper"),
acceptBtn = cookieBox.querySelector(".buttons button");
const cookies = document.cookie
let cookiesEnabled = False
acceptBtn.onclick = ()=>{


  document.cookie = 'Enabled? = True'
  if(document.cookie) {
    cookieBox.classList.add('hide')
  } else {
    alert("ERROR:\nCookies could not be Enabled")
  }
}

// Check for set cookie and hide prompt if so
let checkCookie = document.cookie.indexOf("Enabled?")

window.onload = function() {
  if (cookies - 3 < 1) {
    cookieBox.classList.remove('hide')
     cookiesEnabled = True
  } else {
    cookieBox.classList.add('hide')
    cookiesEnabled = False
  }
}

console.log(checkCookie)