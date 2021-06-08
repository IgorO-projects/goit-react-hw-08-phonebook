import { Route, Switch } from "react-router";
import Container from './components/Container';
import AppBar from "./components/AppBar/AppBar";
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import ContactsView from './views/ContactsView';



const App = () => {

  return (
    <>
    <Container>
      <AppBar/>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView}/>
        <Route path="/login" component={LoginView}/>
        <Route path="/contacts" component={ContactsView}/>
      </Switch>
    </Container>
    </>
  );

}

export default App;
