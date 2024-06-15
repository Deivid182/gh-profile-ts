import RepoItem from "../repo-item/repo-item";
import styles from "./repo-list.module.css";
import { useApp } from "../../hooks/use-app";
const RepoList = () => {
  const { state } = useApp();

  return (
    <div className={styles["repo-list"]}>
      <div className={styles["repo-list__heading"]}>
        <h1 className={styles["repo-list__heading__title"]}>{state.user.name}</h1>
        <p className={styles["repo-list__heading__description"]}>
          {state.user.bio}
        </p>
      </div>
      <ul className={styles["repo-list__grid"]}>
        {state.repos.length > 0 &&
          state.repos.map((repo) => <RepoItem key={repo.id} repo={repo} />)}
      </ul>
      <button className={styles["repo-list__btn"]}>
        View all repositories
      </button>
    </div>
  );
};

export default RepoList;
