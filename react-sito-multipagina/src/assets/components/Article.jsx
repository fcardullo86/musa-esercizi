import { useState, useEffect } from "react"; 
import { useParams } from "react-router";

const Article = () => {
  const { id } = useParams();

  
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchSingleArticle = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        
        if (!response.ok) {
          throw new Error("Articolo non trovato");
        }
        
        const data = await response.json();
        setArticle(data); 
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSingleArticle();
  }, [id]); 

  return (
    <div className="container my-5">
      {/* 3. GESTISCI I VARI SCENARI NEL RETURN */}
      {isLoading && <p>Caricamento articolo...</p>}

      {isError && <p>Si è verificato un errore o l'articolo non esiste.</p>}

      {!isLoading && !isError && article && (
        <div>
          <h2 className="text-capitalize">{article.title}</h2>
          <p className="mt-3">{article.body}</p>
          <small className="text-muted">Autore ID: {article.userId}</small>
        </div>
      )}
    </div>
  );
};

export default Article;