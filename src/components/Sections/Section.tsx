export interface SectionProps {
    children?: React.ReactNode;
    classes?: string;
    sx?: React.CSSProperties;
}

export default function Section({ children, classes, sx }: SectionProps) {
    return (
        <>
            <section className={classes} style={sx}>
                {children}
            </section>
        </>
    );
}