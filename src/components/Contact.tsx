import { site, whatsappHref, emailHref } from "@/config/site";
import Emph from "./Emph";
import Year from "./Year";
import FitText from "./FitText";
import { GmailIcon, WhatsAppIcon } from "./BrandIcons";

export default function Contact() {
  const { contact, contactSection } = site;
  const words = site.name.split(" ");
  const last = words.pop() ?? "";
  const lead = words.join(" ");
  return (
    <section id="contact" className="grain relative scroll-mt-16 overflow-hidden border-t border-line bg-ink-0 px-[var(--gutter)] pt-[var(--section)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(70% 55% at 100% 10%, rgba(58,96,255,0.16), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-[1560px]">
        <p data-reveal className="label mb-10">Contact</p>
        <h2 data-lines className="display text-[clamp(3.4rem,10vw,11rem)]">
          {contactSection.headline.map((l, i) => (
            <span key={l} className={`line-mask ${i === 1 ? "md:pl-[8.33%]" : ""}`}>
              <span style={{ ["--d" as string]: `${i * 100}ms` }}>
                <Emph text={l} />
              </span>
            </span>
          ))}
        </h2>

        <div className="mt-20 grid gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p data-reveal className="max-w-[36ch] text-lg leading-relaxed text-bone-2">
              {contactSection.body}
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="border-t border-line">
              <a
                data-reveal
                href={emailHref}
                className="group flex items-center gap-5 border-b border-line py-6"
              >
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-line-strong bg-bone transition-transform duration-300 group-hover:-rotate-6">
                  <GmailIcon className="h-6 w-6" />
                </span>
                <span className="min-w-0">
                  <span className="label block">Email · Gmail</span>
                  <span className="display mt-1 block break-all text-[clamp(1.7rem,3vw,2.7rem)] leading-tight transition-colors duration-200 group-hover:text-blue">
                    {contact.email}
                  </span>
                </span>
              </a>
              <a
                data-reveal
                style={{ ["--d" as string]: "80ms" }}
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 border-b border-line py-6"
              >
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#25D366] text-white transition-transform duration-300 group-hover:-rotate-6">
                  <WhatsAppIcon className="h-7 w-7" />
                </span>
                <span className="min-w-0">
                  <span className="label block">WhatsApp</span>
                  <span className="display mt-1 block text-[clamp(1.7rem,3vw,2.7rem)] leading-tight transition-colors duration-200 group-hover:text-blue">
                    {contact.whatsappDisplay}
                  </span>
                </span>
                <span className="sr-only"> (opens a WhatsApp chat)</span>
              </a>
            </div>



            <p data-reveal className="mt-10 flex items-center gap-3 text-sm text-bone-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue" aria-hidden="true" />
              {contact.responseTime}
            </p>
            {contact.isPlaceholder && (
              <p className="mt-6 max-w-[40ch] border-l border-line-strong pl-4 text-sm text-bone-3">
                The email and WhatsApp details shown are placeholders until the real ones are added.
              </p>
            )}
          </div>

        </div>

        {/* sign-off: the title set edge to edge */}
        <footer className="mt-[var(--section)] border-t border-line pb-8 pt-12">
          <p data-reveal className="signature -rotate-3 text-[clamp(3.4rem,8vw,7rem)] leading-none text-blue">
            {site.ownerName.split(" ")[0]}
          </p>
          <div aria-hidden="true" className="mt-2 select-none sm:mt-4">
            <FitText className="display hidden leading-[0.82] sm:block">
              {lead} <em>{last}</em>
            </FitText>
            <div className="sm:hidden">
              <FitText className="display leading-[0.86]">{lead}</FitText>
              <FitText className="display leading-[0.86]">
                <em>{last}</em>
              </FitText>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-line pt-6 text-sm text-bone-3 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © <Year /> {site.name}. All rights reserved.
            </p>
            <a href="#top" className="link-u self-start text-bone sm:self-auto">
              Back to top ↑
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
