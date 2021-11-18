import './style.css';
const Repository = ({repos}) => {

    return (
        <div className="repositorie-view">
            <p>{repos.name}</p>
            <p><strong>Full name:</strong> {repos.full_name}</p>
            <p><strong>Link:</strong> <a target='_blank' rel="noreferrer" href={repos.html_url}>{repos.html_url}</a></p>
        </div>
    );
}

export default Repository;