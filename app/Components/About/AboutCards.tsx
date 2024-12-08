import {lora} from '@/app/layout';
import {inter} from '@/app/layout';
import Image from 'next/image';
import card1 from '@/public/IMG_4821 1.png'
import card2 from '@/public/about-3.png'
import card3 from '@/public/about-4.png'
import card4 from '@/public/about-5.png'
import MiracleCards from './MiracleCards';
import Form from '../Home/Form';
export default function AboutCard(){
    return(
        <div className="">
            {/* text-section  */}
            <div className='text-center p-4 md:p-0'>
            <h2 className={`${lora.className} text-2xl  text-[#263B3C] md:text-[48px] leading-10`}>Empowering Mothers, Building Community</h2>
            <p className={`${inter.className} my-2 md:my-6   text-[#00000099] text-sm md:text-[20px] md:w-[1125px]	text-center leading-8	`}>The Positive Birth Program is a combination of pregnancy/birth education and HypnoBirthing. Most women in the modern world have been led to believe that pregnancy and birth are to be feared, leading the process to become unnecessarily medicalized at certain times.</p>
            </div>
            {/* Cards section  */}
            <div className="md:mt-20">
            {/* card 1 */}
            <div className="md:flex gap-3 items-center  p-2 md:p-0 md:my-14 my-8">

    <Image
      src={card1}
      alt="Picture of the author"
      width={600}
      height={345}
    />
  <div className="flex-1">
    <div className='h-[250px] md:px-4'>
    <h2 className={`${lora.className} text-2xl md:text-[32px]	 text-[#263B3C] leading-10`}>
      Our Mission: A Sanctuary for Mothers
    </h2>
    <p
      className={`${inter.className} mt-6 text-[#00000099] text-sm md:text-[18px] leading-8 `}
    >
      Sojourn &apos;s mission transcends traditional birthing education, aiming to
      be a sanctuary for mothers at any stage of their journey. From the
      transformative experience of hypnobirthing to the challenges and joys
      of early parenting, Our goal is to ensure no mother feels forgotten or
      held back, offering a space where support, networking, and child
      minding blend seamlessly.
    </p>
    </div>   
  </div>        
</div>

        {/* Card 2  */}
                
                    <div className="flex-row-reverse md:flex-row md:flex gap-3 items-center justify-center  p-2 md:p-0 md:my-20">
                    <div className="flex-1  flex ">
    <div className='h-[250px] '>
    <h2 className={`${lora.className} text-2xl md:text-[32px] leading-10 text-[#263B3C] `}>
    A Mother&apos;
    s Insight
    </h2>
    <p
      className={`${inter.className} md:mt-6 mt-3 text-[#00000099] text-sm md:text-[18px] leading-8`}
    >
     Zena, a mother of four and a HypnoBirthing Australia certified practitioner, brings her personal journey and professional expertise to Sojourn. With a rich background in social sciences and as a NAATI accredited Arabic interpclassNamena&apos;s approach is both inclusive and empowering.
    </p>
    </div>   
  </div>        


  <Image
    src={card2}
    alt="Picture of the author"
    width={600}
    height={345}
    className="rounded-lg"
  />

</div>

        {/* Card 3 */}
                    <div className="md:flex-row md:flex gap-3 items-center justify-center  p-2 md:p-0 md:my-14">
 
    <Image
      src={card3}
      alt="Picture of the author"
      width={600}
      height={345}
    />
  <div className="flex-1  flex ">
    <div className='h-[250px] md:px-4 '>
    <h2 className={`${lora.className} text-2xl md:text-[32px] leading-10 text-[#263B3C]`}>
    With You at Every Step of Motherhood
    </h2>
    <p
      className={`${inter.className} mt-6 text-[#00000099] text-sm md:text-[18px] leading-8`}
    >
      Sojourn envisions a world where every mother feels empowered, supported, and understood from pregnancy to parenting. We&apos;re growing to become a holistic hub for mothers, offering services that cater to every phase of motherhood. Join us on a journey of empowerment and support, tailored to meet the diverse needs of every mum.
    </p>
    </div>   
  </div>        
</div>


        {/* Card 4  */}
                    <div className="md:flex gap-3 items-center justify-center p-4 md:p-0  md:my-20 my-2">
                    <div className="flex-1  flex ">
    <div className='h-[250px] md:px-4 '>
    <h2 className={`${lora.className} text-2xl md:text-[32px] leading-10 text-[#263B3C]`}>
    What to expect from our programs
    </h2>
    <p
      className={`${inter.className} mt-6 text-[#00000099] text-sm md:text-[18px] leading-8 `}
    >
        The Sojourn Positive Birth Program includes 12 hours of personalised tuition, a comprehensive Positive Birth Program Booklet, refreshments for comfort, and extensive online resources, practice videos, and more. Participants also benefit from ongoing support from their dedicated practitioner, ensuring a well-supported journey to parenthood.
    </p>
    </div>   
  </div>        
    <Image
      src={card4}
      alt="Picture of the author"
      width={600}
      height={345}
    />
</div>
        </div>
        {/* MiracleCard  */}
        <div className='my-40'>
           <MiracleCards></MiracleCards>
        </div>
        {/* Form  */}
        <div>
            <Form></Form>
        </div>
        </div>
    )
}