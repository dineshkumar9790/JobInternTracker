const AnimatedBackground = () => {
  return (
    <div className="animated-background">
      <div className="blob blob-one"></div>
      <div className="blob blob-two"></div>
      <div className="blob blob-three"></div>

      <div className="stars">
        {Array.from({ length: 30 }).map((_, index) => (
          <span key={index}></span>
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;