
import Destinations from "./views/destinations"
 import { QueryClient, QueryClientProvider } from 'react-query'
import Error404 from "./views/error404page"
import { Redirect, BrowserRouter as Router, Route ,Switch } from "react-router-dom";
import Footer from './components/footer/footer'

import accueil from "./views/accueil";
import listeDeNoce from "./views/listeDeNoce";
import activites from "./views/activites";
import inscription from "./views/inscription";
import blog from "./views/blog";
import authentification from "./views/authentification"
import DetailVoyage from "./views/detailVoyage";

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}> 
    <Router>  
     
    <div className="App">
     


       {/* <Destinations/> */}
        <Switch>
        <Route path="/" exact component={accueil} />
             
        <Route path="/destinations/" exact component={Destinations} />
        <Route path="/destination/:id" exact component={Destinations} > 
         <DetailVoyage/>
        </Route>
        <Route path="/liste/" exact  component={listeDeNoce}  />
        <Route path="/activites/" exact  component={activites}  />
        <Route path="/blog/" exact  component={blog}  />
        <Route path="/inscription" exact  component={inscription}  />
        <Route path="/authentification" exact  component={authentification}  />
        <Route path="*" exact component={Error404} />
         <Redirect to="*" />

        <Route path="/search" />
        </Switch>

      <Footer/>
    </div>
    </Router>
    </QueryClientProvider>
  );
}

export default App;
