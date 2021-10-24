const years = [] //1911-2016
for (let i=2016; i>=1911; i--){
  years.push(i)
}
const FilterPanel = ({changeGenre, changeYear, changeSort}) => {
  const genres = ["History","Crime","Western","Thriller","Action","Sci-Fi","Drama","Horror","Music","Musical","War","Fantasy","Animation","News","Documentary","Adventure","Biography","Comedy","Mystery","Romance","Family","Sport","Short"]
  return (
    <div className="section-pannel">
      <div className="grid row">
        <div className="col-md-10">
          <form autoComplete="off">
            <div className="row form-grid">
              <div className="col-sm-6 col-lg-3">
                <div className="input-view-flat input-group">
                  <select onChange={(event)=>{
                    changeGenre(event.target.value)
                  }} className="form-control" name="genre">
                    <option value=''>Genre</option>
                    {genres.map((genre)=>{
                       return <option key={genre} value={genre}>{genre}</option> 
                    })}
                    </select>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
              <div className="input-view-flat input-group">
                  <select onChange={(event)=>{
                    changeYear(event.target.value)
                  }} className="form-control" name="year">
                    <option value="">Year</option>
                    {years.map((year)=>{
                       return <option key={year} value={year}>{year}</option> 
                    })}
                    </select>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="input-view-flat input-group">
                  <select className="form-control" name="sortBy" onChange={(event)=>{
                     changeSort(event.target.value) 
                  }}>
                    <option value="">sort by</option>
                    <option value="name">name</option>
                    <option value="rating">rating</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-2 my-md-auto d-flex">
          <span className="info-title d-md-none mr-3">Select view:</span>
          <ul className="ml-md-auto h5 list-inline">
            <li className="list-inline-item">
              <a
                className="content-link transparent-link"
                href="movies-blocks.html"
              >
                <i className="fas fa-th" />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="content-link transparent-link active"
                href="movies-list.html"
              >
                <i className="fas fa-th-list" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
