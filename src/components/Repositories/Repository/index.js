import './style.css';
const Repository = ({repos}) => {

    return (
        <div className="repositorie-view">
            <p>{repos.name}</p>
            <p><strong>Full name:</strong> {repos.full_name}</p>
            <p><a target='_blank' rel="noreferrer" href={repos.html_url}>Access Repository</a></p>
        </div>
    );
}

export default Repository;