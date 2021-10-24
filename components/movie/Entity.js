import Link from 'next/link'

const EntityMovie = ({ movie }) => {
  const { title, poster, imdb, runtime, plot, genres,_id } = movie;
  return (
    <article className="movie-line-entity">
      <div className="entity-poster" data-role="hover-wrap">
        <div className="embed-responsive embed-responsive-poster">
          <img className="embed-responsive-item" src={poster} alt="poster" />
        </div>
      </div>
      <div className="entity-content">
        <h4 className="entity-title">
          <Link href={`/movies/${_id}`}>
          <a className="content-link">
            {title}
          </a>
          </Link>
        </h4>
        <div className="entity-category">
        {genres.map((genre,i) => {
            return (
              <Link href={`/?genre=${genre}`}>
              <a key={i} className="content-link" >
                {genre}
                {i < genres.length-1 ? ", " : ""}
              </a>
              </Link>
            );
          })}
        </div>
        <div className="entity-info">
          <div className="info-lines">
            <div className="info info-short">
              <span className="text-theme info-icon">
                <i className="fas fa-star" />
              </span>
              <span className="info-text">{imdb.rating}</span>
              <span className="info-rest">/10</span>
            </div>
            <div className="info info-short">
              <span className="text-theme info-icon">
                <i className="fas fa-clock" />
              </span>
              <span className="info-text">{runtime}</span>
              <span className="info-rest">&nbsp;min</span>
            </div>
          </div>
        </div>
        <p className="text-short entity-text">{plot}</p>
      </div>
      <div className="entity-extra">
        <div className="text-uppercase entity-extra-title">info</div>
        <div className="entity-showtime">
          <div className="showtime-wrap">
            <div className="showtime-item">
              <span className="disabled btn-time btn" aria-disabled="true">
                11 : 30
              </span>
            </div>
            <div className="showtime-item">
              <a className="btn-time btn" aria-disabled="false" href="#">
                13 : 25
              </a>
            </div>
            <div className="showtime-item">
              <a className="btn-time btn" aria-disabled="false" href="#">
                16 : 07
              </a>
            </div>
            <div className="showtime-item">
              <a className="btn-time btn" aria-disabled="false" href="#">
                19 : 45
              </a>
            </div>
            <div className="showtime-item">
              <a className="btn-time btn" aria-disabled="false" href="#">
                21 : 30
              </a>
            </div>
            <div className="showtime-item">
              <a className="btn-time btn" aria-disabled="false" href="#">
                23 : 10
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default EntityMovie;
