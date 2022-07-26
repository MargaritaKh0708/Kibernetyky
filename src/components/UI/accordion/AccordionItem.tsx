import { AccordionSvgSelector } from '../accordion/AccordionSvgSelector';
import { useState } from 'react';

interface IAccordionItem {
  children?: React.ReactNode;
  btnStyle?: string;
  title: string;
}

export const AccordionItem: React.FC<IAccordionItem> = ({
  children,
  title,
  btnStyle,
}) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <button
        className={
          active
            ? `accordion__button accordion__button--active ${btnStyle || ''}`
            : `accordion__button ${btnStyle || ''}`
        }
        onClick={() => setActive((active) => !active)}
      >
        {title}
        <AccordionSvgSelector
          id={active ? 'arrow-up' : 'arrow-down'}
          className='accordion__sym'
        />
      </button>
      <div
        className={
          active
            ? 'accordion__panel accordion__panel--active'
            : 'accordion__panel'
        }
      >
        <div>{children}</div>
      </div>
    </>
  );
};
