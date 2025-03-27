import styles from './page.module.css';
import './partners.css';

const OurPartners = () => {
    // TASK - React 1 week 1
    // Create the "Our Crew section"
    // Use the descriptions provided in /app/about_us/README.md
    // Use the pictures from /public/crew
    // Some inspiration ideas found in /data/inspiration_about_us
    const Partners = [
        {
            name: "alphabet",
            image: "/business_partners/alphabet-logo.png"
        },
        {
            name: "amazon",
            image: "/business_partners/amazon_logo.png"
        },
        {
            name: "CBC",
            image: "/business_partners/CBC_Logo_white.png"
        },
        {
            name: "Microsoft",
            image: "/business_partners/Microsoft-logo-white.png"
        },
        {
            name: "NYU",
            image: "/business_partners/nyu-logo.png"
        },
        {
            name: "Queens",
            image: "/business_partners/QueensLogo_white.png"
        },
        {
            name: "samsung",
            image: "/business_partners/samsung-logo.png"
        },
        {
            name: "sodexo",
            image: "/business_partners/sodexo-logo.png"
        }

    ];
    return (
    <>
        <p className='intro'> We collaborate with some of the most respected names in the space and technology industries to make every journey extraordinary. </p>
        <div id='partnersContainer'>{
            Partners.map((item)=>(
                <div className='partner'>
                    <img src={item.image} alt={item.name}/>
                </div>
            ))
        }
        </div>
    </>
      
    );
  }

  export default OurPartners;