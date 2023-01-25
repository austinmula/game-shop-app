const Heading = ({ title, subtitle }) => {
  return (
    <div className="p-4 md:p-6 flex flex-col items-center">
      <h2 className="text-5xl mt-6 mb-4" style={headingStyle}>
        {title}
      </h2>
      <p className="mb-4" style={paragraphStyle}>
        {subtitle}
      </p>
    </div>
  );
};

const paragraphStyle = {
  fontFamily: `"Poppins", sans-serif`,
  color: "#bfc0c0",
};

const headingStyle = {
  fontFamily: `"Poppins", sans-serif`,
  color: "#ef8354",
};

export default Heading;
