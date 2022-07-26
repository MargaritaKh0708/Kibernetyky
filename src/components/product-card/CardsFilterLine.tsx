import { IProductCardListItem } from './ProductCardList';

interface IProductCardLine {
  data: IProductCardListItem[];
  handler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const CardsFilterLine: React.FC<IProductCardLine> = ({
  handler,
  data,
}) => {
  let categories: {
    name: string;
    id: number;
  }[] = [{ id: 0, name: 'Всі товари' }];
  let uniqueId = new Set();
  data.forEach((item) => {
    if (!uniqueId.has(item.category.id)) {
      categories.push(item.category);
      uniqueId.add(item.category.id);
    }
  });

  return (
    <div className='product-list__filter-line'>
      {categories.map((category) => (
        <label key={category.id} className='product-list__filter-line-item'>
          <input
            onChange={handler}
            value={category.id}
            type='radio'
            className='product-list__filter-line-input'
            name='goods-category'
          />
          <span className='product-list__filter-line-title'>
            {category.name}
          </span>
        </label>
      ))}
    </div>
  );
};
