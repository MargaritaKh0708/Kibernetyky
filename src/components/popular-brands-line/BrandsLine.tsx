import { IProductCardList } from '../product-card/ProductCardLeadersList';

export const BrandsLine: React.FC<IProductCardList> = ({ data }) => {
  let brandsList: {
    logo: string; //? JSX.Element только потому что передаем
    id: number;
  }[] = [];
  let uniqueBrandsName = new Set();
  data.forEach((item) => {
    if (!uniqueBrandsName.has(item.brand.id)) {
      brandsList.push(item.brand);
      uniqueBrandsName.add(item.brand.id);
    }
  });
  console.log(brandsList);

  return (
    <>
      <section className='brand-block container'>
        <h2 className='brand-block__title'> Популярні бренди </h2>
        <div className='brand-block__logo-list'>
          {brandsList.map((item) => (
            <div className='brand-block__logo-btn'>
              <div className='brand-block__logo' key={item.id}>
                <img src={item.logo} alt='' />
              </div>
            </div>
          ))}
          <div className='brand-block__see-all-btn'>
            <span className='brand-block__see-all-text brand-block__logo'>
              Усі бренди
            </span>
          </div>
        </div>
      </section>
    </>
  );
};
