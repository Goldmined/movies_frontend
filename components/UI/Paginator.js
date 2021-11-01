const Paginator = ({pages, activePage, setActivePage}) => {

  return (
    <div className="paginator">
    <a className="paginator-item" href="#" onClick={(event)=>{
        event.preventDefault()
        if (activePage<=1) return
        
        setActivePage(activePage-1)
    }}>
      <i className="fas fa-chevron-left" />
    </a>
    <a className="paginator-item" href="#">
      1
    </a>
    <span className="active paginator-item">{activePage}</span>
    <a className="paginator-item" href="#">
      3
    </a>
    <span className="paginator-item">...</span>
    <a className="paginator-item" href="#">
      {pages}
    </a>
    <a className="paginator-item" href="#" onClick={(event)=>{
        event.preventDefault()
        if (activePage>=pages) return
        setActivePage(activePage+1)
    }}>
      <i className="fas fa-chevron-right" />
    </a>
  </div>
  )
}

export default Paginator