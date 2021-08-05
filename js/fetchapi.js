
const base_url = 'https://api.themoviedb.org/3/';
const api_key = 'fa7ebbbcacc3a1b2d320e817b3a2534b';

// const url = base_url + specificity + '?api_key=' + api_key + '&language=en-US$page=1'; 

const upcoming = ['movie/', 'upcoming']
const trending = ['trending/', 'all/', 'day'];

constructURL(trending, '.trending');
constructURL(upcoming, '.upcoming');

function constructURL(type, container){
    let url = base_url;
    let flag = false;

    for( let i = 0; i < type.length; i++){
        url += type[i];
        if(type[i] === 'movie/'){
            flag = true;
        }
    }
    url += '?api_key=' + api_key;
    if(flag){
        url += '&language=en-US$page=1';
    }
    console.log(url)
    fetchData(url, container);
}

function fetchData(url, container){
    fetch(url).then( 
        response => response.json()
        ).then(
            data => {
                displayData(data.results, container);
                console.log(data.results);
            }
    );
}

function displayData(items, container){
    const sliderContainer = document.querySelector(container);
    let slider = items.map(function(item){
        return `<div class="card">
                    <img src="${constructImageURL(item.poster_path)}" alt="" srcset="">
                    <h3>${item.original_title}</h3>
                </div>`;
    });
    slider = slider.join('');
    sliderContainer.innerHTML = slider;
}

function constructImageURL(imageName){
    const imagePath = 'https://image.tmdb.org/t/p/w200';
    const imageURL = imagePath + imageName;
    return imageURL;
}
