import MovieLayout from "../components/layout/Movie";
import EntityMovie from "../components/movie/Entity";
import { useEffect, useState } from "react";
import FilterPanel from "../components/panels/Filter";
import { useRouter } from "next/router";
import { API_URL } from "../config";
import Paginator from "../components/UI/Paginator";
const PAGE_LIMIT = 10;

const getUrl = (baseUrl, genre, year, sort, activePage)=>{
  if (genre) {
    baseUrl += `genre=${genre}&`
  }
  if (year) {
    baseUrl += `year=${year}&`
  }
  if (sort) {
    baseUrl += `sort=${sort}&`
  }
  baseUrl += `limit=${PAGE_LIMIT}&`
  baseUrl += `skip=${PAGE_LIMIT*(activePage-1)}` 
  return baseUrl
}

const IndexPage = () => {
  const router = useRouter();
  const { genre,year,sort } = router.query;
  const [movies, setMovies] = useState([]); 
  const [pages, setPages] = useState(1)
  const [activePage, setActivePage] = useState(2)
  console.log({sort})
  useEffect(() => {
    fetch(`${API_URL}/movies?limit=${PAGE_LIMIT}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.items);
        setPages(Math.ceil(data.count/PAGE_LIMIT))
      });
  }, []);
  useEffect(() => {
    if (!genre&&!year&&!sort) return;
    let url = getUrl(`${API_URL}/movies?`,genre, year, sort, activePage)
    
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.items);
        setPages(Math.ceil(data.count/PAGE_LIMIT))
      });
  }, [genre, year, sort, activePage]);
  const changeGenre = (newGenre) => {
    if (genre === newGenre) return;
    let url = getUrl("/?", newGenre, year, sort, 1)
    router.push(url);
  };
  const changeYear = (newYear) => {
    if (year === newYear) return;
    let url = getUrl("/?", genre, newYear, sort, 1)
    router.push(url);
  };
  const changeSort = (newSort) => {
    if (sort === newSort) return;
    let url = getUrl("/?", genre, year, newSort, 1)
    router.push(url);
  };
  return (
    <MovieLayout>
      <section className="section-long">
        <div className="container">
          <FilterPanel changeGenre={changeGenre} changeYear={changeYear} changeSort={changeSort}/>
          <div className="section-bottom mb-3">
            <Paginator pages={pages} activePage={activePage} setActivePage={setActivePage}/>
          </div>
          {movies.map((movie) => {
            return <EntityMovie key={movie._id} movie={movie} />;
          })}
          <div className="section-bottom">
            <Paginator pages={pages} activePage={activePage} setActivePage={setActivePage}/>
          </div>
        </div>
      </section>
    </MovieLayout>
  );
};

export default IndexPage;
