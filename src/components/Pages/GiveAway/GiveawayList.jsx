import React from 'react'

const GiveawayList = ({ entries }) => {
    return (
        <div className="p-6 bg-gray-100 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Participants</h2>
            <ul className="space-y-2">
                {entries.map((entry) => (
                    <li key={entry.id} className="p-4 bg-white shadow rounded">
                        <p className="font-medium">{entry.name}</p>
                        <p className="text-sm text-gray-600">{entry.email}</p>
                        <p className="text-sm text-gray-600">{entry.social_handle}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GiveawayList