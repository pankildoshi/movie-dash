const url = 'https://api.themoviedb.org/3/movie/550?api_key=fa7ebbbcacc3a1b2d320e817b3a2534b';

fetch(url).then(
    response => response.json()
).then(
    data => console.log(data)
);

