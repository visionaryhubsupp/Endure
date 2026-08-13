# Endure Physiotherapy Website

_Started 2026-08-13 10:38 UTC_

---

## User

Build a modern, fully responsive website for endure, a Clinic / Healthcare in Newgiza Health Park (Meditown), B2, Clinic 120, First 6th of October, Giza, Egypt.
BUSINESS OVERVIEW
endure Provides personalized physiotherapy and rehabilitation to help people recover from pain, injuries, and movement limitations and move stronger.. Primary audience: People dealing with pain, sports or everyday injuries, movement limitations, or recovering from physical conditions who want personalized professional rehabilitation..
WHAT MAKES THEM DIFFERENT
A modern, recovery-focused physiotherapy brand centered around helping clients move stronger and build long-term physical resilience, rather than simply treating pain.
PAGES / SECTIONS
Home, About, Services, Contact, Gallery
SERVICES / OFFERINGS
- Physiotherapy
- rehabilitation
- pain management
- injury recovery
- movement rehabilitation
CONTACT & LOCATION
Phone: +20 110 009 4545
Address: Newgiza Health Park (Meditown), B2, Clinic 120, First 6th of October, Giza, Egypt
Hours: Sat–Thu 10am–11pm; Friday Off.
Social: @endurephysiotherapy
DESIGN DIRECTION
Aesthetic: Modern & minimal.
Color preference: Country White.
Inspiration reference: Modern sports-performance and wellness brands — clean layouts, strong typography, minimal design, and photography that communicates movement, strength, and recovery..
FEATURES TO INCLUDE
- Online booking / appointment request form
- Photo gallery showcasing the space and work
- Customer testimonials / reviews section
- Embedded map pinned to Newgiza Health Park (Meditown), B2, Clinic 120, First 6th of October, Giza, Egypt
- Social media links (@endurephysiotherapy)
PRIMARY CALL TO ACTION
Make "Book Now" the dominant action — prominent in the hero and repeated in the header or footer.
TECHNICAL REQUIREMENTS
- Fully responsive, mobile-first
- Fast-loading, clean typography, accessible contrast
- SEO: page title and meta description should include "endure" and "Newgiza Health Park (Meditown), B2, Clinic 120, First 6th of October, Giza, Egypt"
- Contact info visible in the header or a sticky bar

## Assistant

_[tool: run_script]_

_[tool: dc_write]_

_[tool: ready_for_verification]_

## User

Found issues — fixing…

## Assistant

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Fixed the footer collision (wordmark scales off 6vw, footer grid collapses to one column earlier).

Two things need your input:
- **Testimonials are sample copy** — I invented the three quotes and names. Send real reviews (or I'll pull the section).
- **Photos** — every image is a labelled placeholder. I can't generate photography; send hero, clinic, and session shots and I'll drop them in.

Also note: the booking form is front-end only right now (shows a confirmation, doesn't send anywhere) — tell me where requests should go (email, WhatsApp, a booking tool) and I'll wire it.

## User

here's some real testimonials: - --- Eyad Saeed
I would like to thank Dr. Tasneem for her excellent care and support. I had a shoulder injury that caused me a lot of pain and limited my movement, but thanks to her expertise and dedication, I recovered significantly. She is professional, caring, and always attentive to her patients’ needs. I am truly grateful for her help and would highly recommend her to anyone looking for a great physiotherapist.

- Remas Saeed
I would like to express my sincere gratitude to Dr. Tasneem for her outstanding care and support. I was struggling with a major problem in my leg that affected my daily life, and thanks to her expertise, dedication, and professional treatment, I have improved tremendously. She is truly one of the best doctors I have ever met. She listens carefully, pays attention to every detail, and genuinely cares about her patients’ recovery. I am incredibly thankful for everything she has done for me and would highly recommend her to anyone seeking excellent physiotherapy care. Thank you, Dr. Tasneem, for making such a positive difference in my life.

-Saja Shaheen
I’ve had multiple recovery and rehab sessions done by the brilliant doctor tasneem and it has made a great impact on my health the clinic is clean and beautifully designed and I was able to book an appointment right away I’ve been to multiple clinics and this is the best one 100% recommend

-Amr Abbas
I’ve had multiple sessions at Endure Physiotherapy, and the progress has been remarkable. Special thanks to Dr. Khaled. an incredibly professional, attentive, and skilled doctor. Highly recommended!

- Ahmed bodaif
Dr mohamed ramzy deserves huge credit for helping me reach the condition I'm in today.
His knowledge and experience helped me recover much faster and get back to my normal life. He teaches the exercises that are appropriate for your condition and explains in detail why they are important. He is also excellent with hands-on treatment and uses advanced equipment.

- Omar Reda
I highly recommend Dr Mohamed Ramzi to anyone looking for excellent care and professional service. Dr Ramzi was very helpful in treating my shoulder injury, and I truly appreciate his expertise, care, and dedication throughout my treatment. Thank you Dr Ramzi for helping me get better and feel more confident about my shoulder. Wishing you and your clinic continuous success.

- Lamis Magdy
Dr Khaled is of the best physiotherapists I’ve ever met. So patient and just great. Thank you Dr for the excellent care!

~
remove the section that above navbar
~
requests should go to whatsapp for now
~
Here are some of the photos I have. I’ll add more later when I have them.
~

Also, let’s add a Team section. You’ll find three uploaded photos containing the team members’ images and all the necessary information.

## Assistant

_[tool: copy_files]_

_[tool: view_image]_

_[tool: dc_write]_

_[tool: show_html]_

_[tool: show_html]_

_[tool: multi_screenshot]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: multi_screenshot]_

_[tool: show_html]_

_[tool: multi_screenshot]_

_[tool: save_screenshot]_

_[tool: save_screenshot]_

_[tool: run_script]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

## User

Found issues — fixing…

## Assistant

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

## User

can you change the visit section embed code with the right pin location: "<iframe
  src="https://www.google.com/maps?q=Endure+Physiotherapy+%26+Rehabilitation,Giza&output=embed"
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade">
</iframe>"

## Assistant

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Swapped in your embed — the map now pins Endure Physiotherapy & Rehabilitation.

