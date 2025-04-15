import React, { useEffect, useState } from 'react'
import AyatCard from '../components/AyatCard'
import { useParams } from 'react-router-dom';
import axios from 'axios'

function Ayat() {
  const { surahId } = useParams();
  console.log(surahId);

  const [ayats, setAyats] = useState(null);
  useEffect(() => {
    try {
      const info = async () => {
        const res = await axios.get(
          `https://api.alquran.cloud/v1/surah//editions/quran-uthmani`
        );
        console.log(res.data);
        setAyats(res.data);
        
      };
      info();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div>
       
    </div>
  )
}

export default Ayat