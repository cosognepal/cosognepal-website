import SectionTitle from "@/components/SectionTitle";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface faqData {
    question: string,
    answer: string,
    value: string
}
type TFaqParams = {
    data: faqData[],
    className?: {
        containerStyle?: string,
        accordionItem?: string,
    },
}

export default function FAQ(props: TFaqParams) {
    return (
        <section className="w-full">
            <SectionTitle title="Frequently Asked Questions (FAQ)" />
            <Accordion
                type="single"
                collapsible
                className="mt-6 text-ink-muted"
            >
                {props.data.map((faq) => (
                    <AccordionItem
                        value={faq.value}
                        key={faq.value}
                        className={cn("border-b border-rule hover:bg-paper px-3 rounded", props.className?.accordionItem)}>
                        <AccordionTrigger className="no-underline hover:no-underline text-left space-x-2 text-ink">
                            <span>
                                {faq.question}
                            </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-ink-muted leading-relaxed">{faq.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
}
