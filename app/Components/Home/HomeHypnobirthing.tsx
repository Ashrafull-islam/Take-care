import {lora} from '@/app/layout';
import {inter} from '@/app/layout';
import { IoIosPeople } from "react-icons/io";
import { IoMdPeople } from "react-icons/io";
import Image from 'next/image';
import banner from '@/public/mother&baby.png';
export default function HomeHypnobirthing(){
    return(
        <div className='md:w-10/12 mx-auto '>
             <div className=" md:p-10 mt-20 	 ">
        {/* Hypnobirthing */}
          <div className="px-4 md:px-40 text-center">
            <h2 className={`${lora.className} text-2xl md:text-5xl text-center text-[#263B3C]`}>What Is Hypnobirthing?</h2>
            <p className={`${inter.className}  my-10   text-[#00000099] text-sm md:text-[20px] font-light	  text-justify`}>Hypnobirthing is the use of a number of tools,such as, positive affirmation,meditation,aroma therapy and visualizations to relax the body,maintain positive thoughts and control breathing.Releasing fear or anxiety surrounding birth through regular practice and familiarising our body and mind with them may help avoid unnecessary interventions.</p>

            <p className={`${inter.className}  my-6 text-[#00000099] text-sm md:text-[20px] font-light	 text-justify	`}>
            The philosophy behind hypnobirthing is rooted in the idea that fear and tension can interfere with the birthing process, leading to increased pain and complications. By practising relaxation techniques and positive affirmations, expectant mothers can enter a state of deep relaxation during labor, allowing their body to work efficiently and comfortably.
            </p>
          </div>

          {/* Birth program */}
          <div className="px-4 md:px-40 my-24 text-center">
            <h2 className={`${lora.className} text-2xl md:text-5xl  text-[#263B3C] my-8`}>The Positive Birth Program</h2>
            <p className={`${inter.className}  text-[#00000099] text-sm md:text-[20px] font-light		my-1 text-justify`}>The Positive Birth Program is a combination of pregnancy/birth education and HypnoBirthing. Most women in the modern world have been led to believe that pregnancy and birth are to be feared, leading the process to become unnecessarily medicalized at certain times.</p>
            
            
          
            <p className={`${inter.className}  text-[#00000099] text-sm md:text-[20px] font-light		my-1 text-justify`}>The program itself has been created in collaboration with obstetricians, midwives and women of other professions relating to the field, to give women the optimal chance at a positive birth.</p>
            <p className={`${inter.className}  my-8 text-[#00000099] text-sm md:text-xl font-light	 text-justify	`}>We understand that medical interventions are not only necessary, but lifesaving in certain situations. We simply encourage our mothers to make informed decisions based on up-to-date research, in order to walk away from their births feeling empowered.</p>
          </div>
        </div>
        {/* Another Program  */}
        {/* Program cards  */}
        <div className='md:flex gap-4 text-[#263B3C] p-4 md:px-28'>
            {/* group program  */}
        <div className='bg-[#E5EEEE] border rounded-3xl flex-1 p-4 md:p-10'>
        <div className='flex gap-2 items-center'>
        <IoIosPeople className='text-3xl md:text-6xl'/>
        <h2 className={`${lora.className} text-2xl md:text-4xl`} >Group Program</h2>
        </div>
        <p className={`${inter.className} font-light		 text-sm md:text-xl my-8 opacity-80	`}>Explore our Group Program, where shared experiences and collective wisdom enrich your journey to motherhood. Engaging with a supportive community, you&apos;ll learn, grow, and prepare alongside others, for a confident, calm birth.</p>
        </div>
            {/* One program  */}
            <div className='bg-[#E5EEEE]  border rounded-3xl flex-1 p-4 md:p-10'>
        <div className='flex gap-2 items-center'>
        <IoMdPeople className='text-3xl md:text-6xl' />
        <h2 className={`${lora.className} text-2xl md:text-4xl`}>One on one program</h2>
        </div>
        <p className={`${inter.className} font-light		 text-sm md:text-xl my-8 opacity-80 	`}>Join our personalized 1 on 1 program, designed to cater specifically to your unique birthing goals and concerns. Throughout our sessions, you&apos;ll receive personalised attention and guidance, ensuring you feel confident, informed, and ready to give birth.</p>
        </div>
        </div>

            {/*Mother and baby banner  */}
        <div className='p-4 md:px-28 md:my-12'>
        <Image
        className='rounded-3xl'
      src={banner}
      alt="Picture of the author"
    />
        </div>
            
         



        </div>
    )
}