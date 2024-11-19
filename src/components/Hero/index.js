const Hero = () => {
  return (
    <header className="hero">
      <div className="container text-center">
        <div className="hero-content">
          <img
            src="https://via.placeholder.com/150" // Replace with your profile image URL
            alt="Profile"
            className="profile-img"
          />
          <div>
            <h1>Selamat Datang di Portfolio Saya</h1>
            <p>Desainer dan Pengembang Web</p>
            <a href="#projects" className="btn btn-primary">
              Lihat Proyek Saya
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Hero;
