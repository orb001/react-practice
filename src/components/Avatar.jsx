export default function Avatar({ image, isNew }) {
  return (
    <div className="avatar">
      <img className="photo" src={image} alt="Avatar" />
      {isNew && <span className="new">New</span>}
    </div>
  );
}
