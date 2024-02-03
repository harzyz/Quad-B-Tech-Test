import { useParams } from 'react-router-dom'
import styles from './moviedetail.module.css'
import { useContext, useState } from 'react'
import MovieContext from '../../context/moviecontext'

const Moviedetail = () => {
  const params = useParams()
  const { movies } = useContext(MovieContext)
  const movie = movies.find((item) => 
    item.show.id === Number(params.id)
  );

  const [ticket, setTicket] = useState(false)

  const ticketDisplay = () => {
    setTicket(true)
  }
  
  const summary = movie?.show?.summary;

  // const summaryWithoutTag = summary ? summary.replace(/<\/?p>|<\/?b>/g, '') : ''

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <main className={styles.cotain}>
      <h1 className={styles.moviename}>{movie.show.name}</h1>
      <div className={styles.wrapper}>
        <div className={styles.moviecontainer}>
          <div className={styles.movieimage}>
            {movie.show.image ? 
              <img src={movie.show.image.original} alt={movie.show.name}/>
            : 'Thumnail Not available'}
          </div>
          <span dangerouslySetInnerHTML={{ __html: summary }} />
        </div>
        <div className={styles.movieinfo}>
          <h1>Show Info</h1>
          <p>Network: {movie?.show?.network?.name}</p>
          <p>Language: {movie?.show?.language}</p>
          <div> Genre: {movie?.show?.genres.map((genre)=> (
            <span key={genre}>{genre} </span>
          ))}</div>
          <p>Runtime: {movie?.show?.runtime} minutes</p>
          <p>Schedule: {movie?.show?.schedule?.days} {movie?.show?.schedule?.time}</p>
        </div>
      </div>
      <button onClick={ticketDisplay} className={styles.ticketbtn}>Get Ticket</button>

      {ticket && <div className={styles.ticket}>
        <div className={styles.ticketimage}>
          {movie.show.image ? <img src={movie.show.image.original} alt={movie.show.name} /> : ''}
        </div>

        <div className={styles.ticketinfo}>
          <div className={styles.dateandtime}>
            <span>{movie?.show?.schedule?.days}</span>
            <span>{movie?.show?.schedule?.time}</span>
          </div>
          <div className={styles.showname}>
            <h2>{movie.show.name}</h2>
            <h2>{movie?.show?.network?.name}</h2>
          </div>
		    </div>
        <form>
          <input type="text" placeholder='Name' />
          <input type="text" placeholder='Phone No' />
        </form>
      </div>}

    </main>
  )
}

export default Moviedetail
