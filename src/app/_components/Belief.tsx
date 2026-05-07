import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { playfair } from "@/lib/fonts";

export default function Belief() {
  return (
    <Section spacing="block" className="bg-accent_yellow-50">
      <Container size="narrow" className="text-center py-block md:py-section">
        <p
          className={`${playfair.className} font-bold text-black-mid leading-[1.25] tracking-tight text-sub-title sm:text-mid-title md:text-title max-w-[950px] mx-auto`}
          style={{ textWrap: "balance" }}
        >
          We believe technology should empower every student in Nepal. To get
          there, we&apos;re bringing computer science education and
          student-led CS clubs to high schools across the country.
        </p>
      </Container>
    </Section>
  );
}
