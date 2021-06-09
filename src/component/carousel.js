import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import baby from '../image/baby1.jpg'
import boy from '../image/boy.jpg'
import childhood from '../image/childhood1.jpg'


export function CarouselImage(props) {
    const [currentPage, setCurrentPage] = useState(0)
    const numberOfPage = React.Children.count(props.children)


    function body(thisImage) {
        const child = React.Children.toArray(props.children)[thisImage]
        return React.cloneElement(child)

    }

    return (
        <>

            <button
                disabled={currentPage === 0}
                onClick={(e) => setCurrentPage(v => v - 1)} >
                -</button>
            <button
                disabled={currentPage >= numberOfPage - 1}
                onClick={(e) => setCurrentPage(v => v + 1)} >
                +</button>
            <Carousel>{body(currentPage)}</Carousel>
        </>

    )

}

export function Img1(){
    return (
     <div>
                     <img src={baby} alt=""  style={{with:'20px !important',height:"20px !important"}}/>
                    <p className="legend">חיים בן שנתיים</p>
   </div>
    )
}
export function Img2(){
    return (
     <div>
                     <img src={childhood} alt=""  />
                    <p className="legend">רחל בת 5</p>
   </div>
    )
}
export function Img3(){
    return (
     <div>
                     <img src={boy} alt="" />
                    <p className="legend">חיים ואפרים</p>
   </div>
    )
}
// class DemoCarousel extends Component {
//     render() {
//         return (
//             <Carousel>
//                  <div>
//                     <img src="assets/1.jpeg" />
//                     <p className="legend">Legend 1</p>
//                 </div>
//                 <div>
//                     <img src="assets/2.jpeg" />
//                     <p className="legend">Legend 2</p>
//                 </div>
//                 <div>
//                     <img src="assets/3.jpeg" />
//                     <p className="legend">Legend 3</p>
//                 </div>
//             </Carousel>
//         );
//     }
// }
