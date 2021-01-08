import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import api from '../../services/api';

function Dashboard() {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        async function loadTeams() {
            api.get('/teams').then(response => {
                setTeams(response.data.data);
            });
        }

        loadTeams();
    }, []);

    return (
        <>
            <h1 className="pt-40 text-2xl font-bold text-center text-blue-800">NBA TEAMS</h1>

            <div className="grid grid-cols-3 gap-5 my-20 px-4">
                {teams.map(({ id, full_name }) => (
                    <Link key={id} to={`/teams/${id}`} className="flex bg-gray-200 rounded-lg p-4 space-x-4 hover:bg-gray-100 hover:shadow-md transition">
                        <p className="text-lg font-semibold self-center">{full_name}</p>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Dashboard;