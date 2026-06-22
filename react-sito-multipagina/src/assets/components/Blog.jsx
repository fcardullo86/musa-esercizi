import { useState, useEffect } from "react";
import { Link } from "react-router";


const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Errore nel caricamento dei dati');
        }
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchArticles();
  }, []);

  return (
    <div>
      <h2>Articoli del Blog</h2>

      {isLoading && <p>Caricamento...</p>}

      {isError && <p>Si è verificato un errore durante il caricamento degli articoli.</p>}

      {!isLoading && !isError && (
        <div>
          {articles.map((article) => (
            <div key={article.id} className="card">
              <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
                <div className="col-lg-6 px-0">
                  <h1 className="display-4 fst-italic">{article.title}</h1>
                  <p className="lead my-3">{article.body}</p>
                  <p className="lead mb-0">
                    <Link to={`/blog/${article.id}`}  className="text-body-emphasis fw-bold">Continua a leggere...</Link></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Blog;