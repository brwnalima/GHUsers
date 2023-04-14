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
        <div className='search'>
            <img id='logo' src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/>
            <h1>GHUSERS</h1>
            <label htmlFor="username">Who are you looking for today?</label>

            <div className='inp-btn'>
                <input type="text" id='username' placeholder='digite seu nome' />
                <button id='btn-get' onClick={fetchData}>Search user</button>
            </div>

            <div id='hide-div'>

                {data ? (
                    <div className="userData">
                        <Card avatarUrl={data.avatar_url}
                            name={data.name}
                            followers={data.followers}
                            following={data.following}                            
                            bio={data.bio} publicRepos={data.public_repos} 
                            htmlUrl={data.html_url}/>

                        <span>Click on the card for more information.</span>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div>

    )
}

export default Search
