import { Controls } from "./components/Controls";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { CustomSelect } from "./components/CustomSelect";

function App() {
  return (
    <>
       <Header />
       <Main>
        <Controls  />         
       </Main>
    </>    
  );
}

export default App;
