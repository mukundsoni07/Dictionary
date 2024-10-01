import { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';
import {Container } from '@mui/material';
import Definitions from "./components/Definitions/Definitions";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {

  const [word, setWord] = useState(""); 
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");

  const dictionaryApi = async () => {
    try{
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      setMeanings(data.data);
      console.log(meanings);
      
    }
    catch(error){
      console.log(error);
      
    }
  };

  useEffect(() => {
    dictionaryApi();
  }, [word, category]);


  return (
    <>
      <div
      className="App"
      style={{
        height: "100vh",
        backgroundColor:"#282c34",
        color:"white",
        transition: "all 0.5s linear",
      }}
    >
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-evenly",
        }}
      >
        <Header
          setWord={setWord}
          category={category}
          setCategory={setCategory}
          word={word}
          setMeanings={setMeanings}
        />
        {meanings && (
          <Definitions
            meanings={meanings}
            word={word}
            category={category}
          />
        )}
      </Container>
      <Footer/>
    </div>
    </>
  )
}

export default App
