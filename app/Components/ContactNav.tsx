import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function ContactNav(){

    return(
        <div className="bg-[#263B3C] p-4 sm:p-6 md:p-8">
        <div className="flex flex-col sm:flex-row justify-between items-center max-w-[90%] md:max-w-[80%] mx-auto text-white font-playfair-normal">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-20 mb-4 sm:mb-0">
            <p className="flex items-center justify-center sm:justify-start gap-1">
              <MdEmail className="text-xl sm:text-2xl" />
              <span className="text-sm sm:text-base">zena@sojournmotherandchild.com</span>
            </p>
            <p className="flex items-center justify-center sm:justify-start gap-1">
              <FaPhoneAlt className="text-lg sm:text-xl" />
              <span className="text-sm sm:text-base">1300 362 586</span>
            </p>
          </div>
          <div>
            <p className="flex items-center justify-center sm:justify-start gap-1">
              <span className="text-sm sm:text-base">FOLLOW US</span>
              <FaInstagram className="text-xl sm:text-2xl" />
            </p>
          </div>
        </div>
      </div>
    )
}