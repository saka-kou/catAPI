import { useState, useEffect } from "react";
import { getCat } from "./api/catApi.js";

export default function App() {
  const [cat, setCat] = useState(null)

  const fetchCat = async () => {
    try {
      const data = await getCat();
      setCat(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCat();
  }, [])

  return (
    <div>
      <h1>Cat API</h1>
      {cat && (
        <img src={cat.url} alt="猫" width="300" />
      )}
      <button onClick={{ fetchCat }}>
        別の猫を見る
      </button>
    </div>
  );
}
