import React, { useEffect, useState } from 'react'
import AyatCard from '../components/AyatCard'
import { useParams } from 'react-router-dom';
import axios from 'axios'

function Ayat() {
  const { number } = useParams();
  console.log(number);

  const [ayats, setAyats] = useState(null);
  useEffect(() => {
    try {
      const info = async () => {
        const res = await axios.get(
          `https://api.alquran.cloud/v1/surah/${number}/editions/quran-uthmani`
        );
        console.log(res.data.data);
        setAyats(res.data.data);
      };
      info();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className='container-ayat-main'> 
    {ayats?.map((ayat)=>{
      return (
        <AyatCard number={ayat.number} text={ayat.text} />

      );
    })}
    </div>
  )
}

export default Ayat