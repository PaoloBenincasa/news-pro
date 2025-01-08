import { useEffect, useState } from "react";
import { NewsItem } from "./NewsItem";

export const Newsboard = ({ category, searchResults }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (!searchResults || searchResults.length === 0) {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          if (data && data.articles) {
            setArticles(data.articles);
          } else {
            console.error("Unexpected API response structure:", data);
          }
        })
        .catch((error) => console.error("Error fetching news:", error));
    } else {
      setArticles(searchResults);
    }
  }, [category, searchResults]);

  return (
    <div>
      <h2 className="text-center mt-3 mb-3">
        {searchResults && searchResults.length > 0 ? "Search Results" : "Latest News"}
      </h2>
      <div className="newsList">
        {articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
};
