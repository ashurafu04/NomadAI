import Header from "./Components/Header/Header";
import ChatBot from "./Components/ChatBot/Chatbot";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <ChatBot />
      </main>
      <Footer />
    </div>
  );
}

export default App;
