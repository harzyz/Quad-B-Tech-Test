import { useContext } from "react";
import styles from "./movielist.module.css";
import { Link } from "react-router-dom";
import MovieContext from '../../context/moviecontext'

const Movielist = () => {
  const { movies } = useContext(MovieContext)

  return (
    <main className={styles.wrapper}>
      <div className={styles.moviecontainer}>
        {movies.map((item) => (
          <Link className={styles.link} key={item.show.id} to={`/${item.show.id}`}>
            <div className={styles.surround}>
              <div className={styles.movieimage}>
                {item.show.image ? (
                  <img src={item.show.image.medium} alt={item.show.name} />
                ) : (
                  "Oops!!"
                )}
              </div>
              <h3>{item.show.name}</h3>
            </div>
        </Link>
        ))}
      </div>
    </main>
  );
};

export default Movielist;
