import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import connexion from "../../services/connexion";

const articleModel = {
  id: null,
  title: "",
  subtitle: "",
  resume: "",
  text: "",
  src: "",
  alt: "",
};

function Admindashboard() {
  const [article, setArticle] = useState(articleModel);
  const [articlesToUpdate, setArticlesToUpdate] = useState([]);

  const getArticleToUpdate = async (event) => {
    event.preventDefault();
    const articleData = await connexion.get(`/articles/${event.target.value}`);
    try {
      if (articleData) {
        setArticle(articleData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getArticles = async () => {
    const articlesData = await connexion.get("/articles");
    try {
      if (articlesData) {
        setArticlesToUpdate(articlesData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleArticle = (name, value) => {
    setArticle({ ...article, [name]: value });
  };
  const postArticle = async () => {
    try {
      const articleData = await connexion.post("/articles", article);
      setArticle(articleData);
      getArticles();
      toast.success(`🦄 Article ajouté`);
    } catch (error) {
      console.error(error);
      toast.error(`Une erreur est survenu`);
    }
  };

  const updateArticle = async () => {
    try {
      const res = await connexion.put(`/articles/${article.id}`, article);
      if (res.status === 204) {
        toast.success(`🦄 Article mis à jour`);
      } else {
        throw new Error(res.statusText);
      }
    } catch (error) {
      console.error(error);
      toast.error(`Une erreur est survenu`);
    }
  };

  const manageArticle = (event) => {
    event.preventDefault();
    if (article.id) {
      updateArticle();
    } else {
      postArticle();
    }
  };

  const deleteArticle = async (event) => {
    event.preventDefault();
    try {
      const res = await connexion.delete(`/articles/${article.id}`);
      if (res.status === 204) {
        setArticle(articleModel);
        setArticlesToUpdate(
          articlesToUpdate.filter((art) => art.id !== article.id)
        );
        toast.success(`🦄 Article supprimé`);
      } else {
        throw new Error(res.statusText);
      }
    } catch (error) {
      console.error(error);
      toast.error(`Une erreur est survenu`);
    }
  };
  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div className="admin-container">
      <div>
        <label htmlFor="article" className="form-label-item">
          Modifier un article
          <select
            className="basic-input-item select-item"
            name="article"
            id="article"
            onChange={(e) => getArticleToUpdate(e)}
          >
            <option value="none" className="basic-input-item">
              Nouveau article
            </option>
            {articlesToUpdate.map((art) => (
              <option key={art.id} value={art.id}>
                {art.title}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="main-form-container">
        <form onSubmit={manageArticle} className="form-container-items">
          <div className="form-group">
            <label className="form-label-item">
              Titre
              <input
                className="basic-input-item"
                type="text"
                required
                minLength={1}
                maxLength={255}
                value={article.title}
                name="title"
                onChange={(event) =>
                  handleArticle(event.target.name, event.target.value)
                }
              />
            </label>
          </div>
          <div className="form-group">
            <label className="form-label-item">
              Sous titre
              <input
                className="basic-input-item"
                type="text"
                required
                minLength={1}
                maxLength={255}
                value={article.subtitle}
                name="subtitle"
                onChange={(event) =>
                  handleArticle(event.target.name, event.target.value)
                }
              />
            </label>
          </div>
          <div className="form-group">
            <label className="form-label-item">
              Résumé
              <textarea
                className="basic-input-item"
                required
                minLength={1}
                value={article.resume}
                name="resume"
                onChange={(event) =>
                  handleArticle(event.target.name, event.target.value)
                }
              />
            </label>
          </div>
          <div className="form-group">
            <label className="form-label-item">
              Texte
              <textarea
                className="basic-input-item"
                required
                minLength={1}
                value={article.text}
                name="text"
                onChange={(event) =>
                  handleArticle(event.target.name, event.target.value)
                }
              />
            </label>
          </div>
          <div className="form-group">
            <label className="form-label-item">
              Lien de l'image
              <input
                type="url"
                className="basic-input-item"
                required
                maxLength={255}
                value={article.src}
                name="src"
                onChange={(event) =>
                  handleArticle(event.target.name, event.target.value)
                }
              />
            </label>
          </div>
          <div className="form-group">
            <label className="form-label-item">
              Texte alternatif
              <input
                type="text"
                className="basic-input-item"
                required
                maxLength={255}
                minLength={1}
                value={article.alt}
                name="alt"
                onChange={(event) =>
                  handleArticle(event.target.name, event.target.value)
                }
              />
            </label>
          </div>
          {!article.id && (
            <div className="row">
              <button type="submit" className="admin-btn">
                Valider
              </button>
              <button
                type="button"
                className="admin-btn"
                onClick={(e) => {
                  e.preventDefault();
                  setArticle(articleModel);
                }}
              >
                Annuler
              </button>
            </div>
          )}
          {article.id && (
            <div className="row">
              <button type="submit" className="admin-btn">
                Modifier
              </button>
              <button
                type="button"
                onClick={(e) => deleteArticle(e)}
                className="admin-btn"
              >
                Supprimer
              </button>
              <button
                type="button"
                className="admin-btn"
                onClick={(e) => {
                  e.preventDefault();
                  setArticle(articleModel);
                }}
              >
                Annuler
              </button>
            </div>
          )}
        </form>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );
}

export default Admindashboard;

/**
 * title
 * subtitle
 * resume
 * text
 * author => admin en auto
 * id en auto
 * images
 *  text alt
 * tags => select depuis la BDD
 */
