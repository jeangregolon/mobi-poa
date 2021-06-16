import Line from "../components/Line" 
import React, { useEffect, useState } from "react" 
import LoadingBox from "../components/LoadingBox" 
import MessageBox from "../components/MessageBox" 
import { useDispatch, useSelector } from "react-redux" 
import { listLines } from "../actions/lineActions" 

export default function HomeScreen(props) {
  const dispatch = useDispatch() 
  const lineList = useSelector((state) => state.lineList) 
  const { loading, error, lines } = lineList 
  const [searchLine, setSearchLine] = useState("") 

  useEffect(() => {
    dispatch(listLines()) 
  }, [dispatch]) 

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <form className="search-box" >
            <div className="container center">
              <label className="search-label" htmlFor="search-input">
                <input
                  type="text"
                  
                  id="search-input"
                  placeholder="Pesquisar linha..."
                  onChange={e => {setSearchLine(e.target.value)}}
                />
                <i className="fa fa-search search-icon" />
              </label>
            </div>
          </form>
          <div className="row center">
            {lines
              .filter((line) => {
                if (searchLine === "") {
                  return line
                } else if(line.codigo.toLowerCase().includes(searchLine.toLocaleLowerCase()) 
                  || line.nome.toLowerCase().includes(searchLine.toLocaleLowerCase()) ){
                  return line
                }
                return ''
              })
              .map((line) => (
              <Line key={line.id} line={line}></Line>
            ))}
          </div>
        </div>
      )}
    </div>
  ) 
}
