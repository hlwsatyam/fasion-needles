import slide1 from '../../../../../public/images/slide-3.png';
import slide2 from '../../../../../public/images/slide-4.png';
import slide5 from '../../../../../public/images/slide-5.png';
import slide6 from '../../../../../public/images/slide-6.png';
import slide8 from '../../../../../public/images/slide-8.png';

export const data = [
  {
    cover: slide1,
    heading: 'Trendy Summer Dresses for Girls',
    description:
      'Discover our collection of stylish summer dresses that combine comfort and fashion, perfect for any occasion.',
    color: '#FF6F61', // Coral color
    btnPrimary: {
      btnText: 'Shop Summer Styles',
      url: '/products?gender=women'
    },
    btnSecondary: {
      btnText: 'View All Dresses',
      url: '/products?gender=Female'
    }
  },
  {
    cover: slide2,
    heading: 'Luxury Fragrances',
    description: 'Indulge in our exquisite range of perfumes that captivate the senses and leave a lasting impression.',
    color: '#6C5B7F', // Purple color
    btnPrimary: {
      btnText: 'Explore Fragrances',
      url: '/products?category=fragrances'
    },
    btnSecondary: {
      btnText: 'See All Perfumes',
      url: '/products?gender=All'
    }
  },
  {
    cover: slide5,
    heading: 'Chic Casual Wear for Women',
    description: 'Elevate your everyday style with our selection of chic and comfortable casual outfits for women.',
    color: '#F7B733', // Yellow-orange color
    btnPrimary: {
      btnText: 'Browse Casual Wear',
      url: '/products?category=casual-wear&gender=Female'
    },
    btnSecondary: {
      btnText: 'See All Women’s Clothing',
      url: '/products?gender=Female'
    }
  },
  {
    cover: slide8,
    heading: 'Men’s Stylish Footwear',
    description: 'Step out in style with our collection of trendy footwear designed for the modern man.',
    color: '#4A90E2', // Blue color
    btnPrimary: {
      btnText: 'Shop Men’s Shoes',
      url: '/products?category=footwear&gender=Male'
    },
    btnSecondary: {
      btnText: 'View All Footwear',
      url: '/products'
    }
  },
  {
    cover: slide6,
    heading: 'Elegant Watches for Every Occasion',
    description: 'Discover our exquisite selection of watches that blend elegance and functionality for any occasion.',
    color: '#50E3C2', // Teal color
    btnPrimary: {
      btnText: 'Shop Watches',
      url: '/products?category=watches'
    },
    btnSecondary: {
      btnText: 'See All Accessories',
      url: '/products?category=accessories'
    }
  }
];
