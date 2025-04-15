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

    <div className='main-surah-container'>
      {surahs?.map((surah) => {
        return (
          <SurahCard
            number={surah.number}
            title={surah.englishName}
            arabic={surah.name}
            subtitle={surah.englishNameTranslation}
            ayat={surah.numberOfAyahs} />
        );
      })}
    </div>

  )
}

export default Surah