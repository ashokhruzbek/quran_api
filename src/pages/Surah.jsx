import React, { useEffect, useState } from 'react'
import AyatCard from '../components/AyatCard'
import SurahCard from '../components/SurahCard'
import axios from 'axios'

function Surah() {
  const [surahs, setSurahs] = useState(null)
  useEffect(() => {
    axios.get(`https://api.alquran.cloud/v1/surah`)
      .then((res) => {
        setSurahs(res.data.data)
      }).catch((err) => {
        console.log(err);
      })
  }, [])


  return (
    <div>
      <div className="posts-container">
        {surahs?.map((sura) => {
          return (
            <SurahCard
              number={surahs.number}
              title={surahs.englishName}
              arabic={surahs.name}
              subtitle={surahs.englishNameTranslation}
              ayat={surahs.numberOfAyahs}            />
          );
        })}
      </div>
    </div>
  )
}

export default Surah