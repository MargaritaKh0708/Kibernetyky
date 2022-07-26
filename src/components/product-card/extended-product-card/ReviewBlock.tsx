export const ReviewBlock: React.FC = () => {
  return (
    <div className='review'>
      <div className='review__wrapper'>
        <div className='review__header'>
          <h3 className='review__title'> Відгуки</h3>
          <button className='review__btn'>
            <span className='review__btn-title'> Залишити відгук </span>
          </button>
          <button className='review__btn'>
            <span className='review__btn-title'> Задати питання </span>
          </button>
        </div>
        <div className='review__example'>
          <div className='review__user-info'>
            <span className='review__user-name'>Олександра</span>
            <span className='review__date'>12.07.2022 </span>
          </div>
          <span className='review__text'>
            Взяв на заміну свого 11про, хоч і він досить спритний, але 13
            звичайно в рази випереджає за продуктивністю) ніяких дефектів у мене
            не було і немає (тьху тьху) камера лідер це щось, можна сканувати
            об'єкти на ура! загалом 9 з 10 (1 за ціну) ;) кому цікаво модель у
            мене модель A2643
          </span>
          <button className='review__response'>
            <span className='review__response-title'> Відповісти </span>
          </button>
        </div>
        <div className='review__example'>
          <div className='review__user-info'>
            <span className='review__user-name'>Олександра</span>
            <span className='review__date'>12.07.2022 </span>
          </div>
          <span className='review__text'>
            Взяв на заміну свого 11про, хоч і він досить спритний, але 13
            звичайно в рази випереджає за продуктивністю) ніяких дефектів у мене
            не було і немає (тьху тьху) камера лідер це щось, можна сканувати
            об'єкти на ура! загалом 9 з 10 (1 за ціну) ;) кому цікаво модель у
            мене модель A2643
          </span>
          <button className='review__response'>
            <span className='review__response-title'> Відповісти </span>
          </button>
        </div>
        <button className='review__response'>
          <span className='review__response-title'> Переглянути всі </span>
        </button>
      </div>
    </div>
  );
};
