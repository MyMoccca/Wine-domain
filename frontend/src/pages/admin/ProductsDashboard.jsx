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
    <div className="container">
      <div className="row">
        <label htmlFor="product" className="mx-2 px-4">
          Modifier un produit
          <select
            name="product"
            id="product"
            onChange={(e) => getProductsToUpdate(e)}
          >
            <option value="none">Ajouter vin</option>
            {productsToUpdate.map((prod) => (
              <option key={prod.id} value={prod.id}>
                {prod.winename}
              </option>
            ))}
          </select>
        </label>
      </div>
      <form onSubmit={manageProduct} className="row mx-auto">
        <div className="form-group">
          <label>
            Nom de vin
            <input
              className="form-control"
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
          <label>
            Annee
            <input
              className="form-control"
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
          <label>
            Type de vin
            <textarea
              className="form-control"
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
          <label>
            Texte
            <textarea
              className="form-control"
              required
              minLength={1}
              value={product.variety}
              name="text"
              onChange={(event) =>
                handleProduct(event.target.name, event.target.value)
              }
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Lien de l'image
            <input
              type="url"
              className="form-control"
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
          <label>
            Texte alternatif
            <input
              type="text"
              className="form-control"
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
            <button type="submit" className="btn btn-secondary col-5 m-2">
              Valider
            </button>
            <button
              type="button"
              className="btn btn-secondary col-5 m-2"
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
            <button type="submit" className="btn btn-secondary col-3 m-2">
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
              className="btn btn-secondary col-3 m-2"
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
