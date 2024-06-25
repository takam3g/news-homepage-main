import HeroImgMobile from '../assets/img/image-web-3-mobile.jpg';
import HeroImgDesktop from '../assets/img/image-web-3-desktop.jpg';

const Hero = () => {
  return (
    <div className="space-y-5 md:space-y-0 md:grid grid-cols-2 gap-5">
      <div className="col-span-2">
        <img src={HeroImgMobile} alt="Web 3 Image" className="block md:hidden"/>
        <img src={HeroImgDesktop} alt="Web 3 Image" className="hidden md:block"/>
      </div>
      <h2 className="col-span-1 font-bold text-5xl desktop:text-6xl">The Bright Future of Web 3.0?</h2>
      <div className="flex flex-col justify-between">
        <p className="text-secondary-darkGrayishBlue">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise? </p>
        <a href="#" className="self-start uppercase tracking-widest mt-5 py-3 px-8 bg-primary-red font-bold hover:bg-secondary-veryDarkBlue text-secondary-veryDarkBlue hover:text-secondary-offWhite">Read More</a>
      </div>
    </div>
  )
}

export default Hero