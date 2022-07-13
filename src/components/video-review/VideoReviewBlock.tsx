import { VideoReviewSwiper } from './VideoReviewSwiper';

const videoData = [
  {
    iframe: (
      <iframe
        width='100%'
        src='https://www.youtube.com/embed/mvEkWuZn1-A?controls=0&origin=https://kibernetyky-app.herokuapp.com/'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    ),
    title: "Бездротові навушники. Прості Кібер'рішення!",
  },

  {
    iframe: (
      <iframe
        width='100%'
        src='https://www.youtube.com/embed/pdnRum_gJug?controls=0&origin=https://kibernetyky-app.herokuapp.com/'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    ),
    title: 'Геймерське крісло "Scorpion". Купуй у Кібернетики.',
  },
  {
    iframe: (
      <iframe
        width='100%'
        src='https://www.youtube.com/embed/Jgzg_lHiMm0?controls=0&origin=https://kibernetyky-app.herokuapp.com/'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    ),
    title: "PowerBank. Прості Кібер'рішення.",
  },
  {
    iframe: (
      <iframe
        width='100%'
        src='https://www.youtube.com/embed/krf63SE26cM?controls=0&origin=https://kibernetyky-app.herokuapp.com/'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    ),
    title: "Прості Кібер'рішення.",
  },
  {
    iframe: (
      <iframe
        width='100%'
        src='https://www.youtube.com/embed/SK849rZj6yk?controls=0&origin=https://kibernetyky-app.herokuapp.com/'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    ),
    title: "Дитячий розумний годинник Elari KidsPhone 3. Прості Кібер'рішення!",
  },
];

export const VideoReviewBlock: React.FC = () => {
  return (
    <section className='top-categories-block container'>
      <div className='top-categories-block__header'>
        <h2 className='top-categories-block__title title'>
          Відеоогляди (тренди та новинки)
        </h2>
        <a
          rel='noreferrer'
          className='top-categories-block__all-view-btn'
          href='https://www.youtube.com/channel/UCVlYt9-6GLSwysPNCJ7C8lw'
          target='_blank'
        >
          <span>Дивитись усі</span>
          <span className='video-categories-block__all-view-btn-arrow arrow'></span>
        </a>
      </div>
      <VideoReviewSwiper data={videoData}></VideoReviewSwiper>
      <div className='top-categories-block__opacity-block' />
    </section>
  );
};
