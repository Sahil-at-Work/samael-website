import { useEffect } from 'react';
import Section from './Section';
import { register } from 'swiper/element/bundle';

// Register Swiper custom elements
register();

const GALLERY_IMAGES = [
  {
    url: 'https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg',
    title: 'Astronomy Research',
    description: 'Exploring the cosmos through innovative telescope systems'
  },
  {
    url: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
    title: 'Electronics Projects',
    description: 'Building cutting-edge communication systems'
  },
  {
    url: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
    title: 'Software Development',
    description: 'Creating innovative solutions with modern technologies'
  },
  {
    url: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg',
    title: 'Research Publications',
    description: 'Contributing to academic knowledge and innovation'
  }
];

const GallerySection = () => {
  useEffect(() => {
    // Configure Swiper
    const swiperEl = document.querySelector('swiper-container');
    
    const swiperParams = {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        clickable: true,
      },
      navigation: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      }
    };

    // Assign parameters
    Object.assign(swiperEl!, swiperParams);
    
    // Initialize Swiper
    swiperEl?.initialize();
  }, []);

  return (
    <Section
      id="gallery"
      title="Project Gallery"
      subtitle="Visual journey through my work and achievements"
      dark
    >
      <div className="max-w-5xl mx-auto">
        <swiper-container init="false" class="h-[600px]">
          {GALLERY_IMAGES.map((image, index) => (
            <swiper-slide key={index}>
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-bold text-white mb-3">{image.title}</h3>
                  <p className="text-xl text-gray-200">{image.description}</p>
                </div>
              </div>
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </Section>
  );
};

export default GallerySection;