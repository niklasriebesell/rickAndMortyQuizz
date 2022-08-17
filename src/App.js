import GlobalStyle from "./globalStyle";
import Character from "./components/main";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Character />
    </div>
  );
}

export default App;
