import React from 'react';
import {useState, useEffect, useRef} from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import './Stores.module.css';
import Store from './Store'

function Stores(props){
  const [stores, setStores] = useState([]);
  const mounted = useRef(true);

  useEffect(() =>{
    const url = "http://localhost:3001/stores";
    
    fetch(url)
      .then(response => response.json())
      .then( stores => {
        if(mounted.current) {         
        setStores(stores.stores);
        }
      });

    return () => mounted.current = false;
  },[stores]);

  return(
    <>
    <Header/>
    <main>
      <h1 className="sectionTitle">Lojas</h1>
      <section id='stores'>
        {
          stores && stores.map(store =>
            <Store key={store.store_id} store={store}/>
          )
        }
      </section>
    </main>
    <Footer/>
    </>
  );
}
export default Stores;