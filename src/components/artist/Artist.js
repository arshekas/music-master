import React from 'react';
import './Artist.css'

const Artist = ({ artist }) => 
{
    if(!artist) return null;
    const{ images, name, followers, genres} = artist;

    return(
        <div className="artist">
            <h2>{name}</h2>
            <p><strong>{followers.total} Followers </strong></p>
            <h4 style={{fontFamily: 'Economica'}}>{genres.join(',')}</h4>
            <img src={images[0] && images[0].url} alt='artist-profile'
            style ={{
                width:250,
                height:250,
                borderRadius:150,
                objectFit: 'cover',
            }} />
        </div>
    )
}
export default Artist;