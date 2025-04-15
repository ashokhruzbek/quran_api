import React from 'react'
function AyatCard({ number, text}) {
    return (
        <div class="main-content">
            <div class="verse-container">
                <div class="verse-header">
                    <div class="verse-number">{number}</div>
                </div>
                <div class="arabic-text">{text}</div>
            </div>
        </div>
    )
}

export default AyatCard