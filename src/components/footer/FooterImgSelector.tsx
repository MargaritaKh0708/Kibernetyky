import facebook from '../../assets/icons/footer-icons/facebook.png';
import insta from '../../assets/icons/footer-icons/insta.png';
import telegram from '../../assets/icons/footer-icons/telegram.png';
import tiktok from '../../assets/icons/footer-icons/tik_tok.png';
import viber from '../../assets/icons/footer-icons/viber.png';
import logo from '../../assets/icons/footer-icons/logo.png';

export interface IFooterImgSelector {
  id: string;
}

export const FooterImgSelector: React.FC<IFooterImgSelector> = ({ id }) => {
  switch (id) {
    case 'facebook':
      return (
        <a
          className='social-media'
          href='https://www.facebook.com/kibernetiki.com.ua/'
        >
          <img src={facebook} alt='facebook' />
        </a>
      );
    case 'insta':
      return (
        <a
          className='social-media'
          href='https://www.instagram.com/kibernetiki.com.ua/?hl=ru'
        >
          <img src={insta} alt='insta' />
        </a>
      );
    case 'telegram':
      return (
        <a className='social-media' href='https://t.me/Kibernetiki_Ukraine'>
          <img src={telegram} alt='telegram' />
        </a>
      );
    case 'tiktok':
      return (
        <a className='social-media' href='https://vm.tiktok.com/ZMNS7tSUw/'>
          <img src={tiktok} alt='tiktok' />
        </a>
      );
    case 'viber':
      return (
        <a className='social-media' href='https://vb.me/letsChatOnViber'>
          <img src={viber} alt='viber' />
        </a>
      );
    case 'logo':
      return <img src={logo} alt='logo' />;
    default:
      return (
        <a
          className='social-media'
          href='https://www.instagram.com/kibernetiki.com.ua/?hl=ru'
        >
          <img src={insta} alt='insta' />
        </a>
      );
  }
};
