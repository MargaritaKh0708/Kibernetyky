import { ModalWindow } from 'elements/ModalWindow/ModalWindow';
import { Closer } from 'components/UI/closer/Closer';

interface ISubscripModal {
  setOpenSubscripModal: (value: boolean) => void;
  openSubscripModal: boolean;
}
export const SubscripModal: React.FC<ISubscripModal> = ({
  openSubscripModal,
  setOpenSubscripModal,
}) => {
  const SubscripWindow = (
    <div className='call-back-form__thanks-msg'>
      <span> Дякуємо! Чекайте на цікаві новини він "Кібернетики".</span> <br />
      <span>"Кібернетики" - більше, ніж просто гаджети</span>
      <Closer
        closeFunction={() => {
          setOpenSubscripModal(false);
        }}
        arrowBorder='contacts-closer__color'
      />
      <button
        name='okay'
        onClick={(e) => {
          setOpenSubscripModal(false);
        }}
        type='button'
        className='call-back-form__submit call-back-form__submit_color'
      >
        <span className='call-back-form__number-list-item call-back-form__submit-title call-back-form__submit-title_color'>
          Добре
        </span>
      </button>
    </div>
  );

  return (
    <ModalWindow
      active={openSubscripModal}
      setActive={setOpenSubscripModal}
      className='call-back-modal'
    >
      {SubscripWindow}
    </ModalWindow>
  );
};
