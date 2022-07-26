import audio from "assets/icons/header-icons/audio-btn.png";
import search from "assets/icons/header-icons/search.png";

interface IHeaderIconsSelector {
  id: string;
}

export const HeaderIconsSelector: React.FC<IHeaderIconsSelector> = ({ id }) => {
  switch (id) {
    case "search":
      return (
        <div className='header__icon-search'>
          <img src={search} alt='search'></img>
        </div>
      );
    default:
      return (
        <div className='header__icon-default'>
          <img src={audio} alt='default'></img>
        </div>
      );
  }
};
