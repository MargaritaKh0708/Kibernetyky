export interface IModalWindow {
  active: boolean;
  setActive: (arg: boolean) => void;
  children?: React.ReactNode;
  className?: string;
}

export const ModalWindow: React.FC<IModalWindow> = ({
  active,
  setActive,
  children,
  className,
}) => {
  return (
    <div
      className={active ? `modal  active` : `modal `}
      onClick={() => setActive(false)}
    >
      <div
        className={
          active
            ? `modal__content ${className || ''} active`
            : `modal__content ${className || ''}`
        }
        onClick={(e) => e.stopPropagation()}
      >
        {/* Так не сработает закрытие окна при клике на него*/} {children}
      </div>
    </div>
  );
};
