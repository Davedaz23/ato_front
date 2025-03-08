import React from "react";

const WinnerDisplay = ({ winner }) => {
    return (
        <div className="p-6 bg-green-100 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-green-700">Congratulations!</h2>
            {winner ? (
                <div>
                    <p className="text-xl font-medium">{winner.name}</p>
                    <p className="text-gray-600">{winner.email}</p>
                    <p className="text-gray-600">{winner.social_handle}</p>
                </div>
            ) : (
                <p>No winner selected yet.</p>
            )}
        </div>
    );
};

export default WinnerDisplay;
