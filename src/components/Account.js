import React from 'react';
import {Link, Route} from 'react-router-dom';
import ImageForm from './ImageForm';
import Gallery from './Gallery';
import Analytics from './Analytics';


const Account = props => {
    return (<div>
        {/* create 'add new image' button and on click render the image form element */}
        <ImageForm/>
        <Gallery/>
        <Analytics/>
    </div>)
}

export default Account;