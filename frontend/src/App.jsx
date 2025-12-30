import { Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import PropertyPage from "./pages/PropertyPage";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<SearchPage />} />
                <Route path="/property/:id" element={<PropertyPage />} />
            </Routes>

            {/* Footer appears on all pages */}
            <Footer />
        </>
    );
}

export default App;
