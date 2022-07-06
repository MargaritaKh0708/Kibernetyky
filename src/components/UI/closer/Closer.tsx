interface ICloser {
  closeFunction: () => void;
  arrowBorder?: string;
}

export const Closer: React.FC<ICloser> = ({ closeFunction, arrowBorder }) => {
  return (
    <div className='closer' onClick={closeFunction}>
      <span className={`closer__part closer__part_left ${arrowBorder}`}></span>
      <span className={`closer__part ${arrowBorder}`}></span>
    </div>
  );
};
