function rateFilm(usia) {
    if (usia >= 21)
        console.log('DEWASA')
    else if (usia >= 13)
        console.log('REMAJA')
    else if (usia >= 9)
        console.log('BIMBINGAN ORANG TUA')
    else
        console.log('SEMUA USIA')
    return usia;
}

rateFilm(24), rateFilm(13)
