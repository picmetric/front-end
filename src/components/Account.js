import React from 'react';
import {Link, Route} from 'react-router-dom';
import ImageForm from './ImageForm';
import Gallery from './Gallery';
import Analytics from './Analytics';


const Account = () => {
    return (<div>
        <ImageForm/>
        <Gallery/>
        <Analytics/>
    </div>)
}

export default Account;