/*typed js*/
var typed = new Typed('.type', {
  strings: [
        'Web Developer',
        'Graphic Designer',
        'Content Creator'
        ],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});
/*typed js*/
/*menu*
var menu = document.getElementById("menu");
var nav = document.getElementById("side-nav");

nav.style.width="0px";
menu.onclick =function() {
  if (nav.style.width=="0px"){
    nav.style.width="250px;"
  }
  else {
    nav.style.width="0px"
  }
};
menu*/
/*send email
function sendEmail() {
 Email.send({
    Host : "smtp.gmail.com",
    Username : "abutalhabd06@gmail.com",
    Password : "hufgskbqqqegeevk",
    To : 'anowarriver@gmail.com',
    From : document.getElementById("email").valu,
    Subject : "This is the subject",
    Body : "Name: " + document.getElementById("name").value
    + "<br> Email: " + document.getElementById("email").value
    + "<br> Phone No: " + document.getElementById("number").value
    + "<br> Massage: " + document.getElementById("massege").valu
}).then(
  message => alert(message)
);
}*/
//preloader//
var loader = document.getElementById("loader");
window.addEventListener("load", function() {
  loader.style.display=('none');
});
//status//
window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("form");
  // var button = document.getElementById("my-form-button");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    innerHTML = swal({
  title: "Thanks!",
  text: "Your Submission! Successful",
  icon: "success",
});
  }

  function error() {
   innerHTML = swal({
                title: "Oops!",
                text: "There was a problem submitting your form",
                icon: "error",
  });
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}




