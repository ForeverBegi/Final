import React from 'react';
import BackgroundDefault from '../../Image/BackgroundDefault/BackgroundDefault';
import './MainPage.css'

const MainPage = () => {
    return (
       
            <div style={{marginTop: '10px'}}>
                <BackgroundDefault/>
                <div autoPlay loop style={{width: '100%', height: '70vh', backgroundVideo:"url('../../Image/DreamsofDali- Video.mp4')", backgroundAttachment: 'scroll', width: '100%', height: '100vh'}}>
                <h2 className="text-banner" style={{ fontFamily: "sans-serif", color: 'white', fontSize:"50px", textAlign: 'center', padding: '130px 0px 20px', margin: '0px', position: 'relative', zIndex: '40' }}>KYRGYZ HEART FOUNDATION</h2>
                    <h4 className="text-banner" style={{ fontFamily: "sans-serif", color: 'white', fontSize:"25px", textAlign: 'center', padding: '0px 10px 0px 10px', margin: '0px', position: 'relative', zIndex: '40' }}>EVERY ACT OF KINDNESS IS CHARITY</h4>
                </div>


                <div style={{width: '100%', height: '70vh', paddingTop: '-10rem', backgroundColor: 'white'}}>
                    <h2 style={{ fontFamily: "sans-serif", color: 'black', fontSize:"50px", padding: '5px 5px', textAlign: 'center' }}>ArtPlacer for Art Lovers</h2>

                    <p style={{fontFamily: "sans-serif", color: 'red', fontSize: "20px", padding: '0px 70px', textAlign: 'center' }} > THE BENEFITS </p>

                    <p style={{fontFamily: "sans-serif", color: 'black', fontSize: "20px", padding: '0px 70px', textAlign: 'center' }} >Visualize how artworks look on your home, office, or any space right away.</p>

                    <p style={{fontFamily: "sans-serif", color: 'red', fontSize: "20px", padding: '0px 70px', textAlign: 'center' }} >Become the part of Charity Foundation</p>

                    <p style={{fontFamily: "sans-serif", color: 'black', fontSize: "20px", padding: '0px 70px', textAlign: 'center', paddingBottom: '5rem' }} >Try your own art, or check out beautiful artworks from our Partner Galleries.</p>


                    <p style={{fontFamily: "sans-serif", color: 'black', fontSize: "20px", padding: '0px 70px', margin: '0px', textAlign: 'center' }} >Show potential clients your artworks in situ.</p>

                </div>
                <div style={{width: '100%', height: '100vh', backgroundColor: 'black'}}>
                    <h2 style={{ fontFamily: "sans-serif", color: 'white', fontSize:"50px", padding: '70px', margin: '0px', textAlign: 'center' }}>ABSTRACT PORTRAIT PAINTING</h2>

                    <p style={{fontFamily: "sans-serif", color: 'white', fontSize:"20px", lineHeight: '1.5', padding: '10px 50px 10px 50px', margin: '0px' }}>Abstract portrait artists confront peculiar challenges. When we see faces in everything; that is called pareidolia. When we see everything in faces; that is called empathy. Abstract portraits inhabit a space somewhere between the two, and their artists must contend simultaneously with both. In some ways, the natural habit humans have of perceiving familiar visual patterns everywhere, regardless of whether they are actually there, can benefit the makers of abstract portraits. They need barely reference the human face or figure at all in order to evoke the sense of it. But the obsession for looking for faces and figures in an abstract image can also distract viewers from considering the other aspects of a work of art. Similarly, abstract portrait painters might benefit from the natural tendency viewers have to empathize whenever they perceive, even faintly, the image of a recognizable other.</p>
                </div>

                <div>
                    <img style={{width:'100%', height: '100vh'}}src="https://pbs.twimg.com/media/DfUGjYJW4AABEx-.jpg:large" alt="photo" />
                </div>

                <div>
                    <img style={{width:'100%', height: '100vh'}}src="https://i.pinimg.com/736x/d7/65/b8/d765b81a4b120eabd1375599019678f3.jpg" alt="photo" />
                </div>


                <div style={{ backgroundImage: "url('https://im0-tub-ru.yandex.net/i?id=f0c6dda696f6a9309bc3960e57fefef5-l&ref=rim&n=13&w=1080&h=809')", backgroundSize: '1050px 900px', backgroundPosition: 'center', width: '100%', height:'120vh'}}>
                </div>

                
            </div>
        
    );
};

export default MainPage;