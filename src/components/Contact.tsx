import { site, whatsappHref, emailHref } from "@/config/site";
import Intertitle from "./Intertitle";
import ContactForm from "./ContactForm";
import Year from "./Year";

function ChannelRow({
  href,
  label,
  value,
  external,
  icon,
}: {
  href: string;
  label: string;
  value: string;
  external?: boolean;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex items-center gap-5 border-t border-rule-dark py-6 last:border-b"
    >
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-rule-dark text-accent-light transition-colors duration-200 group-hover:border-accent-light group-hover:bg-accent-light group-hover:text-forest">
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm text-bone-soft">{label}</span>
        <span className="font-display track-tight block truncate text-xl font-medium sm:text-2xl">{value}</span>
      </span>
      <span
        aria-hidden="true"
        className="text-xl text-bone-soft transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent-light"
      >
        {external ? "↗" : "→"}
      </span>
      {external && <span className="sr-only">(opens in a new tab)</span>}
    </a>
  );
}

const WhatsAppIcon = (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.4a.5.5 0 0 0 0-.4l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.2c0-.2-.2-.2-.5-.4Z" />
  </svg>
);
const MailIcon = (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
  </svg>
);

export default function Contact() {
  const { contact, contactSection } = site;
  return (
    <section id="contact" className="ground-dark grain relative px-[var(--gutter)] pt-[var(--section)]">
      <div className="mx-auto max-w-[1400px]">
        <Intertitle n={5} title="Contact" dark />

        <p
          data-lines
          className="font-display track-tighter text-[clamp(3rem,9vw,8rem)] font-semibold leading-[0.94]"
        >
          {contactSection.headline.map((l, i) => (
            <span key={l} className="line-mask">
              <span style={{ ["--d" as string]: `${i * 90}ms` }}>
                {i === contactSection.headline.length - 1 ? (
                  <>
                    {l.replace(/\?$/, "")}
                    <span className="text-accent-light">?</span>
                  </>
                ) : (
                  l
                )}
              </span>
            </span>
          ))}
        </p>

        <div className="mt-16 grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p data-reveal className="max-w-[40ch] text-lg leading-relaxed text-bone-soft">
              {contactSection.body}
            </p>
            <div data-reveal className="mt-10">
              <ChannelRow href={whatsappHref} external label="WhatsApp" value={contact.whatsappDisplay} icon={WhatsAppIcon} />
              <ChannelRow href={emailHref} label="Email" value={contact.email} icon={MailIcon} />
            </div>
            <p data-reveal className="mt-6 text-sm text-bone-soft">{contact.responseTime}</p>
            {contact.isPlaceholder && (
              <p className="mt-6 rounded-md border border-dashed border-rule-dark px-4 py-3 text-sm text-bone-soft">
                Note: the contact details on this page are placeholders until the real ones are added.
              </p>
            )}
          </div>

          <div data-reveal className="lg:col-span-6 lg:col-start-7">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* colophon */}
      <footer className="mx-auto mt-[var(--section)] max-w-[1400px] border-t border-rule-dark py-8 text-sm text-bone-soft">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <Year /> {site.name}. Based in {site.location}, working worldwide.
          </p>
          <a href="#top" className="link-u self-start text-bone sm:self-auto">
            Back to top ↑
          </a>
        </div>
      </footer>
    </section>
  );
}
