import YouTube from "react-youtube";
import {Box} from "@mui/material";
import {useEffect, useRef} from "react";

export const YoutubePlayerComponent = ({videoId}) => {
    const playerRef = useRef(null);

    useEffect(() => {
        if (playerRef.current) {
            playerRef.current.loadVideoById(videoId);
        }
    }, [])

    const onReady = (event) => {
        playerRef.current = event.target
    }

    const optionYouTubePlayer = {
        width: '100%',
        height: '500',
        playerVars: {
            autoplay: false,
        }
    }
    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                borderRadius: '12px',
                overflow: 'hidden',
            }}
        >
            <YouTube key={videoId} videoId={videoId} opts={optionYouTubePlayer} onReady={onReady} />
        </Box>
    )
}