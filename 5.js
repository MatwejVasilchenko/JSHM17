const musicLibrery = {  
    count: 2,
    artists: [
        {name: 'The Baetles',
            albums: [
                {
                    title: 'Sgt. Pepper\'s Lonely Hearts Club Band',
                    year: 1967,
                    tracks: [
                        {title: 'With a Little Help from My friends', 
                        duration: '2:44' }, 

                        { title: 'Lucy in the Sky with Diamonds', 
                        duration: '3:28' },

                        {title: 'A Day in the Life', 
                        duration: '5:33' }
                    ]
                },

                {
                    title: 'Abbey Road',
                    year: 1969,
                    tracks: [
                        { title: 'Come Together', duration: '4:19' },
                        { title: 'Something', duration: '3:01' },
                        { title: 'Come Together', duration: '3:06' },
                    ]
                }
            ]
        },
{
            name: 'Pink Floyd',
            albums: [
                {
                    title: 'The Wail',
                    year: 1979,
                    tracks: [
                        { title: 'Another Brick in the Wall, Part 2', duration: '3:59'},
                        { title: 'Comfortably Numb', duration: '6:23'},
                        { title: 'Hey You', duration: '4:40' }
                    ]
                },
{
                    title: 'Dark Side of the Moon',
                    year: 1973,
                    tracks: [
                        { title: 'Speak to Me/Breathe', duration: '3,58' },
                        { title: 'Time', duration: '7:06' },
                        { title: 'Money', duration: '6:22'}
                    ]
                }
            ]
        }
    ]
}


const {count,artists:[{name, albums:[{title, year,tracks:[{title: title1, duration: duration1},{title: title2,duration: duration2},{title: title3,duration: duration3}]},{title: titleAlbom2, year: yearAlbom2,tracks:[{title: titleAlbom2_1, duration: durationAlbom2_1},{title: titleAlbom2_2,duration: durationAlbom2_2},{title: titleAlbom2_3,duration: durationAlbom2_3}]}],}],Artists2:{name: nameArtists2, albums:[{title: titleArtist2, year: yearArtists2,tracks:[{title: titleArtists2_1, duration: durationArtists2_1},{title: titleArtists2_2,duration: durationArtists2_2},{title: titleArtists2_3,duration: durationArtists2_3}]},{title: titleArtists2Albom2, year: yearArtists2Albom2,tracks:[{title: titleArtists2Albom2_1, duration: durationArtists2Albom2_1},{title: titleArtists2Albom2_2,duration: durationArtists2Albom2_2},{title: titleArtists2Albom2_3,duration: durationArtists2Albom2_3}]}]}}  = musicLibrery