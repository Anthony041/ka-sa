import "../styles/Banner.css";

function Banner({ text, page }) {
  return (
    <div className="banner" id={page}>
      <p>{text}</p>
    </div>
  );
}

export default Banner;
