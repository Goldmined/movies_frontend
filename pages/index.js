import MovieLayout from "../components/layout/Movie";
import EntityMovie from "../components/movie/Entity";
import { useEffect, useState } from "react";
import FilterPanel from "../components/panels/Filter";
import { useRouter } from "next/router";
import { API_URL } from "../config";

const getUrl = (baseUrl, genre, year, sort)=>{
  if (genre) {
    baseUrl += `genre=${genre}&`
  }
  if (year) {
    baseUrl += `year=${year}&`
  }
  if (sort) {
    baseUrl += `sort=${sort}&`
  }
  return baseUrl
}

const IndexPage = () => {
  const router = useRouter();
  const { genre,year,sort } = router.query;
  const [movies, setMovies] = useState([]);
  console.log({sort})
  useEffect(() => {
    fetch(`${API_URL}/movies`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.items);
      });
  }, []);
  useEffect(() => {
    if (!genre&&!year&&!sort) return;
    let url = getUrl(`${API_URL}/movies?`,genre, year, sort)
    
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.items);
      });
  }, [genre, year, sort]);
  const changeGenre = (newGenre) => {
    if (genre === newGenre) return;
    let url = getUrl("/?", newGenre, year, sort)
    router.push(url);
  };
  const changeYear = (newYear) => {
    if (year === newYear) return;
    let url = getUrl("/?", genre, newYear, sort)
    router.push(url);
  };
  const changeSort = (newSort) => {
    if (sort === newSort) return;
    let url = getUrl("/?", genre, year, newSort)
    router.push(url);
  };
  return (
    <MovieLayout>
      <section className="section-long">
        <div className="container">
          <FilterPanel changeGenre={changeGenre} changeYear={changeYear} changeSort={changeSort}/>
          {movies.map((movie) => {
            return <EntityMovie key={movie._id} movie={movie} />;
          })}
          <div className="section-bottom">
            <div className="paginator">
              <a className="paginator-item" href="#">
                <i className="fas fa-chevron-left" />
              </a>
              <a className="paginator-item" href="#">
                1
              </a>
              <span className="active paginator-item">2</span>
              <a className="paginator-item" href="#">
                3
              </a>
              <span className="paginator-item">...</span>
              <a className="paginator-item" href="#">
                10
              </a>
              <a className="paginator-item" href="#">
                <i className="fas fa-chevron-right" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </MovieLayout>
  );
};

export default IndexPage;
