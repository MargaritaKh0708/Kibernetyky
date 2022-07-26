import { ModalWindow } from 'elements/ModalWindow/ModalWindow';
import { IProductCardListItem } from 'components/product-card/ProductCardList';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Closer } from 'components/UI/closer/Closer';

export interface ILikesModal {
  products: IProductCardListItem[];
  favoriteCountQuantity: number;
  setActiveLikesModal: (value: boolean) => void;
  activeLikesModal: boolean;
}

export const LikesModal: React.FC<ILikesModal> = ({
  products,
  favoriteCountQuantity,
  activeLikesModal,
  setActiveLikesModal,
}) => {
  const [favorite, setFavorite] = useState<IProductCardListItem[]>([]);

  useEffect(() => {
    let FavoriteProducts: number[] = JSON.parse(
      localStorage.getItem('favorite') || '[]'
    );
    if (FavoriteProducts.length > 0) {
      const FavoriteForRander: IProductCardListItem[] = products.filter(
        (product) => FavoriteProducts.includes(product.id)
      );
      setFavorite(FavoriteForRander);
      console.log('fav', favorite);
    }
  }, [favoriteCountQuantity]);

  const LikesJsx = (
    <div className='likes-modal__head-part'>
      <h3 className='likes-modal__title'>Ваші вподобання: &nbsp;</h3>
      <Closer
        closeFunction={() => {
          setActiveLikesModal(false);
        }}
        arrowBorder='contacts-closer__color'
      />
      <div className='likes-modal__list'>
        {favorite.map((product) => (
          <div className='likes-modal__product' key={product.id}>
            <div
              className='likes-modal__img-block'
              style={{
                background: `center / contain no-repeat url(${product.imageCollection[0]})`,
              }}
            ></div>
            <span className='likes-modal__text'>{product.name}</span>
            <p className='likes-modal__price'>
              Купуй за суперціною: <br /> {product.price} грн
            </p>
            <Closer
              closeFunction={() => {
                setActiveLikesModal(false);
              }}
              arrowBorder='contacts-closer__color'
            />
          </div>
        ))}
      </div>
      <span className='likes-modal__text'>
        Кількість товарів: &nbsp;
        <span className='likes-modal__text_bold'>{favoriteCountQuantity}</span>
      </span>
      <div className='likes-modal__footer'>
        <div className='likes-modal__buttons'>
          <button className='likes-modal__credit-btn'>Купити в кредит</button>
          <Link to='/cart'>
            <button className='likes-modal__buy-btn'>Купити</button>
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <ModalWindow
        className='likes-modal'
        active={activeLikesModal}
        setActive={setActiveLikesModal}
      >
        {LikesJsx}
      </ModalWindow>
    </>
  );
};
