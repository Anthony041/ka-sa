import "../styles/Host.css";

function Host({ host }) {
  return (
    <div className="host">
      <p>{host.name}</p>
      <img src={host.picture} alt="host" />
    </div>
  );
}

export default Host;
