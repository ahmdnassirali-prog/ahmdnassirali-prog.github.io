import Image from "next/image";

/** A laptop drawn in CSS, with a real screenshot on its screen. */
export default function Laptop({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative">
      <div className="relative rounded-t-[1.1rem] bg-[#0b0c10] p-[1.7%] pb-[2.4%] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)] ring-1 ring-line-strong">
        <div className="relative aspect-[1600/956] overflow-hidden rounded-[0.3rem] bg-black">
          <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 56vw, 92vw" className="object-cover object-top" />
        </div>
      </div>
      <div aria-hidden="true" className="relative -mx-[7%] h-[clamp(10px,1.5vw,18px)] rounded-b-[1.1rem] bg-gradient-to-b from-[#3a3d45] via-[#26282e] to-[#16171b] ring-1 ring-line">
        <div className="absolute left-1/2 top-0 h-[42%] w-[15%] -translate-x-1/2 rounded-b-[0.5rem] bg-[#4a4d56]" />
      </div>
      <div aria-hidden="true" className="mx-auto mt-1 h-6 w-[90%] rounded-[50%] bg-black/60 blur-xl" />
    </div>
  );
}
