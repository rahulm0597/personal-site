import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — MyBrand",
  description: "Send me a message and I'll get back to you as soon as I can.",
};

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left: intro */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Get in touch
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Have a project in mind, a question, or just want to say hi? Fill in
            the form and I&apos;ll get back to you as soon as I can.
          </p>

          <dl className="mt-10 space-y-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex gap-3">
              <dt>
                <svg
                  className="w-5 h-5 text-indigo-500 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </dt>
              <dd>rahul.maurya0597@gmail.com</dd>
            </div>
            <div className="flex gap-3">
              <dt>
                <svg
                  className="w-5 h-5 text-indigo-500 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </dt>
              <dd>I typically reply within 1–2 business days.</dd>
            </div>
          </dl>
        </div>

        {/* Right: form */}
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
