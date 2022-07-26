interface IAccordion {
  children?: React.ReactNode;
}

export const Accordion: React.FC<IAccordion> = ({ children }) => {
  return <div className='accordion-container'>{children}</div>;
};
