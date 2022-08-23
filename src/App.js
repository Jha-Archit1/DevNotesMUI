import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Notes from './pages/Notes'
import Create from './pages/Create'
import { purple } from '@mui/material/colors';
import Layout from './components/Layout';

const theme = createTheme({
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Layout>
      <Switch>
        <Route exact path="/">
          <Notes />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
      </Layout>
    </Router>
    </ThemeProvider>
  );
}

export default App;
