import heroimg from '../img/95d06e8a-c134-4afc-a0f5-b4786632a49d.jpg';

function Home() {
    return (
        <section id='Main-Sec'>
            <div className='leaftBanner'>
                <img src={heroimg} alt=""/>
            </div>
            <div className='rightBanner'>
                <nav id='rightnav'>
                    <a href=''>Our Clients</a>
                    <a href=''>Projects</a>
                    <a href=''>Then and Now</a>
                    <a href=''>Book a consultation</a>
                </nav>
            </div>
        </section>
    )
}
export default Home;