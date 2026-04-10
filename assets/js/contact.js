/**
 * Contact Form Handler — DOEL S.Q
 * Opens mailto link and shows a success message upon form submission.
 */
(function () {
  const form = document.getElementById('contactForm');
  const successMsg = document.getElementById('successMessage');
  const errorMsg = document.getElementById('errorMessage');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      if (errorMsg) {
        errorMsg.classList.remove('d-none');
        setTimeout(() => errorMsg.classList.add('d-none'), 4000);
      }
      return;
    }

    // Build mailto link
    const subject = encodeURIComponent('Mesazh nga ' + name);
    const body = encodeURIComponent(
      'Emri: ' + name + '\nEmail: ' + email + '\n\nMesazhi:\n' + message
    );
    const mailtoLink = 'mailto:info@doel-ks.com?subject=' + subject + '&body=' + body;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    if (successMsg) {
      successMsg.classList.remove('d-none');
      setTimeout(() => successMsg.classList.add('d-none'), 5000);
    }

    // Reset form
    form.reset();
  });
})();
