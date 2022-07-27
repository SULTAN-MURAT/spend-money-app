import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Receipt from "./components/Receipt";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductList />
      <ScrollToTopButton/>
      <Receipt />
      <Footer />
    </div>
  );
}

export default App;
