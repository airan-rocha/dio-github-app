import React, {useState, useEffect, createContext} from 'react';
import api from '../../services/api';
import Header from '../Header';
import Repositories from '../Repositories';

const GitHub =({userName = 'airan-rocha', children}) => {
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
          .get(`users/${userName}/repos`)
          .then((response) => setGitHubState(
              prevState => { 
                console.log(`\n...\nget api repos: ${JSON.stringify(response)}`);
                return{
                    ...prevState,
                    repos: response.data,
              }}))
          .catch(err => {console.error("erro api: " + err)});
    }, [userName]);
    
    return (
        <view value = {gitHubState} >
            <Header value={gitHubState} />
            <Repositories value={gitHubState}/>
            {children}
        </view>
    );
}

export default GitHub;