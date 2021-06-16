import React, { useEffect } from "react" 
import { useDispatch, useSelector } from "react-redux" 
import { detailsLine } from "../actions/lineActions" 
import LoadingBox from "../components/LoadingBox" 
import MessageBox from "../components/MessageBox" 

export default function LineScreen(props) {
  const dispatch = useDispatch() 
  const lineId = props.match.params.id 
  const lineDetails = useSelector((state) => state.lineDetails) 
  const { loading, error, line } = lineDetails 

    function renderRows(){
        var count = Object.keys(line).length - 4
        var rows = []
        for(let i = 0;  i <= count;  i++){
            rows.push(
                <a
                href={`https://www.google.com/maps/?q=${line[i].lat},${line[i].lng}`}
              >
                <div key={i} className="card row">
                  <i className={`fa fa-map-marker card-item`}></i>
                  <h3 className="line-lat">Lat: {line[i].lat}</h3>
                  <h3 className="line-lng">Lng: {line[i].lng}</h3>
                </div>
              </a> 
            )
        }
        return rows
    }

    useEffect(() => {
      dispatch(detailsLine(lineId)) 
    }, [dispatch, lineId]) 

    return (
      <div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div>
            <div className="row center">
              <h1 className="line-code">{line.codigo}</h1>
              <h1 className="line-name">{line.nome}</h1>
            </div>
            <div>
              <h1>Itinerário</h1>
              {/* Render rows */}
                {renderRows()}
                {/* <a
                href={`https://www.google.com/maps/?q=${line.lat},${line.lng}`}
              >
                <div key={line.id} className="card row">
                  <i className={`fa fa-map-marker card-item`}></i>
                  <h3 className="line-code">{line.lat}</h3>
                  <h3 className="line-name">{line.lng}</h3>
                </div>
              </a> */}
            </div>
          </div>
        )}
      </div>
    ) 
  }
