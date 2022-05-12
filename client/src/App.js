import logo from "./logo.svg";
import Footer from "./components/Footer";
import "./App.css";
import Layout from "./components/Layout";
import Header from "./components/Header";

function App() {
    return (
        <Layout className="App">
            <Header />
            <Footer />
        </Layout>
    );
}

export default App;
