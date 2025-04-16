import React from 'react'

function AyatCard({ ayats }) {
    if (!ayats || ayats.length === 0) {
      return <p className='loading'>Loading ayats...</p>;
    }
  
    return (
      <div className="main-content">
        {ayats.map((ayat) => (
          <div key={ayat.number} className="verse-container">
            <div className="verse-header">
              {/* <div className="verse-number">{ayat.number}</div> */}
            </div>
            <div className="arabic-text">{ayat.text}</div>
          </div>
        ))}
      </div>
    );
  }
  

export default AyatCard;
