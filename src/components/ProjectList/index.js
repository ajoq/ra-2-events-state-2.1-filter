import './index.css';

export default function ProjectList({ data }) {
  let id = 0;

  return (
    <div className="projects">
      <ul className="projects-list">
        {data.map((item) => (
          <li className="projects-item" key={id + 1}>
            <img src={item.img} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
}
