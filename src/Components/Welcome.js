const Welcome = () => {
  const containerStyle = {
    backgroundColor: "lightblue",
    padding: "10px",
    height: "90vh",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    border: "1px solid #ccc",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <>
      <div className="container bg-light vh-100">
        <div className="row justify-content-md-center">
          <div className="col-md-10 d-flex justify-content-center align-items-center vh-100">
            <div>
              <p className="font-weight-bold">Welcome To Real-Time Chat Room</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Welcome;
