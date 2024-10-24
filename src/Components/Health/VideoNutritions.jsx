import {AspectRatio} from "@chakra-ui/react";

const Video = () => {
    return (
        <AspectRatio ratio={16 / 9}>
            <iframe
                src="https://www.youtube.com/embed/YiiLg_KbZDM"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{borderRadius: "25px"}}
            />
        </AspectRatio>
    )
}

export default Video;