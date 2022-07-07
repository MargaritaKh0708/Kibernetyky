import { useState } from "react";

interface IAccordionItem {
    title: string;
    children?: React.ReactNode;
};

export const AccordionItem: React.FC<IAccordionItem> = ({ children, title }) => {
    const [active, setActive] = useState(false);

    return (
        <>
            <button className= {active ? "accordion__button accordion__button--active" : "accordion__button" } 
                onClick={() => setActive(active => !active)}>
                {title}
            </button>
            <div className={active ? "accordion__panel accordion__panel--active" : "accordion__panel"}>
                <p>{children}</p>
            </div>
        </>
        
    );
};