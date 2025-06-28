# 📚 Dokumentasi Teknis Inside Tribe

Dokumentasi teknis lengkap untuk proyek Inside Tribe - Website eksplorasi budaya tertutup Indonesia.

## 🏗️ Arsitektur Aplikasi

### Tech Stack Overview
```
Frontend: React 19 + Vite
Styling: Tailwind CSS 4
Animation: Framer Motion + GSAP + AOS
Maps: Leaflet + React Leaflet
Smooth Scroll: Lenis
Package Manager: pnpm
Deployment: Vercel
```

### Struktur Komponen
```
App.jsx (Root)
├── Loading.jsx
├── ScrollToTop.jsx
└── Routes
    ├── Home.jsx
    ├── About.jsx
    ├── Tribes.jsx
    ├── Explore.jsx
    ├── NewsExplore.jsx
    └── Contact.jsx
```

## 🔧 Konfigurasi Proyek

### Vite Configuration
```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Optimized untuk production build
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animation: ['framer-motion', 'gsap', 'aos'],
          maps: ['leaflet', 'react-leaflet']
        }
      }
    }
  }
})
```

### Tailwind CSS Configuration
```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D5016',
        secondary: '#4A7C59',
        accent: '#8FBC94'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}
```

## 🎨 Sistem Animasi

### Lenis Smooth Scrolling
```javascript
// App.jsx
useEffect(() => {
  const lenis = new Lenis({
    duration: 1.0,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    mouseMultiplier: 1.2,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });
  
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);
}, []);
```

### Framer Motion Integration
```javascript
// Contoh penggunaan di komponen
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

<motion.div
  variants={fadeInUp}
  initial="initial"
  animate="animate"
>
  Content
</motion.div>
```

### GSAP Animations
```javascript
// Contoh GSAP timeline
import { gsap } from 'gsap';

useEffect(() => {
  const tl = gsap.timeline();
  
  tl.from('.hero-title', {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: 'power3.out'
  })
  .from('.hero-subtitle', {
    duration: 0.8,
    y: 50,
    opacity: 0,
    ease: 'power2.out'
  }, '-=0.5');
}, []);
```

## 🗺️ Sistem Peta

### Leaflet Configuration
```javascript
// Explore.jsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapComponent = () => {
  return (
    <MapContainer
      center={[-2.5489, 118.0149]} // Center Indonesia
      zoom={5}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {tribes.map((tribe) => (
        <Marker key={tribe.slug} position={tribe.GPS}>
          <Popup>
            <div>
              <h3>{tribe.title}</h3>
              <p>{tribe.location}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
```

## 📊 Data Management

### Struktur Data Suku
```javascript
// src/data/FullNews.js
export const FullNews = [
  {
    slug: "baduy",                    // URL identifier
    title: "Judul Artikel",           // Judul utama
    subtitle: "Subtitle artikel",     // Deskripsi singkat
    author: "Sumber artikel",         // Penulis/sumber
    location: "Banten, Indonesia",    // Lokasi geografis
    GPS: [-6.4925, 106.278],         // Koordinat latitude, longitude
    from: "https://source-url.com",   // URL sumber
    image: "https://image-url.com",   // URL gambar utama
    content: [                        // Array paragraf konten
      "Paragraf 1...",
      "Paragraf 2...",
      // ...
    ]
  }
];
```

### Data Fetching Pattern
```javascript
// Hooks untuk data management
import { useState, useEffect } from 'react';
import { FullNews } from '../data/FullNews';

export const useTribesData = () => {
  const [tribes, setTribes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setTribes(FullNews);
      setLoading(false);
    }, 1000);
  }, []);

  return { tribes, loading };
};
```

## 🧩 Komponen Detail

### PixelCard Component
```javascript
// components/PixelCard.jsx
const PixelCard = ({ tribe, onClick }) => {
  return (
    <motion.div
      className="pixel-card"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick(tribe)}
    >
      <div className="card-image">
        <img src={tribe.image} alt={tribe.title} />
      </div>
      <div className="card-content">
        <h3>{tribe.title}</h3>
        <p>{tribe.subtitle}</p>
        <span className="location">{tribe.location}</span>
      </div>
    </motion.div>
  );
};
```

### ScrollReveal Component
```javascript
// components/ScrollReveal.jsx
const ScrollReveal = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};
```

## 🎯 Performance Optimization

### Code Splitting
```javascript
// Lazy loading untuk pages
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Tribes = lazy(() => import('./pages/Tribes'));

// App.jsx
<Suspense fallback={<Loading />}>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/tribes" element={<Tribes />} />
  </Routes>
</Suspense>
```

### Image Optimization
```javascript
// Image loading strategy
const OptimizedImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`image-container ${className}`}>
      {!isLoaded && <div className="image-skeleton" />}
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={isLoaded ? 'loaded' : 'loading'}
      />
    </div>
  );
};
```

## 🔍 SEO & Meta Tags

### Meta Tags Configuration
```javascript
// components/SEO.jsx
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, image, url }) => {
  return (
    <Helmet>
      <title>{title} | Inside Tribe</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};
```

## 🧪 Testing Strategy

### Unit Testing Setup
```javascript
// __tests__/components/PixelCard.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import PixelCard from '../../components/PixelCard';

describe('PixelCard', () => {
  const mockTribe = {
    slug: 'baduy',
    title: 'Suku Baduy',
    subtitle: 'Suku asli Banten',
    image: 'test-image.jpg'
  };

  test('renders tribe information correctly', () => {
    render(<PixelCard tribe={mockTribe} />);
    
    expect(screen.getByText('Suku Baduy')).toBeInTheDocument();
    expect(screen.getByText('Suku asli Banten')).toBeInTheDocument();
  });

  test('calls onClick when clicked', () => {
    const mockOnClick = jest.fn();
    render(<PixelCard tribe={mockTribe} onClick={mockOnClick} />);
    
    fireEvent.click(screen.getByRole('button'));
    expect(mockOnClick).toHaveBeenCalledWith(mockTribe);
  });
});
```

## 🚀 Deployment Checklist

### Pre-deployment
- [ ] Run `pnpm build` successfully
- [ ] Test all routes and functionality
- [ ] Check responsive design on multiple devices
- [ ] Validate all images load correctly
- [ ] Test map functionality
- [ ] Verify smooth scrolling works
- [ ] Check loading states

### Vercel Configuration
```json
// vercel.json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

## 🔧 Troubleshooting

### Common Issues

#### Smooth Scrolling Not Working
```javascript
// Check if Lenis is properly initialized
useEffect(() => {
  if (typeof window !== 'undefined') {
    const lenis = new Lenis();
    // ... rest of setup
  }
}, []);
```

#### Map Not Loading
```javascript
// Ensure Leaflet CSS is imported
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
```

#### Animation Performance Issues
```javascript
// Use will-change CSS property for better performance
const animatedElement = {
  willChange: 'transform',
  transform: 'translateZ(0)' // Force hardware acceleration
};
```

## 📈 Analytics & Monitoring

### Performance Monitoring
```javascript
// Track Core Web Vitals
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric) {
  // Send to your analytics service
  console.log(metric);
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

---

**Dokumentasi ini akan terus diperbarui sesuai dengan perkembangan proyek.** 