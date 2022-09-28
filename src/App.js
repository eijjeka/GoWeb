import Layout from "./components/Layout/Layout";
import { About } from "./components/About/About";
import { Cases } from "components/Cases";
import { Blog } from "components/Blog";
import { Team } from "components/Team";
import { Contact } from "components/Contact";

function App() {
  return (
    <Layout>
      <About />
      <Cases />
      <Blog />
      <Team />
      <Contact />
    </Layout>
  );
}

export default App;
