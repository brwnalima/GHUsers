import { React, useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../card/Card';
import "./Search.css"

function Search() {
    const [data, setData] = useState(null);

    function fetchData() {
        const inputUser = document.getElementById('username')
        const username = inputUser.value;
        const apiUrl = `https://api.github.com/users/${username}`;

        axios.get(apiUrl)
            .then(response => {
                console.log(response.data);
                setData(response.data)
            })
            .catch(error => {
                console.error(error);
            });
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <label htmlFor="username">Username</label>
            <br />
            <input type="text" id='username' placeholder='digite seu nome' />
            <br />
            <button id='btn-get' onClick={fetchData}>buscar usuário</button>
            <br/>
            <div id='hide-div'>

                {data ? (
                    <div className="userData">
                        <Card avatarUrl={data.avatar_url}
                            name={data.name}
                            followers={data.followers}
                            bio={data.bio} publicRepos={data.public_repos} 
                            htmlUrl={data.html_url}/>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div>

    )
}

export default Search
