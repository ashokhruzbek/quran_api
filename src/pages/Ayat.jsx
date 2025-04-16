import React, { useEffect, useState } from 'react'
import AyatCard from '../components/AyatCard'
import { useParams } from 'react-router-dom';
import axios from 'axios'

function Ayat() {
  const { number } = useParams();

  const [ayats, setAyats] = useState([]);
  useEffect(() => {
    const info = async () => {
    try {
        const res = await axios.get(
          `https://api.alquran.cloud/v1/surah/${number}/editions/quran-uthmani`
        );
        setAyats(res.data.data[0].ayahs);
      } catch (error) {
        console.log(error);
      };
    }
    info();
  }, [number]);
  return (
    <div className='container-ayat-main'> 
       <AyatCard ayats={ayats} />

        {console.log(ayats)
        }
    </div>
  )
}

export default Ayat