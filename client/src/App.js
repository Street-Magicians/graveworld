import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Provider } from "react-redux";
import store from "./utils/store";
import "./assets/main.css";

// import { Song } from "../src/static/Tiger-Tracks_AdobeStock_331814277_preview.m4a";

// components
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Home from "./pages/Home";

// pages
import Login from "./pages/Login";
import Quest from "./pages/Quest";
import TheRuin from "./pages/TheRuin";
import TheGraveyard from "./pages/TheGraveyard";
import TheForest from "./pages/TheForest";

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

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="columns height-100vh is-flex-direction-column">
          <Provider store={store}>
            <Layout className="App">
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/quest" element={<Quest />} />
                <Route path="/theruin" element={<TheRuin />} />
                <Route path="/thegraveyard" element={<TheGraveyard />} />
                <Route path="/theforest" element={<TheForest />} />
              </Routes>
              <Footer />
            </Layout>
          </Provider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

// Audio
// class Song extends Component {
//   // Create state
//   state = {
//     // Get audio file in a variable
//     audio: new Audio(Song),

//     // Set initial state of song
//     isPlaying: false,
//   };

//   // Main function to handle both play and pause operations
//   playPause = () => {
//     // Get state of song
//     let isPlaying = this.state.isPlaying;

//     if (isPlaying) {
//       // Pause the song if it is playing
//       this.state.audio.pause();
//     } else {
//       // Play the song if it is paused
//       this.state.audio.play();
//     }

//     // Change the state of song
//     this.setState({ isPlaying: !isPlaying });
//   };

//   render() {
//     return (
//       <div>
//         {/* Show state of song on website */}
//         <p>{this.state.isPlaying ? "Song is Playing" : "Song is Paused"}</p>

//         {/* Button to call our main function */}
//         <button onClick={this.playPause}>Play | Pause</button>
//       </div>
//     );
//   }
// }

export default App;
