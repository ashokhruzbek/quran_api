import React from 'react'

function AyatCard({ ayat }) {
    return (
        <div>
            <div class="main-content">
                <div class="verse-container">
                    <div class="verse-header">
                        <div class="verse-number">{ayat.number}</div>
                    </div>

                    <div class="arabic-text">{ayat.text}</div>

                    <div class="translation">{ayat.trasnslation}</div>
                </div>
            </div>
        </div>
    )
}

export default AyatCard