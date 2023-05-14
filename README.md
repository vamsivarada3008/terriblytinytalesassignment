
# About the project
This is a React functional component that fetches a text file from an external URL, counts the frequency of words in the text, and displays a histogram chart of the top 20 most frequent words using the Recharts library. It also allows the user to export the histogram data as a CSV file.

## Here is an overview of the components and their functionalities in this code:

- `App`: This is the main component that renders the entire application. It contains the state for `wordCounts`, which is initially set to `null` and gets updated with an array of objects containing the top 20 most frequent words and their counts after the `fetchWordCounts` function is called.

- `fetchWordCounts`: This asynchronous function fetches the text file from the external URL, converts the text into an array of lowercase words, counts the frequency of each word using an object, sorts the words by frequency in descending order, selects the top 20 words, and sets the state for `wordCounts` with an array of objects containing each word and its count.

- `exportCSV`: This function generates a CSV file from the `wordCounts` data and allows the user to download the file when they click the "Export CSV" button.

- `BarChart`, `Bar`, `XAxis`, `YAxis`, `CartesianGrid`, `Tooltip`, `Legend`, and `ResponsiveContainer`: These are components from the Recharts library that render the histogram chart. `BarChart` is the main component that renders the chart itself, and it takes in the data from `wordCounts`. `Bar` is a child component of `BarChart` that represents each bar in the chart. `XAxis` and `YAxis` represent the x and y axes of the chart, respectively. `CartesianGrid` adds a grid to the chart. `Tooltip` displays the count value of each bar when the user hovers over it. `Legend` adds a legend to the chart. `ResponsiveContainer` allows the chart to be responsive to the size of the container it's in.

- `exportCSV` button: This button allows the user to download the `wordCounts` data as a CSV file when clicked.

Overall, this code fetches and counts the frequency of words in a text file, displays the top 20 most frequent words in a histogram chart using Recharts, and allows the user to download the data as a CSV file.

# Preview of the application
- https://thunderous-rabanadas-1591f6.netlify.app/
