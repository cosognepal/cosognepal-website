import { cn } from "@/lib/utils";

interface eventDescripterProps {
    eventTitle: string;
    description: string[];
    className?: {
        container?: string,
        paragraph?: string,
        paragraphContainer?: string,
        title?: string,
    }
}

const EventDescripter = (props: eventDescripterProps) => {
    return (
        <section
            className={cn("about space-y-5 snap-end bg-paper rounded-lg py-8 px-6 md:px-8", props.className?.container)} >
            <h2 className={cn("font-display font-semibold text-2xl text-ink", props.className?.title)}>
                {props.eventTitle}
            </h2>
            <div className={cn("text-ink-muted space-y-3 leading-relaxed", props.className?.paragraphContainer)}>
                {
                    props.description.map((paragraph, index) => <p key={`description-para-${index}`} className={cn("", props.className?.paragraph)}>
                        {paragraph}
                    </p>
                    )
                }
            </div>
        </section>
    )
};

export default EventDescripter;

