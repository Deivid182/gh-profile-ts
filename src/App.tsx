import Header from "./components/header/header";
import CardProfile from "./components/card-profile/card-profile";
import RepoList from "./components/repo-list/repo-list";
const App = () => {

  return (
    <div className="App">
      <Header />
      <CardProfile />
      <RepoList />
    </div>
  );
};

export default App;
