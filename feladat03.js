document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registrationForm").addEventListener("submit", function(event) {
        event.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var age = document.getElementById("age").value;
        var gender = document.getElementById("gender").value;
        var sport = document.getElementById("sport").value;
        var newsletter = document.getElementById("newsletter").checked;
        var userData = {
            name: name,
            email: email,
            age: age,
            gender: gender,
            sport: sport,
            newsletter: newsletter
        };
        console.log(userData);
    });
});
