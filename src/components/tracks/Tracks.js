import React, {Component} from 'react';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import './Tracks.css'

class Tracks extends Component
{
    state = {playing : false, audio: null, playingPreviewUrl: null};
    playAudio = previewurl => () =>
    {
        const audio = new Audio(previewurl);
        if(!this.state.playing)
        {
            audio.play();
            this.setState({ playing: true, audio, playingPreviewUrl: previewurl });
        }
        else
        {
            this.state.audio.pause();
            if(this.state.playingPreviewUrl === previewurl)
            {
                this.setState({ playing: false });
            }
            else
            {
                audio.play();
                this.setState({ audio, playingPreviewUrl: previewurl});
            }
        }
    }
    trackIcon = track =>
    {
        if(!track.preview_url)
        {
            return <span>N/A</span>;
        }
        if(this.state.playing && this.state.playingPreviewUrl === track.preview_url)
        {
            return <span><PauseCircleFilledIcon /></span>;
        }
        return <span><PlayCircleFilledIcon  /></span>;
    }
    render()
    {
        const { tracks } = this.props;

        return(
            <div className="tracks">
                {
                    tracks.map(track =>
                       {
                        const {id, name, album, preview_url} = track;

                        return(
                            <div 
                            key={id} 
                            onClick={this.playAudio(preview_url)} 
                            >
                                <div className="track">
                                    <img 
                                        src={album.images[0].url} 
                                        alt='track' 
                                        className='track-image' 
                                    />
                                    <div className='track-text'><p>{name}</p></div>
                                    <p className='track-icon'> {this.trackIcon(track)}</p>
                                </div>
                            </div>
                        )
                       })
                }
            </div>
        )
    }
}
export default Tracks;