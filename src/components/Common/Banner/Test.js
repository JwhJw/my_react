import React, { Component } from 'react'
import Banner from './index'
import imgSrc1 from './img/IMG_6562.JPG'    
import imgSrc2 from './img/IMG_6563.JPG'    
import imgSrc3 from './img/IMG_6564.JPG'    
import imgSrc4 from './img/IMG_6565.JPG'    
import imgSrc5 from './img/IMG_6566.JPG'    
export default class Test extends Component {
    render() {
        return (
            <div>
                <Banner imgSrcs={[imgSrc1,imgSrc2,imgSrc3,imgSrc4,imgSrc5]}/>
            </div>
        )
    }
}
