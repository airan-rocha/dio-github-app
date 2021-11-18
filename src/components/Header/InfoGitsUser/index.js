import './style.css';

const InfoGitsUser = ({value}) => {

    //     followers: undefined,
    //     following: undefined,
    //     public_gists: undefined,
    //     public_repos: undefined,

    return (
        <div className="container-github-info">
            <div>
                <p>Followers</p>
                <p>{value.followers}</p>
            </div>
            <div>
                <p>Followings</p>
                <p>{value.following}</p>
            </div>
            <div>
                <p>Gists</p>
                <p>{value.public_gists}</p>
            </div>
            <div>
                <p>Repositories</p>
                <p>{value.public_repos}</p>
            </div>
        </div>
    );
}

export default InfoGitsUser;