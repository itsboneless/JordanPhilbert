

let email = document.getElementById('email').value;
let subject = document.getElementById('subject').value;
let message = document.getElementById('message').value;

function sendEmail(){
    Email.send({
        SecureToken : "f0548dad-1b8b-4af5-9329-897e713ef675",
        To : 'jordan_philbert@hotmail.com',
        From : email,
        Subject : subject,
        Body : message
    }).then(
      message => alert(message)
    );
}




const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const submit = document.getElementById('submit');

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    let ebody = `
    <h1>First Name: </h1>${fname.value}
    <br>
    <h1>Last Name: </h1>${lname.value}
    `;

    Email.send({
        SecureToken : "f0548dad-1b8b-4af5-9329-897e713ef675",
        To : 'jordan_philbert@hotmail.com',
        From : email,
        Subject : "This is the subject",
        Body : ebody
    }).then(
      message => alert(message)
    );
});
