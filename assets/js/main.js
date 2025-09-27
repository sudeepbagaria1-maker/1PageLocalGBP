const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Stop normal form submit

  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  const practice = form.practice.value.trim();
  const service = form.service.value;
  const message = form.message.value.trim();

  // Optional: basic validation
  if (!name || !phone || !practice || !service) {
    alert("Please fill all required fields");
    return;
  }

  const serviceMap = {
    trainee: "Trainee Pack (₹3,000)",
    defensive: "Defensive Pack (₹4,500/month)",
    offensive: "Offensive Pack (₹48,000/year + ₹4,000/month)"
  };

  const whatsappNumber = "919930036747"; // <-- your full number with country code

  const messageBody =
    `Hello! I'm interested in your SEO services.\n` +
    `Name: ${name}\n` +
    `Phone: ${phone}\n` +
    `Practice: ${practice}\n` +
    `Service: ${serviceMap[service]}\n` +
    `Message: ${message || "No additional message"}`;

  const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageBody)}`;

  // Open WhatsApp chat in a new tab
  window.open(whatsappURL, "_blank");
});
