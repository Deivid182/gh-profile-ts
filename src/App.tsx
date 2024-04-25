import Header from "./components/header/header";
import CardProfile from "./components/card-profile/card-profile";
import RepoList from "./components/repo-list/repo-list";
const App = () => {
  // useEffect(() => {
  //   const fetchUserGH = async () => {
  //     fetch("https://api.github.com/users/Deivid182")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };

  //   fetchUserGH();
  // }, []);


  return (
    <div className="App">
      <Header />
      <CardProfile />
      <RepoList />
    </div>
  );
};

export default App;
