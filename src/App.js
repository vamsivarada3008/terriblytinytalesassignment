import React, { useState } from "react";
import "./App.css";
import { BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
function App() {
  const [wordCounts, setWordCounts] = useState(null);

  const fetchWordCounts = async () => {
    const response = await fetch("https://www.terriblytinytales.com/test.txt");
    const text = await response.text();
    const words = text.trim().toLowerCase().split(/\s+/);
    const counts = {};
    words.forEach((word) => {
      counts[word] = (counts[word] || 0) + 1;
    });

    const entries = Object.entries(counts);
    const sortedEntries = entries.sort(([, a], [, b]) => b - a);
    const slicedEntries = sortedEntries.slice(0, 20);
    const sortedCounts = slicedEntries.map(([word, count]) => ({ word, count }));
    setWordCounts(sortedCounts);
    


  };

  const exportCSV = () => {
    const csv = "Word,Count\n" +
      wordCounts.map(({ word, count }) => `${word},${count}`).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "histogram.csv");
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="App">
      {wordCounts ? (
        <>
          <h2>Histogram</h2>
          
          <ResponsiveContainer width="80%" height={400}>
            <BarChart
              width={900}
              height={400}
              data={wordCounts}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="word" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" />
             
            </BarChart>
            
         </ResponsiveContainer>
         <button className="export" onClick={exportCSV}>Export CSV</button>
          
        </>
      ) : (
        <button
          className="gradientButton"
          onClick={fetchWordCounts}>Submit</button>
      )}
    </div>
  );
}

export default App;
