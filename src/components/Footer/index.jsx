import Socials from "../Socials";
import Button from "../Button";
import pic1 from "../../../images/bg-fall/1.png"
import pic2 from "../../../images/bg-fall/2.png"
import pic3 from "../../../images/bg-fall/3.png"
import pic4 from "../../../images/bg-fall/4.png"
import pic5 from "../../../images/bg-fall/5.png"

const Footer = () => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contact.</h1>
          <div className="mt-10">
            {/* <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S WORK
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              TOGETHER
            </h1> */}
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              Sasiwan Janma
            </h1>
            <h3 className="text-3xl tablet:text-3xl laptop:text-3xl laptopl:text-3xl">
              sasiwanj16@gmail.com
            </h3>
            {/* <Button type="primary">Schedule a call</Button> */}
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly">
        <img className="object-scale-down h-32" src={pic1}/>
        <img className="object-scale-down h-32" src={pic2}/>
        <img className="object-scale-down h-32" src={pic3}/>
        <img className="object-scale-down h-32" src={pic4}/>
        <img className="object-scale-down h-32" src={pic5}/>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Made With ❤ by{" "}
        <a className="underline underline-offset-1">Pangbabyfood</a>
      </h1>
    </>

    
  );
};

export default Footer;
