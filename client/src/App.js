import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Provider } from "react-redux";
import store from "./utils/store";
import "./assets/main.css";

// components
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Header from "./components/Header";
import AccountBox from "./components/AccountBox";
import AccountProvider from "./components/AccountBox/accountContext";

// pages
import Signup from "./pages/Signup";
import Quest from "./pages/Quest";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import TheRuin from "./pages/TheRuin";
import TheGraveyard from "./pages/TheGraveyard";
import TheForest from "./pages/TheForest";
import Ending from "./pages/Ending";

// music
import Tiger from "./img/Tiger-Tracks_AdobeStock_331814277_preview.m4a";
import Login from "./pages/Login";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function playSong() {
  const x = document.getElementById("audio");
  if (x.paused) {
    x.play();
  } else {
    x.pause();
  }
}

function App() {
  const [musicFile, setMusicFile] = useState(Tiger);
  const handleMusicChange = (file) => {
    setMusicFile(file);
  };
  return (
    <ApolloProvider client={client}>
      <AccountProvider>
        <Router>
          <div className="center min-height-100vh p-relative">
            <Provider store={store}>
              <Layout className="App">
                {/* <Header /> */}
                <audio
                  style={{ visibility: "hidden" }}
                  id="audio"
                  controls
                  autoPlay={true}
                  src={musicFile}
                  loop={true}
                  className="center"
                ></audio>
                <button
                  className="b-none center align-center font-reg j-center"
                  onClick={playSong}
                >
                  {" "}
                  Play Music
                </button>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route
                    path="/quest"
                    element={<Quest handleMusicChange={handleMusicChange} />}
                  />
                  <Route
                    path="/theruin"
                    element={<TheRuin handleMusicChange={handleMusicChange} />}
                  />
                  <Route
                    path="/thegraveyard"
                    element={
                      <TheGraveyard handleMusicChange={handleMusicChange} />
                    }
                  />
                  <Route
                    path="/theforest"
                    element={
                      <TheForest handleMusicChange={handleMusicChange} />
                    }
                  />
                  <Route path="/ending" element={<Ending />} />
                </Routes>
                <Footer />
              </Layout>
            </Provider>
          </div>
        </Router>
      </AccountProvider>
    </ApolloProvider>
  );
}

export default App;
