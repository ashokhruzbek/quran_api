import React from 'react'
import '../components/AyatCard.css'

function AyatCard() {
    return (
        <div class="card">
            <div class="card-content">
                <div class="diamond">
                    <div class="diamond-number">1</div>
                </div>
                <div class="card-info">
                    <div class="card-title">Al-Fatihah</div>
                    <div class="card-subtitle">The Opener</div>
                </div>
                <div class="card-ayahs">
                    <div class="arabic-title">الفَاتِحَة</div>
                    <div>7 Ayahs</div>
                </div>
            </div>
        </div>
    )
}

export default AyatCard