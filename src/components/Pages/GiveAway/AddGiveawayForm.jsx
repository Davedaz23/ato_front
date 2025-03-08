import React,{useState, useEffect} from 'react'
import { api } from '../../../api';



const AddGiveawayForm=({ onEntryAdded }) => {
    const [formData, setFormData] = useState({ name: "", email: "", social_handle: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            await api.post("/entries", formData);
            setFormData({ name: "", email: "", social_handle: "" });
            onEntryAdded();
        } catch (err) {
            setError("Failed to add entry. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="p-4  border-2 border-[#FD5F20] shadow-lg rounded-md max-w-xs mx-auto" onSubmit={handleSubmit}>
        <h2 className="text-lg font-semibold mb-2 text-center"> Apply for a Giveaway</h2>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <div className="mb-2">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring focus:ring-blue-200"
                required
            />
        </div>
        <div className="mb-2">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring focus:ring-blue-200"
                required
            />
        </div>
        <div className="mb-2">
            <label className="block text-sm font-medium mb-1">Social Handle</label>
            <input
                type="text"
                name="social_handle"
                value={formData.social_handle}
                onChange={handleChange}
                className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring focus:ring-blue-200"
                required
            />
        </div>
        <button
            type="submit"
            className="bg-[#FD5F20] text-white px-3 py-1 rounded text-sm hover:bg-[#FD5F20] hover:bg-opacity-70 w-full shadow-md"
            disabled={loading}
        >
            {loading ? "Submitting..." : "Submit"}
        </button>
    </form>
    

    );
};

export default AddGiveawayForm