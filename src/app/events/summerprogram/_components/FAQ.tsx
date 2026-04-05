import SectionTitle from "@/components/SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface FaqData {
  question: string;
  answer: string;
  value: string;
}

type TFaqParams = {
  data: FaqData[];
  className?: {
    containerStyle?: string;
    accordionItem?: string;
  };
};

export default function FAQ(props: TFaqParams) {
  return (
    <main className="w-full max-w-[1400px] mx-auto md:px-standard brk-1400:px-0">
      <SectionTitle title="Frequently Asked Questions (FAQ)" />
      <Accordion
        type="single"
        collapsible
        className="mt-standard text-faded md:px-small"
      >
        {props.data.map((faq) => (
          <AccordionItem
            value={faq.value}
            key={faq.value}
            className={cn(
              "border-b-[#e8e8e8] border-b-2 hover:bg-gray-bg px-small",
              props.className?.accordionItem
            )}
          >
            <AccordionTrigger className="no-underline hover:no-underline text-left space-x-2">
              <span>{faq.question}</span>
            </AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
}
