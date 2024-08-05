import React, { useState } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      iconUrl: 'https://s3-alpha-sig.figma.com/img/bb8b/3bf3/db4e09ac2805847d3804f69b01bc4644?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E3wWLpzBktoIeJnny6BkscN~ZJLvSQYHkHcBtEnf924DDYFtO0ktzefcix4cLrvpo4Xw3cSPw~8nDoxN13u8toFklPVf6cLNhlw1cm6lgF9vnQHhdPSxJBK7m0F3JGivuU89ISvMtLRFH8MvRZ4mVrZdKxHsUfVk~9seV4BLkWRCjYFAL06jIPNKD5~t6tZF3Dh9KJDqeQxa6qmW3huUz6UWFxf0QXUbb8PAsJEH5ZL4xguwHnxugZnQMXbZS2vycvM5bsVc8VoEqlKzYcRcEDBZQLxqZqcTtopTQ~KgsasPEYzHbfB7BLzzs5MIroCrP8rTlFpik5rP8ylOb-r-nQ__',
      title: 'Model',
      description: 'Find the flawless fit for your campaign.',
    },
    {
      iconUrl: 'https://s3-alpha-sig.figma.com/img/3ae6/0741/61a39a48894dfac91b9627801304cad0?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hm9HK9SVAbzQoRHBxRE3R7CxFTWA6C~3ATSHCCX5fQDncMYofWjEL0hgrtDqme7~fc5EzS~gAAallTHkUAoUTxYSHE4LOnaucUq-wDzQMpoZZneXBVL1sSAvVDAN6yMq85NR3j74yett8irovouPpfIOv4xNt3OPv51C8qRfIkoUyN~G6zOUR24ktgJ4D7mNTzsd4FQ635U1vnol1VvperBDG0CQefVqUYidv8rghzU-ywhSLRRxkDz8~~1sSevv-v4JklOFYFkutnjrbJKxg31i8BVtq08R8z4KMll8Ucy-b3SCe3Y2ulQU71itD8WwZ3o2mr6UMuK6H5l2sHkQ-Q__',
      title: 'Actor',
      description: 'Discover the stars for your screen.',
    },
    {
      iconUrl: 'https://s3-alpha-sig.figma.com/img/9713/7b2f/9d2de8f0213f9da9c2d08933e3a3ab1b?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=plwd1R~8tmkcyDqaobK8uPJ5wO4IW1SDFDbb~EV4t6Eqlz~HR1nwvoYe2-YwUo5Qx~K2XLQBYmLG2cxhTsD-NfWyKfN~G3woe9QAWR0RqyWd~B~tF1r0IPNmwEkRu7k-pFFS1vObtzmuelICeTbWUjdnGz8lz9xDvlYtJeDjJ-8jJySf56yRy64UMOuNPzD3-3NNhuXEPeG58ywLrweiphBYUWwOQMKar5F~sqDsSYe5gIgxL2otpxh-tGk46rYba8nDXWiKwLEY6w3MuyE002c0u5Ffy3-qofoNbhZEWv1Nk7DcgKU~bM6OEuS6Ho6Y6I5NLEvd7HzDulW2SAyDGQ__',
      title: 'Performer',
      description: 'Find dynamic talent for stage.',
    },
    {
      iconUrl: 'https://s3-alpha-sig.figma.com/img/6758/6caa/4e42995dbcc3a9363eb03c2a1491e0c9?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BUngcM-BN22p~IHjrUO~bv6aCTNDihJxjzQA-prGQGr0QXuJSD16nTCmTqn461Rj1iRQH2ihri1ttWUUj-87uKnbl9xgvhWc8c15e1ZeVU4Bzi~FH2n74HoEgfF~-5f~FnbLBACDf~O9gwc3rb8x0TCkLvPlEl8kl3PeTfz7l7oeKeoQbLRsHbUHicZy2CmNjYl-NmgiM79j7VJnaQvc2XcD7F0A9eoK~cUnL7LCqsws9MgMJb6q2JTKY8VcV8XLgo6pl2oyCbxeNiCguEfjKhZegA~voWMY35-ayvrfx73ZbeNqHz5dJ1nv3qkHOQtYtD3-WYacOCTjCML3HEvT0A__',
      title: 'Voiceover Artists',
      description: 'Find the ideal voice.',
    },
    {
      iconUrl: 'https://s3-alpha-sig.figma.com/img/30fa/a4d4/21a92fd94f78f9ac02f60cb2d7211aab?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TdPddLZyEU-dDn~ueHHWVdb6GckPOK0WR8BEtSBVlHPG-gRMgp8Gi2X9IPDrIWyHij1fman1vPCDiolaL7aHPgTMma77583wLfzauxjKzAAF-k0j804deOZA1R7OKhkRpqy5rkqb6Ead8uIeuW9rhJivvoVi~tEbc4ufoPoZs4oJ2MYGtdnT-CDoAUB5mrga~mQH8aKD7T6plda1V3epp70b7P1Gm874cSw0yr8k0LcpBFN7hpXCiblVuYhQ3R6xs~TmBjde5qz4wbfolzKusi1rV0h0mgZD6YduMwd50UXLPhHVfk33s~SickaV786nX2DjrSPsVWZQou99AXU4ZA__',
      title: 'Content Creators',
      description: 'Inspire the innovative minds.',
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === activeIndex ? 'active' : ''}`}
          >
            <div className="slide-content algin-center">
              <img src={slide.iconUrl} className='slide-img' alt="Icon" />
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="prev-btn" onClick={prevSlide}>
        <i className="fa fa-chevron-left"></i>
      </button>
      <button className="next-btn" onClick={nextSlide}>
        <i className="fa fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Carousel;