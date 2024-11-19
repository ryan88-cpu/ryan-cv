const Education = () => {
  return (
    <section id="experience-education" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center">Pengalaman & Pendidikan</h2>
        <div className="row">
          {/* Experience Section */}
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Pengalaman 1</h5>
                <p className="card-text">
                  Deskripsi singkat tentang pengalaman kerja atau proyek yang
                  relevan.
                </p>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Pendidikan 1</h5>
                <p className="card-text">
                  Deskripsi singkat tentang latar belakang pendidikan Anda.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Experience or Education */}
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Pengalaman 2</h5>
                <p className="card-text">
                  Deskripsi singkat pengalaman kerja atau proyek yang lainnya.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Pendidikan 2</h5>
                <p className="card-text">
                  Deskripsi singkat tentang pendidikan lanjutan atau kursus
                  terkait.
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
