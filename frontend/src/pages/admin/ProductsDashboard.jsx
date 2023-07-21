import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import connexion from "../../services/connexion";

const productModel = {
  id: null,
  winename: "",
  year: "",
  type: "",
  variety: "",
  price: "",
  details: "",
  src: "",
  alt: "",
};

function ProductsDashboard() {
  const [product, setProduct] = useState(productModel);
  const [productsToUpdate, setProductsToUpdate] = useState([]);

  const getProductsToUpdate = async (event) => {
    event.preventDefault();
    const productData = await connexion.get(`/vins/${event.target.value}`);
    try {
      if (productData) {
        setProduct(productData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getProduct = async () => {
    const productData = await connexion.get("/vins");
    try {
      if (productData) {
        setProductsToUpdate(productData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleProduct = (name, value) => {
    setProduct({ ...product, [name]: value });
  };
  const postProduct = async () => {
    try {
      const productData = await connexion.post("/vins", product);
      setProduct(productData);
      getProduct();
      toast.success(`🦄 Article ajouté`);
    } catch (error) {
      console.error(error);
      toast.error(`Une erreur est survenu`);
    }
  };

  const updateArticle = async () => {
    try {
      const res = await connexion.put(`/vins/${product.id}`, product);
      if (res.status === 201) {
        toast.success(`🦄 Product mis à jour`);
      } else {
        throw new Error(res.statusText);
      }
    } catch (error) {
      console.error(error);
      toast.error(`Une erreur est survenu`);
    }
  };

  const manageProduct = (event) => {
    event.preventDefault();
    if (product.id) {
      updateArticle();
    } else {
      postProduct();
    }
  };

  const deleteProduct = async (event) => {
    event.preventDefault();
    try {
      const res = await connexion.delete(`/vins/${product.id}`);
      if (res.status === 201) {
        setProduct(productModel);
        setProductsToUpdate(
          productsToUpdate.filter((prod) => prod.id !== product.id)
        );
        toast.success(`🦄 Product supprimé`);
      } else {
        throw new Error(res.statusText);
      }
    } catch (error) {
      console.error(error);
      toast.error(`Une erreur est survenu`);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="admin-container">
      <div>
        <label htmlFor="product" className="form-label-item">
          Modifier un produit
          <select
            className="basic-input-item select-item"
            name="product"
            id="product"
            onChange={(e) => getProductsToUpdate(e)}
          >
            <option value="none" className="basic-input-item">
              Ajouter vin
            </option>
            {productsToUpdate.map((prod) => (
              <option key={prod.id} value={prod.id}>
                {prod.winename}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="main-form-container">
        <form onSubmit={manageProduct} className="form-container-items">
          <div className="form-group">
            <label className="form-label-item">
              Nom de vin
              <input
                className="basic-input-item"
                type="text"
                required
                minLength={1}
                maxLength={255}
                value={product.winename}
                name="winename"
                onChange={(event) =>
                  handleProduct(event.target.name, event.target.value)
                }
              />
            </label>
          </div>
          <div className="form-group">
            <label className="form-label-item">
              Année
              <input
                className="basic-input-item"
                type="text"
                required
                minLength={1}
                maxLength={255}
                value={product.year}
                name="year"
                onChange={(event) =>
                  handleProduct(event.target.name, event.target.value)
                }
              />
            </label>
          </div>
          <div className="form-group">
            <label className="form-label-item">
              Type de vin
              <textarea
                className="basic-input-item"
                required
                minLength={1}
                value={product.type}
                name="type"
                onChange={(event) =>
                  handleProduct(event.target.name, event.target.value)
                }
              />
            </label>
          </div>
          <div className="form-group">
            <label className="form-label-item">
              Variete
              <textarea
                className="basic-input-item"
                required
                minLength={1}
                value={product.variety}
                name="variety"
                onChange={(event) =>
                  handleProduct(event.target.name, event.target.value)
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
                value={product.src}
                name="src"
                onChange={(event) =>
                  handleProduct(event.target.name, event.target.value)
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
                value={product.alt}
                name="alt"
                onChange={(event) =>
                  handleProduct(event.target.name, event.target.value)
                }
              />
            </label>
          </div>
          {!product.id && (
            <div className="row">
              <button type="submit" className="admin-btn">
                Valider
              </button>
              <button
                type="button"
                className="admin-btn"
                onClick={(e) => {
                  e.preventDefault();
                  setProduct(productModel);
                }}
              >
                Annuler
              </button>
            </div>
          )}
          {product.id && (
            <div className="row">
              <button type="submit" className="admin-btn">
                Modifier
              </button>
              <button
                type="button"
                onClick={(e) => deleteProduct(e)}
                className="btn btn-secondary col-3 m-2"
              >
                Supprimer
              </button>
              <button
                type="button"
                className="admin-btn"
                onClick={(e) => {
                  e.preventDefault();
                  setProduct(productModel);
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

export default ProductsDashboard;

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
