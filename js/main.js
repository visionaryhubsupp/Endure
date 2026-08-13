(function () {
  "use strict";

  var WHATSAPP_NUMBER = "201100094545";

  // Mobile nav toggle
  var navToggle = document.querySelector(".nav-toggle");
  var navPanel = document.getElementById("mobile-menu");

  if (navToggle && navPanel) {
    navToggle.addEventListener("click", function () {
      var isOpen = !navPanel.hidden;
      navPanel.hidden = isOpen;
      navToggle.setAttribute("aria-expanded", String(!isOpen));
    });

    navPanel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navPanel.hidden = true;
        navToggle.setAttribute("aria-expanded", "false");
      });
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 1020 && !navPanel.hidden) {
        navPanel.hidden = true;
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Booking form -> WhatsApp handoff
  var form = document.getElementById("booking-form");
  var formWrap = document.getElementById("booking-form-wrap");
  var successPanel = document.getElementById("booking-success");
  var successText = document.getElementById("booking-success-text");
  var successLink = document.getElementById("booking-success-link");
  var resetBtn = document.getElementById("booking-reset");

  function buildWaHref(data) {
    var lines = [
      "Booking request — endure",
      "Name: " + data.name,
      "Phone: " + data.phone,
      "Service: " + data.service
    ];
    if (data.date) lines.push("Preferred date: " + data.date);
    if (data.notes) lines.push("Notes: " + data.notes);
    return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(lines.join("\n"));
  }

  function showSuccess(name, waHref) {
    var first = (name || "").trim().split(/\s+/)[0];
    successText.textContent = first
      ? "Thanks, " + first + " — send the message that's waiting in WhatsApp and we'll reply to confirm your slot."
      : "Send the message that's waiting in WhatsApp and we'll reply to confirm your slot.";
    successLink.href = waHref;
    formWrap.hidden = true;
    successPanel.hidden = false;
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var fd = new FormData(form);
      var data = {
        name: String(fd.get("name") || "").trim(),
        phone: String(fd.get("phone") || "").trim(),
        service: String(fd.get("service") || "").trim(),
        date: String(fd.get("date") || "").trim(),
        notes: String(fd.get("notes") || "").trim()
      };
      var waHref = buildWaHref(data);
      window.open(waHref, "_blank", "noopener");
      showSuccess(data.name, waHref);
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      form.reset();
      successPanel.hidden = true;
      formWrap.hidden = false;
    });
  }
})();
