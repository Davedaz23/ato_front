import React, { useState } from "react";
import { api } from "../../../api";

const AIPrompt = () => {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      alert("Please enter a prompt.");
      return;
    }

    setLoading(true);
    setError(""); // Clear previous errors
    setResult(""); // Clear previous results

    try {
      // Send the request to the backend
      const response = await api.post("/ai/generate-idea", { prompt });

      // Extract and handle the result from the response
      setResult(response.data.result || "No result generated.");
    } catch (err) {
      console.error("Error generating AI prompt:", err);

      // Display a user-friendly error message
      if (err.response) {
        // Backend returned an error response
        setError(err.response.data.error || "Server Error. Please try again.");
      } else if (err.request) {
        // No response from the backend
        setError("Network Error. Please check your connection.");
      } else {
        // Something else went wrong
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ai-prompt-container p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">AI Marketing Ideas Generator</h1>
      <textarea
        className="w-full p-2 border rounded mb-4"
        placeholder="Enter your creative marketing prompt here..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      ></textarea>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleGenerate}
        disabled={loading}
        aria-busy={loading}
      >
        {loading ? "Generating..." : "Generate Ideas"}
      </button>

      {/* Error Message */}
      {error && (
        <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          <h2 className="text-lg font-semibold">Error:</h2>
          <p>{error}</p>
        </div>
      )}

      {/* Result Message */}
      {result && (
        <div className="mt-4 p-4 bg-gray-100 border rounded">
          <h2 className="text-lg font-semibold">Generated Ideas:</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default AIPrompt;
