export interface IModalWindow {
  active: boolean;
  setActive: (arg: boolean) => void;
  children?: React.ReactNode;
}

export const ModalWindow: React.FC<IModalWindow> = ({
  active,
  setActive,
  children,
}) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Так не сработает закрытие окна при клике на него*/} {children}
      </div>
    </div>
  );
};
