import { getDatabase, ref, onValue, set } from "firebase/database";
import { useEffect, useState } from "react";
const Hero = () => {

  const [hero, setHero] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const db = getDatabase();
    const heroRef = ref(db, "hero");


    setLoading(true);
    onValue(heroRef, (snapshot) => {
      const data = snapshot.val();
      setHero(data);
      setLoading(false);
    });

  
  }, []);
  return (
    <header className="hero">
      <div className="container text-center">
        <div className="hero-content">
          <img
            src={`data:image/jpg;base64, ${hero.img}`} // Replace with your profile image URL
            alt="Profile"
            className="profile-img"
          />
          <div>
            <h1>{hero.title}</h1>
            <p>{hero.subtitle}</p>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Hero;
