import "../styles/Tags.css";

function Tags({ tags }) {
  return (
    <div className="tags">
      <ul>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  );
}

export default Tags;
