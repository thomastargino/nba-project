import React, { useEffect, useState } from 'react';

import { useRouteMatch, Link } from 'react-router-dom';
import api from '../../services/api';

function Team() {
    const [team, setTeam] = useState([]);
    
    const { params } = useRouteMatch();

    useEffect(() => {
        async function loadTeam() {
            api.get(`/teams/${params.id}`).then(response => {
                setTeam(response.data);
            });
        }

        loadTeam();
    }, [params]);

    return (
        <div>
            <Link to="/" className="mx-4 my-10 text-base text-blue-800 hover:text-blue-500 transition">BACK</Link>
            
            <div className="my-40 px-4">
                <h1 className="text-2xl font-bold text-center uppercase text-blue-800">{team.full_name}</h1>
                <p className="pt-20 text-base">City: {team.city}</p>  
                <p className="pt-10 text-base">Conference: {team.conference}</p>  
                <p className="pt-10 text-base">Division: {team.division}</p>  
            </div>
        </div>
    )
}

export default Team;
