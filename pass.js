const valispan = document.querySelectorAll(".validation");
const pwd = document.querySelector(".pw");
const pwdcheck = document.querySelector(".pwcheck");

const check = (event) => {
    if (pwd.value!=="" && pwdcheck.value!=="" 
    &&pwd.value === pwdcheck.value) {
        valispan[0].innerHTML = "✅";
        valispan[1].innerHTML = "✅";
      }else{
        valispan[0].innerHTML = "❌";
        valispan[1].innerHTML = "❌";
      }
}

pwd.addEventListener('keyup', check);
pwdcheck.addEventListener('keyup',check);