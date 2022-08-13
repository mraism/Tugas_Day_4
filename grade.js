function grade(nilai) {
    if (nilai >= 90)
        console.log('A')
    else if (nilai >= 80 && nilai <= 89)
        console.log('B')
    else if (nilai >= 70 && nilai <= 79)
        console.log('C')
    else if (nilai >= 60 && nilai <= 69)
        console.log('D')
    else
        console.log('E')
    return nilai;
}
grade(93)
