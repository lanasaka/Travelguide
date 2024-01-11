import React,{useState} from 'react'
import SearchBox from './SearchBox'
import Mapss from './Mapss';
import Footer from '../Footer'


function MapApp() {
    const [selectPosition, setSelectPosition] = useState(null);

    return (
      <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div style={{ width: "50vw", height: "100%" }}>
          <Mapss selectPosition={selectPosition} />
        </div>
        <div style={{ width: "50vw" }}>
          <SearchBox selectPosition={selectPosition} setSelectPosition={setSelectPosition}/>
        </div>
       
      </div>
       <Footer />
       </>
    );
  }

export default MapApp