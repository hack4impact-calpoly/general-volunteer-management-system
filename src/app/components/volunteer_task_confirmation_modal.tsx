import React from 'react';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import elipse from "@components/elipse.png";
import exclam from "@components/exclam.png";

const VolunteerTaskConfirmationModal: React.FC<{visible?: boolean, onClose: () => void, eventName: string, location: string, address: string, time: string}> = ({
  visible = true,
  onClose,
  eventName,
  location,
  address,
  time
}) => {
return (
    <div className = "flex justify-center relative w-[800px] h-[800px] mt-28 mx-auto border border-primary-color shadow-[0_10px_24px_0px_rgb(49,77,137,0.15)]">
      <div className='text-center	my-32 font-medium left-1/2 right-1/2 content-center w-[500px]'>
        
        <div className="mb-7 flex justify-center items-center">
          <Image src={elipse} alt=""/>
          <Image className="absolute" src={exclam} alt=""/>
        </div>

        <h1 className='text-4xl text-primary-color'>Volunteer for</h1>
        <h1 className='text-4xl text-primary-color'>{eventName}?</h1>

        <p className='text-xl mt-9'>Location: {location}</p>
        <p className='text-xl my-3'>Address: {address}</p>
        <p className='text-xl mb-20'>Time: {time}</p>

        <Button 
        className='hover:text-white w-52 text-primary-text-color bg-white border-2 border-primary-color h-14 rounded-none float-left'
        onClick={onClose}
        >
        Cancel
        </Button>
        <Button className='hover:text-primary-link-hover-color hover:text-white w-52 text-white bg-primary-color border-2 border-primary-color h-14 rounded-none float-right'>
          Register
        </Button>

        <Button 
        className = "hover:bg-transparent hover:text-primary-link-hover-color text-3xl text-black bg-transparent absolute left-0 top-0"
        onClick={onClose}
        >
          x
        </Button>
      </div>
    </div>
  );
};

export default VolunteerTaskConfirmationModal;