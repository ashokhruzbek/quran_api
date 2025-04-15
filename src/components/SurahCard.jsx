import React from 'react'
import { useNavigate } from 'react-router-dom'
function SurahCard({ title, arabic, subtitle, ayat, number }) {
    const navigate = useNavigate();
    
    return (
        <div className="surahs-container">
            <div onClick={() => navigate(`/surah/${number}/ayat`)} className="card-content">
                <div className="diamond">
                    <div className="diamond-number">{number}</div>
                </div>
                <div className="card-info">
                    <div className="card-title">{title}</div>
                    <div className="arabic-title">{arabic}</div>
                    <div className="card-subtitle">{subtitle}</div>
                    <div className="card-ayahs">{ayat}</div>
                </div>
            </div>
        </div>
    );

}
export default SurahCard