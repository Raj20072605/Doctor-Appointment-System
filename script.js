const form = document.getElementById("appointmentForm");
const confirmation = document.getElementById("confirmation");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const patientName = document.getElementById("patientName").value;
    const doctor = document.getElementById("doctor").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    confirmation.style.display = "block";

    confirmation.innerHTML = `
        <h3>✅ Appointment Booked Successfully!</h3>
        <p><strong>Patient:</strong> ${patientName}</p>
        <p><strong>Doctor:</strong> ${doctor}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p>Thank you for choosing CareConnect.</p>
    `;

    form.reset();

    confirmation.scrollIntoView({
        behavior: "smooth"
    });
});
