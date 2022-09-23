import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useAuth } from "../auth";
import { LinkButton } from "../components/Button";

const Home: NextPage = () => {
  const { user } = useAuth();
  return (
    <main className={styles.container}>
      <div className={styles.heading}>
        <h1>Welcome to my home page</h1>
        <p>{`User ID: ${user.keys ? user.id : "No user signed in"}`}</p>
      </div>

      <div className={styles.grid}>
        <LinkButton href="/authenticated" disabled={!user.keys}>
          Go to authenticated route
        </LinkButton>
        <LinkButton href="/login" disabled={user.keys}>
          Login
        </LinkButton>
      </div>
    </main>
  );
};

export default Home;
