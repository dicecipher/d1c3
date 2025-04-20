
import './styles/ParallaxStars.scss';

const ParallaxStars = () => {
  const generateStars = (count: number, size: number, opacity: number) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: size,
        opacity: opacity,
        animationDelay: Math.random() * 3
      });
    }
    return stars;
  };

  const starLayers = [
    { stars: generateStars(100, 1, 0.8), speed: 0.2, className: 'far' },
    { stars: generateStars(50, 2, 0.6), speed: 0.5, className: 'mid' },
    { stars: generateStars(25, 3, 1), speed: 1, className: 'near' }
  ];

  return (
    <div className="stars-container">
      {starLayers.map((layer, layerIndex) => (
        <div key={layerIndex} className={`stars-layer ${layer.className}`}>
          {layer.stars.map(star => (
            <div
              key={star.id}
              className="star"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                animationDelay: `${star.animationDelay}s`
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ParallaxStars;
