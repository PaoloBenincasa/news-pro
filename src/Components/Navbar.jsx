import { useState } from "react";

export const Navbar = ({ setCategory, setSearchResults }) => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchSearchedArticles = async (query) => {
    if (!query) {
      setSearchResults([]); // Reset se il campo è vuoto
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=${import.meta.env.VITE_API_KEY}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      setSearchResults(json.articles || []);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
      setSearch(""); // Reset dell'input dopo la ricerca
    }
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetchSearchedArticles(search);
  };

  const handleCategoryClick = (category) => {
    setSearchResults([]); // Reset risultati di ricerca
    setCategory(category); // Imposta la nuova categoria
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <span className="badge bg-light text-dark">News Pro</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" onClick={() => handleCategoryClick("business")}>
                Business
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => handleCategoryClick("entertainment")}>
                Entertainment
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => handleCategoryClick("health")}>
                Health
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => handleCategoryClick("science")}>
                Science
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => handleCategoryClick("sports")}>
                Sports
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => handleCategoryClick("technology")}>
                Technology
              </a>
            </li>
          </ul>
        </div>
        <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            value={search}
            onChange={handleSearchChange}
          />
          <button className="btn btn-outline-success" type="submit" disabled={loading}>
            {loading ? "Loading..." : "Search"}
          </button>
        </form>
      </div>
    </nav>
  );
};
