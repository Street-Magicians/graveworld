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

// pages
import Login from "./pages/Login";
import Quest from "./pages/Quest";
import Home from "./pages/Home";
import TheRuin from "./pages/TheRuin";
import TheGraveyard from "./pages/TheGraveyard";
import TheForest from "./pages/TheForest";

import Tiger from "./img/Tiger-Tracks_AdobeStock_331814277_preview.m4a";
import AccountProvider from "./components/AccountBox/accountContext";

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
    if (document.getElementById("audio").muted === true) {
        document.getElementById("audio").muted = false;
    } else {
        document.getElementById("audio").muted = true;
    }
}

function App() {
    return (
        <ApolloProvider client={client}>
            <AccountProvider>
                <Router>
                    <div className="columns height-100vh is-flex-direction-column">
                        <Provider store={store}>
                            <Layout className="App">
                                <Header />
                                <audio style={{ visibility: "hidden" }} id="audio" controls autoPlay={true} src={Tiger}></audio>
                                <button onClick={playSong}>Play/Pause</button>
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/login" element={<AccountBox />} />
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
            </AccountProvider>
        </ApolloProvider>
    );
}

export default App;
