import { RiListUnordered, RiAddCircleLine } from "react-icons/ri";
import { VscGraph } from "react-icons/vsc";
import Modal from "./Modal";
import { useState } from "react";
import { Link } from "react-router-dom";

function BottomNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="fixed bottom-0 bg-primary
      w-full text-white"
      >
        {isOpen && <Modal closeModal={() => setIsOpen(false)} />}
        <div className="flex justify-evenly items-center p-2">
          <Link to="/">
            <button
              className="
           flex flex-col w-1/3 items-center"
            >
              <div className="hover:text-Second flex flex-col items-center font-medium">
                <RiListUnordered size={30} />
                <span>Lista</span>
              </div>
            </button>
          </Link>
          <button
            className="
           flex flex-col w-1/3 items-center"
            onClick={() => setIsOpen(true)}
          >
            <div className="hover:text-Second flex flex-col items-center font-medium">
              <RiAddCircleLine size={30} />
              <span>Cadastrar</span>
            </div>
          </button>
          <Link to="/grafico">
            <button
              className="
           flex flex-col w-1/3 items-center"
            >
              <div className="hover:text-Second flex flex-col items-center font-medium">
                <VscGraph size={30} />
                <span>Gráfico</span>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default BottomNavigation;
