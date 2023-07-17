import { RiListUnordered, RiAddCircleLine } from "react-icons/ri";
import { VscGraph } from "react-icons/vsc";
import Modal from "./Modal";
import { useState } from "react";


function BottomNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="fixed bottom-0 bg-primary
      w-full text-white"
    >
      { isOpen && <Modal closeModal={() => setIsOpen(false)} />}
      <div className="flex justify-between items-center p-2">
        <button
          className="
           flex flex-col w-1/3 items-center"
        >
          <div className="hover:text-Second">
          <RiListUnordered size={30} />
          <span>Lista</span>
          </div>
        </button>
        <button
          className="
           flex flex-col w-1/3 items-center"
           onClick={() => setIsOpen(true)}
        >
          <div className="hover:text-Second">
          <RiAddCircleLine size={30}  />
          </div>
        </button>
        <button
          className="
           flex flex-col w-1/3 items-center"
        >
          <div className="hover:text-Second">
          <VscGraph size={30} />
          </div>
        </button>
      </div>
    </div>
  );
}

export default BottomNavigation;
