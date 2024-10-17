import {Box,AspectRatio} from "@chakra-ui/react";
const Video = () => {
    return(
        <Box>
            <AspectRatio ratio={16 / 9}>
                <iframe
                    src="https://www.youtube.com/embed/YiiLg_KbZDM"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </AspectRatio>
        </Box>
    )
}

export default Video;