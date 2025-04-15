import React from 'react'
import '../components/SurahCard.css'
import { useNavigate } from 'react-router-dom'
function SurahCard({ title, arabic, subtitle, ayat, number }) {
    const navigate = useNavigate();
    function nextPage() {
        navigate('/ayat')
    }
    return (
        <div  className="surah-container">
            <div onClick={nextPage} className="card">
                <div  className="card-content">
                    <div  className="diamond">
                        <div  className="diamond-number">{number}</div>
                    </div>
                    <div  className="card-info">
                        <div  className="card-title">{title}</div>
                        <div  className="arabic-title">{arabic}</div>
                        <div  className="card-subtitle">{subtitle}</div>
                        <div  className="card-ayahs">{ayat}</div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default SurahCard