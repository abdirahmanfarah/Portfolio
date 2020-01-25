var contacts = {};

document.addEventListener("DOMContentLoaded", function() {
  contacts.name = document.getElementById('name').value;
  contacts.email = document.getElementById('email');
  contacts.message = document.getElementById('message');

});

// function isNotEmpty(value) {
//   if(value == null || typeof value == 'undefined') {
//     return false;
//   }else {
//     return (value.length > 0)
//   }
// };

class User {
  constructor(name, email, message){
    this.name = name;
    this.email= email;
    this.message = message;
  }
}

// function isValid() {
//   let valid = true;

//   valid &= 
// }

function sendContact() {
  console.log("This button has been pressed")
  
  let usr = new User(name.value, email.value, message.value);
  // alert(`${usr.name} form submitted`)
  console.log(usr)
  let link = 'mailto:abdirahman.z.farah@gmail.com?subject=Message from '
              +document.getElementById('email').value
              +'&message='+document.getElementById('email').value;

              window.location.href=link;
};