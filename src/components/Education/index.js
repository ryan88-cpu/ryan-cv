import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
const Education = () => {

  const [edu, setEdu] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const db = getDatabase();
    const eduRef = ref(db, "edu");


    setLoading(true);
    onValue(eduRef, (snapshot) => {
      const data = snapshot.val();
      setEdu(data);
      setLoading(false);
    });

  }, []);
  return (
    <section id="education" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center">Pendidikan</h2>
        <div className="row">
          {/* Experience Section */}
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Sekolah Menengah Pertama</h5>
                <p className="card-text">
                  {edu.edu1}
                </p>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Sekolah Menengah Atas</h5>
                <p className="card-text">
                 {edu.edu2}
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-center">Pengalaman</h2>

          {/* Additional Experience or Education */}
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Sport</h5>
                <p className="card-text">
                  {edu.exp1}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Music</h5>
                <p className="card-text">
                  {edu.exp2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
