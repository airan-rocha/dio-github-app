import React, {useState, useEffect, createContext} from 'react';
import api from '../../services/api';
import Header from '../Header';
import Repositories from '../Repositories';

// export const PagesRepo = createContext();

const GitHub =({userName = 'airan-rocha', children}) => {
    const [pagesRepo, setPagesRepo] = useState(1);

    const [gitHubState, setGitHubState] = useState({
        id: undefined,
        name: undefined,
        login: undefined,
        avatar_url: undefined,
        html_url: undefined,
        company: undefined,
        location: undefined,
        blog: undefined,
        public_repos: undefined,
        public_gists: undefined,
        followers: undefined,
        following: undefined,
        repos: [{
            id: undefined,
            name: undefined,
            full_name: undefined,
            html_url:  undefined,
            description:  undefined,
        }]
    });
  
    useEffect(() => {
        setPagesRepo(1);
        api
          .get(`users/${userName}`)
          .then((response) => setGitHubState(
              prevState => { 
                console.log(`get api users: ${JSON.stringify(response)}`);
                return{
                    ...prevState,
                    id: response.data.id,
                    name: response.data.name,
                    login: response.data.login,
                    avatar_url: response.data.avatar_url,
                    html_url: response.data.html_url,
                    company: response.data.company,
                    location: response.data.location,
                    blog: response.data.blog,
                    public_repos: response.data.public_repos,
                    public_gists: response.data.public_gists,
                    followers: response.data.followers,
                    following: response.data.following,
              }}))
          .catch(err => {console.error("erro api: " + err)});
    }, [userName]); 
    
    useEffect(() => {
        api
          .get(`users/${userName}/repos?page=${pagesRepo}`)
          .then((response) => setGitHubState(
              prevState => { 
                console.log(`\n...\nget api repos: ${JSON.stringify(response)}`);
                return{
                    ...prevState,
                    repos: response.data,
              }}))
          .catch(err => {console.error("erro api: " + err)});
    }, [userName, pagesRepo]);
    
    return (
        <div>
            <Header value={gitHubState} />
            <Repositories value={gitHubState} pagesRepo={pagesRepo} setPagesRepo={setPagesRepo}  />
            {children}
        </div>
    );
}

export default GitHub;