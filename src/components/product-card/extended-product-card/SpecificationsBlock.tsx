import { IAboutProductArticle } from './AboutProductArticle';

export const SpecificationsBlock: React.FC<IAboutProductArticle> = ({
  good,
}) => {
  return (
    <div className='specifications'>
      <div className='specifications__wrapper'>
        <h3 className='specifications__title'>
          Характеристики &nbsp;
          <span>
            {good.name}
            {good.model}
          </span>
        </h3>
        <ul className='specifications__list'>
          {good.specifications.detailed.map((item) => (
            <li className='specifications__items' key={item.title}>
              <span className='specifications__item-title'>{item.title}</span>
              <span className='specifications__dots' />
              <div className='specifications__values'>
                {item.value.map((value) => (
                  <span className='specifications__value' key={value}>
                    {value}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
