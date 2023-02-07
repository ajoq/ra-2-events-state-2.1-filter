import './index.css';

export default function ProjectList({ data }) {
  let id = 0;

  return (
    <div className="projects">
      <ul className="projects-list">
        {data.map((item) => (
          <li className="projects-item" key={id++}>
            <img src={item.img} alt={'Portfolio ' + item.category} />
          </li>
        ))}
      </ul>
    </div>
  );
}
