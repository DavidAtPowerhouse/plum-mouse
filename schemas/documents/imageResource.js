import React from 'react'
import {MdLink} from 'react-icons/md'
const Preview = ({value}) => {
    const { imageLink, caption, imageUrl } = value

    return (
        <figure>
            <img src={imageUrl} style={{maxWidth: '100%'}}/>
            <figcaption style={{fontWeight: 'bold', fontSize:'.75em', color:'grey'}}>
                {caption}
            </figcaption>
            <span>
                <MdLink/> {imageLink}
            </span>
        </figure>
    )
}
export default {
    name: 'imageResource',
    title: 'Image Resource',
    type: 'object',
    fields: [{
        name: 'imageLink',
        type: 'url',
        title: 'Image Link'
    },{
        title: 'Caption',
        name: 'caption',
        type: 'text',
        // of: [{ type: 'block'}]
    },{
        title: 'Image URL',
        name: 'imageUrl',
        type: 'url'
    }],
    preview: {
        select: {
            imageUrl: 'imageUrl',
            caption: 'caption',
            imageLink: 'imageLink',
        },
        component: Preview
    }

}