import React from 'react';
import Gallerydoc from './Gallerydoc';
import PagesBanner from '../Shared/PagesBanner';

const GalleryPage = () => {
    return (
        <div className='containerr'>
            <PagesBanner title='Gallery' />
            <Gallerydoc />
        </div>
    );
};

export default GalleryPage;