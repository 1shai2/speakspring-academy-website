function sayHello() { 
    alert("Thank you for visiting SpeakSpring Academy!");

    alert("We are excited to help you improve your English!");
}
function sendEnquiry(event) {
    event.preventDefault();

    // Replace this with your academy's WhatsApp number
    const academyNumber = "919076054021";

    const name = document.getElementById("student-name").value;
    const studentClass = document.getElementById("student-class").value;
    const course = document.getElementById("course").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const whatsappMessage =
        "Hello SpeakSpring Academy!\n\n" +
        "I would like to enquire about your classes.\n\n" +
        "Student Name: " + name + "\n" +
        "School Class: " + studentClass + "\n" +
        "Course: " + course + "\n" +
        "Contact Number: " + phone + "\n" +
        "Message: " + message;

    const whatsappLink =
        "https://wa.me/" + academyNumber +
        "?text=" + encodeURIComponent(whatsappMessage);

    window.open(whatsappLink, "_blank");
}
