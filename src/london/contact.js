import React, { useState } from "react";
import data from "./contact.json";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    date: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  // =====================================================
  // HANDLE INPUT
  // =====================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }

    setSubmitted(false);
  };

  // =====================================================
  // VALIDATION
  // =====================================================

  const validateForm = () => {
    const newErrors = {};

    // NAME
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must contain at least 3 characters.";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name.trim())) {
      newErrors.name = "Name can contain only letters and spaces.";
    }

    // EMAIL
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    // PHONE
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (
      !/^\+?[0-9\s()-]{10,15}$/.test(formData.phone.trim())
    ) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    // SUBJECT
    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = "Subject must contain at least 5 characters.";
    }

    // DATE
    if (!formData.date) {
      newErrors.date = "Please select your travel date.";
    }

    // MESSAGE
    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must contain at least 10 characters.";
    } else if (formData.message.length > 500) {
      newErrors.message = "Message cannot exceed 500 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // =====================================================
  // SUBMIT FORM
  // =====================================================

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      date: "",
      message: ""
    });

    window.scrollTo({
      top: 300,
      behavior: "smooth"
    });
  };

  // =====================================================
  // FAQ
  // =====================================================

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // =====================================================
  // RETURN
  // =====================================================

  return (
    <div className="min-h-screen bg-[#FFF8EA] text-[#082B49]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="contact"
        className="relative min-h-[600px] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${data.hero.image})`
        }}
      >

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#082B49]/50"></div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl items-center justify-center px-6 py-28 text-center md:py-36">

          <div className="max-w-4xl">

            <p className="font-bold tracking-[0.4em] text-[#A9D6E5]">
              {data.hero.badge}
            </p>

            <h1 className="mt-5 text-5xl font-black text-white md:text-7xl">
              {data.hero.title}
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-200 md:text-xl">
              {data.hero.description}
            </p>

            <a
              href="#contact-form"
              className="mt-9 inline-block rounded-full bg-[#A9D6E5] px-8 py-4 font-black text-[#082B49] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-2xl"
            >
              {data.hero.button} ↓
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT INFORMATION
      ===================================================== */}

      <section className="mx-auto mt-20 max-w-6xl px-6">

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          {data.contactInfo.map((item, index) => (

            <div
              key={index}
              className="group rounded-3xl border border-blue-100 bg-white p-7 shadow-xl transition duration-300 hover:-translate-y-3 hover:bg-[#082B49] hover:text-white"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#DDEEFF] text-3xl transition group-hover:scale-110">
                {item.icon}
              </div>

              <h3 className="mt-6 text-xl font-black">
                {item.title}
              </h3>

              <p className="mt-3 break-words font-bold text-[#145DA0] group-hover:text-[#6FAED9]">
                {item.value}
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500 group-hover:text-blue-100">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          MAIN CONTACT SECTION
      ===================================================== */}

      <section
        id="contact-form"
        className="mx-auto max-w-7xl px-6 py-24"
      >

        <div className="grid gap-12 lg:grid-cols-5">

          {/* LEFT CONTENT */}

          <div className="lg:col-span-2">

            <p className="font-bold tracking-[0.3em] text-[#145DA0]">
              GET IN TOUCH
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              How Can We Help?
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Whether you're planning your first London trip,
              looking for exciting experiences or simply have a
              question, send us a message.
            </p>


            {/* HELP CARDS */}

            <div className="mt-10 space-y-4">

              {data.helpCards.map((item, index) => (

                <div
                  key={index}
                  className="group flex gap-5 rounded-2xl border border-blue-100 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#DDEEFF] text-2xl">
                    {item.icon}
                  </div>

                  <div>

                    <h3 className="font-black">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>


          {/* =====================================================
              FORM
          ===================================================== */}

          <div className="lg:col-span-3">

            <div className="rounded-[35px] bg-white p-7 shadow-xl md:p-10">

              <h2 className="text-3xl font-black">
                {data.form.title}
              </h2>

              <p className="mt-2 text-slate-500">
                {data.form.description}
              </p>


              {/* SUCCESS MESSAGE */}

              {submitted && (

                <div className="mt-7 rounded-2xl border border-green-200 bg-green-50 p-5">

                  <div className="flex gap-3">

                    <span className="text-2xl">
                      ✓
                    </span>

                    <div>

                      <h3 className="font-black text-green-800">
                        Message Sent Successfully!
                      </h3>

                      <p className="mt-1 text-sm text-green-700">
                        Thank you for contacting us. We'll get
                        back to you as soon as possible.
                      </p>

                    </div>

                  </div>

                </div>

              )}


              {/* FORM */}

              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-6"
              >

                {/* NAME + EMAIL */}

                <div className="grid gap-5 md:grid-cols-2">

                  {/* NAME */}

                  <div>

                    <label className="mb-2 block text-sm font-bold">
                      {data.form.nameLabel}
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={`w-full rounded-2xl border px-5 py-3 outline-none transition ${
                        errors.name
                          ? "border-red-400 bg-red-50"
                          : "border-slate-200 bg-[#FFF8EA] focus:border-[#145DA0] focus:ring-2 focus:ring-blue-100"
                      }`}
                    />

                    {errors.name && (
                      <p className="mt-2 text-xs font-semibold text-red-500">
                        ⚠ {errors.name}
                      </p>
                    )}

                  </div>


                  {/* EMAIL */}

                  <div>

                    <label className="mb-2 block text-sm font-bold">
                      {data.form.emailLabel}
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                      className={`w-full rounded-2xl border px-5 py-3 outline-none transition ${
                        errors.email
                          ? "border-red-400 bg-red-50"
                          : "border-slate-200 bg-[#FFF8EA] focus:border-[#145DA0] focus:ring-2 focus:ring-blue-100"
                      }`}
                    />

                    {errors.email && (
                      <p className="mt-2 text-xs font-semibold text-red-500">
                        ⚠ {errors.email}
                      </p>
                    )}

                  </div>

                </div>


                {/* PHONE + DATE */}

                <div className="grid gap-5 md:grid-cols-2">

                  {/* PHONE */}

                  <div>

                    <label className="mb-2 block text-sm font-bold">
                      {data.form.phoneLabel}
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+44 20 1234 5678"
                      className={`w-full rounded-2xl border px-5 py-3 outline-none transition ${
                        errors.phone
                          ? "border-red-400 bg-red-50"
                          : "border-slate-200 bg-[#FFF8EA] focus:border-[#145DA0] focus:ring-2 focus:ring-blue-100"
                      }`}
                    />

                    {errors.phone && (
                      <p className="mt-2 text-xs font-semibold text-red-500">
                        ⚠ {errors.phone}
                      </p>
                    )}

                  </div>


                  {/* DATE */}

                  <div>

                    <label className="mb-2 block text-sm font-bold">
                      {data.form.dateLabel}
                    </label>

                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className={`w-full rounded-2xl border px-5 py-3 outline-none transition ${
                        errors.date
                          ? "border-red-400 bg-red-50"
                          : "border-slate-200 bg-[#FFF8EA] focus:border-[#145DA0] focus:ring-2 focus:ring-blue-100"
                      }`}
                    />

                    {errors.date && (
                      <p className="mt-2 text-xs font-semibold text-red-500">
                        ⚠ {errors.date}
                      </p>
                    )}

                  </div>

                </div>


                {/* SUBJECT */}

                <div>

                  <label className="mb-2 block text-sm font-bold">
                    {data.form.subjectLabel}
                  </label>

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What would you like to ask us?"
                    className={`w-full rounded-2xl border px-5 py-3 outline-none transition ${
                      errors.subject
                        ? "border-red-400 bg-red-50"
                        : "border-slate-200 bg-[#FFF8EA] focus:border-[#145DA0] focus:ring-2 focus:ring-blue-100"
                    }`}
                  />

                  {errors.subject && (
                    <p className="mt-2 text-xs font-semibold text-red-500">
                      ⚠ {errors.subject}
                    </p>
                  )}

                </div>


                {/* MESSAGE */}

                <div>

                  <label className="mb-2 block text-sm font-bold">
                    {data.form.messageLabel}
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    maxLength="500"
                    placeholder="Tell us how we can help..."
                    className={`w-full resize-none rounded-2xl border px-5 py-3 outline-none transition ${
                      errors.message
                        ? "border-red-400 bg-red-50"
                        : "border-slate-200 bg-[#FFF8EA] focus:border-[#145DA0] focus:ring-2 focus:ring-blue-100"
                    }`}
                  ></textarea>

                  <div className="mt-2 flex justify-between">

                    <div>
                      {errors.message && (
                        <p className="text-xs font-semibold text-red-500">
                          ⚠ {errors.message}
                        </p>
                      )}
                    </div>

                    <span className="text-xs text-slate-400">
                      {formData.message.length}/500
                    </span>

                  </div>

                </div>


                {/* SUBMIT BUTTON */}

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-[#082B49] py-4 font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-[#145DA0] hover:shadow-xl"
                >
                  {data.form.button} →
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="bg-[#DDEEFF] px-6 py-24">

        <div className="mx-auto max-w-4xl">

          <div className="text-center">

            <p className="font-bold tracking-[0.3em] text-[#145DA0]">
              FREQUENTLY ASKED QUESTIONS
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Have Questions?
            </h2>

          </div>


          <div className="mt-12 space-y-4">

            {data.faq.map((item, index) => (

              <div
                key={index}
                className="overflow-hidden rounded-2xl bg-white shadow-sm"
              >

                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left font-black"
                >

                  <span>
                    {item.question}
                  </span>

                  <span className="ml-4 text-xl text-[#145DA0]">
                    {openFaq === index ? "−" : "+"}
                  </span>

                </button>


                {openFaq === index && (

                  <div className="border-t border-blue-100 px-6 py-5">

                    <p className="leading-7 text-slate-600">
                      {item.answer}
                    </p>

                  </div>

                )}

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="bg-[#082B49] px-6 py-24 text-center">

        <div className="mx-auto max-w-3xl">

          <p className="font-bold tracking-[0.3em] text-[#6FAED9]">
            START YOUR JOURNEY
          </p>

          <h2 className="mt-5 text-4xl font-black text-white md:text-6xl">
            {data.cta.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-blue-100">
            {data.cta.description}
          </p>

          <a
            href="/"
            className="mt-9 inline-block rounded-full bg-[#FFF8EA] px-9 py-4 font-black text-[#082B49] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-2xl"
          >
            {data.cta.button} →
          </a>

        </div>

      </section>

    </div>
  );
}

export default Contact;