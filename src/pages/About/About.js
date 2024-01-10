const About = () => {
  return (
    <div className="about">
      <section className="about__header">
        <h1>About The Mag</h1>
        <p>Discover the story behind our journey.</p>
      </section>

      <section className="about__founder">
        <h2>Meet the Founder</h2>
        <div className="about__founder-info">
          <img
            src="/src/assets/images/Demo-Day-BrainStation-115.jpg"
            alt="Founder"
            className="about__founder-image"
          />
          <div className="about__founder-details">
            <p>
              Hello! I'm Alec Bana, the creator and driving force behind The
              Mag. As a software engineer based in Miami, FL, I've always been
              passionate about technology, games, movies, and television. The
              Mag is a culmination of that passion — a place where pop culture,
              tech trends, and artistic expression converge.
            </p>
            <p>
              My journey in software engineering and my deep interest in modern
              pop culture have inspired me to create a platform that not only
              informs but also entertains and provokes thought. Here at The Mag,
              we're dedicated to exploring the fascinating interplay between
              technology and entertainment, bringing unique insights and fresh
              perspectives to our readers.
            </p>
          </div>
        </div>
      </section>

      {/* Additional sections can be added here */}
    </div>
  );
};

export default About;
