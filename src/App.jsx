import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getCatchFetch } from "./Redux/catState";

function App() {
  const cats = useSelector((store) => store.cats.cats);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCatchFetch());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>cats species Gallery</h1>
      <p>
        Images of defferent species of cats. Lots of the cats for your veiewing
        plesure
      </p>
      <hr />
      <div className="Gallery">
        {cats?.map((cat) => (
          <div key={cat.id} className="row">
            {console.log("🚀 ~ App ~ cat:", cat)}
            <div className="column column-left">
              <img
                src={"https://cdn-images.vetstreet.com/0f/0c/15556b52423f85aacd2e90e9662c/Abyssinian-AP-XHICHB-645sm3614.jpg"}
                alt={cat.name}
                width="200"
                height="200"
              />
            </div>
            <div className="column column-right">
              <h2>{cat.name}</h2>
              <h5>Temperament: {cat.temperament}</h5>
              <p>{cat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
