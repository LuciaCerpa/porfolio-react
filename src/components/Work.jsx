import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../assets/data.json";

const Work = () => {
  const http = 'https://';
  const cargarImagen = require.context("../assets", true);
  return (
    <div id="work">    
      <h2>WORK</h2>
      <section>            
        <article>
          <Carousel 
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={5000}
            infiniteLoop={true}
            autoPlay={true}
          >
            {data.projects.map((i) => (
              <div key={i.title} className="workItem">              
                <img  src={cargarImagen(`./${i.imgSrc}.png`)} alt={i.title} />
               
                <aside>
                  <h3>{i.title}</h3>
                  <p>{i.description}</p>
                  <a target={"blank"} href={http+i.url}>                  
                    View Demo
                  </a>
                </aside>
              </div>
            ))}
          </Carousel>
        </article>
      </section>
    </div>
  );
};

export default Work;
