import './style.css';

const InfoUser = ({value}) => {
    return (
        <div className="info-user">
          <h1 className="name">{value.name}</h1>
          <p className="login"><strong>Username:</strong> <a target='_blank' rel="noreferrer" href={value.html_url}>{value.login}</a></p>
          {value.company && <p><strong>Company:</strong> {value.company}</p>}
          {value.location && <p><strong>Location:</strong> {value.location}</p>}
          {value.blog && <p><strong>Blog:</strong> <a target='_blank' rel="noreferrer" href={value.blog}>{value.blog}</a></p>}
        </div>
    );
}

export default InfoUser;