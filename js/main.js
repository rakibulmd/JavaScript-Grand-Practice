document.getElementById("name-submit-btn").addEventListener("click", () => {
    const firstName = document.getElementById("user-first-name").value;
    const middleName = document.getElementById("user-middle-name").value;
    const lastName = document.getElementById("user-last-name").value;
    const fullName =
        "Your full name is: " + firstName + " " + middleName + " " + lastName;
    document.getElementById("display-user-name").innerText = fullName;
});
