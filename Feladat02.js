document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registrationForm").addEventListener("submit", function(event) {
        event.preventDefault();

        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var passwordConfirm = document.getElementById("passwordConfirm").value;
        var email = document.getElementById("email").value;
        var birthdate = document.getElementById("birthdate").value;

        if (username.length < 5 || username.length > 16) {
            alert("A felhasználónévnek 5 és 16 karakter közöttinek kell lennie!");
            return;
        }

        if (password.length < 5) {
            alert("A jelszónak legalább 5 karakter hosszúnak kell lennie!");
            return;
        }

        var passwordVal = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{5,}$/;
        if (!passwordVal.test(password)) {
            alert("A jelszónak tartalmaznia kell legalább egy kisbetűt, egy nagybetűt, egy számot és egy speciális karaktert!");
            return;
        }
        
        if (password !== passwordConfirm) {
            alert("A két jelszónak egyeznie kell!");
            return;
        }
        var userData = {
            username: username,
            password: password,
            email: email,
            birthdate: birthdate
        };
        console.log(userData);
    });
});
