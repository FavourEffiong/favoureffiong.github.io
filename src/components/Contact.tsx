const contactLinks = [
  {
    label: "Send Email",
    href: "mailto:your.email@example.com",
    icon: "📧",
    primary: true
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourprofile",
    icon: "💼",
    primary: false
  },
  {
    label: "GitHub",
    href: "https://github.com/yourusername",
    icon: "🐙",
    primary: false
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-8">
          Let&apos;s Work Together
        </h2>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-12">
          I&apos;m always interested in new opportunities and exciting projects. 
          Let&apos;s connect and discuss how we can bring your ideas to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`${
                link.primary
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
              } px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2`}
            >
              <span>{link.icon}</span>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
