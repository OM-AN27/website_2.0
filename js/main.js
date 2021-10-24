$(document).ready(function(){

    //navigation menu

    const hamMenu = $('.menu');
    const menu = $('.ham-menu');
    const menuLink = $('.menu-link');

    hamMenu.click(()=> {
        menu.toggleClass('active');
    })

    //remove menu once link in nav is clicked

    menuLink.click(()=> {
        menu.toggleClass('active');
    })


    //weather app card.

    const weatherCard = $('.weather-card');

    const key ='66aedf850e52872851f1e3d201a4d53c';
    const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=vancouver&appid=${key}`;

    $.ajax({
        method: 'GET',
        url: weatherURL

    }).always(()=>{
        console.log('idk');
    }).done((data)=> {

        const description = data.list[0].weather[0].description;
        const current = data.list[0].main.temp;
        const high = data.list[0].main.temp_max;
        const low = data.list[0].main.temp_min;

        weatherCard.append(`
        <div class='project-images w-overlay'>
            <p class='forecast-degrees'>${Math.floor(current) - 273}°c</p>
        </div>
        <div class='prjct-descrptn'>
        <h3>${data.city.name}\'s Weather Today</h3>
        <hr>
        <p>Right now there is ${description} with a high of ${Math.floor(high) - 273}° and a low of ${Math.floor(low) - 273}°.</p>
        <a href='https://openweathermap.org/' target='_blank'><span>Open Weather</span> &reg;</a>
        </div>`);
    }).fail((err)=> {
        console.error(err);
    })
    
});
