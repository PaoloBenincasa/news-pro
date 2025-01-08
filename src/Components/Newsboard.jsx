import { useEffect, useState } from "react";
import { NewsItem } from "./NewsItem";

export const Newsboard = ({category}) => {
    const [articles, setArticles] = useState([]);

    // useEffect(() => {
    //     // const url = `https://newsapi.org/v2/top-headlines?country=it&language=it&apiKey=${import.meta.env.VITE_API_KEY}`;
    //     const url = `https://newsapi.org/v2/top-headlines/sources?apiKey=${import.meta.env.VITE_API_KEY}`

    //     fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles));
    //     console.log(data.articles);

    // }, []);

    useEffect(() => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (data && data.articles) {
                    setArticles(data.articles);
                } else {
                    console.error("Unexpected API response structure:", data);
                }
            })
            .catch(error => console.error("Error fetching news:", error));
    }, [category]);

    console.log(articles);
    

    return (
        <div>
            <h2 className="text-center">Latest news</h2>
            <div className="newsList " >
                {articles.map((news, index) => {
                    return <NewsItem
                        key={index}
                        title={news.title}
                        description={news.description}
                        src={news.urlToImage}
                        url={news.url} />
                })}
            </div>


        </div>
    )
}
