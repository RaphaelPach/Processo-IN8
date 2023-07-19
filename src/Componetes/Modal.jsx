import { AiOutlineClose } from "react-icons/ai";
import PropTypes from "prop-types";
import { MdRestaurant } from "react-icons/md";
import { GiClapperboard } from "react-icons/gi";
import { HiOutlineUser } from "react-icons/hi";
import { MdOutlineLocalHospital } from "react-icons/md";
import { LiaBusSolid } from "react-icons/lia";
import { v4 as uuid } from 'uuid';
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { UseExpense } from "../Hooks/UseExpense";
import React from "react";


const categorie = [
  {
    id: 1,
    name: "Alimentação",
    icon: (
      <MdRestaurant className="h-10 w-10 text-gray-500 hover:text-primary" />
    ),
  },
  {
    id: 2,
    name: "Lazer",
    icon: (
      <GiClapperboard className="h-10 w-10 text-gray-500 hover:text-primary" />
    ),
  },
  {
    id: 3,
    name: "Trabalho",
    icon: (
      <HiOutlineUser className="h-10 w-10 text-gray-500 hover:text-primary" />
    ),
  },
  {
    id: 4,
    name: "Transporte",
    icon: (
      <LiaBusSolid className="h-10 w-10 text-gray-500 hover:text-primary" />
    ),
  },
  {
    id: 5,
    name: "Saúde",
    icon: (
      <MdOutlineLocalHospital className="h-10 w-10 text-gray-500 hover:text-primary" />
    ),
  },
  {
    id: 6,
    name: "Outro",
    icon: <FiMenu className="h-10 w-10  text-gray-500 hover:text-primary" />,
  },
];

const Modal = ({ closeModal }) => {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [payType, setPayType] = useState("");
  const [categories, setCategories] = useState("");
  const { storeExpense } = UseExpense();
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleChange = (setState) => (event) => {
    setState(event.target.value);
  };

  const handleAddExpense = (event) => {
    event.preventDefault();
    const data = {
      id: uuid(),
      value: Number(value),
      description,
      payType: payType || "Dinheiro",
      categories,
    };
    storeExpense(data);
    closeModal();
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div
          className="bg-white sm:w-full md:w-2/5
          mx-8 h-4/6 md:h-4/4 lg:h-4/4 xl:h-3/4  2xl:h-3/6 rounded-lg
          p-6 shadow-xl transform
           transition-all"
        >
          <div className="flex justify-end">
            <div className="hidden lg:block">
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
                <AiOutlineClose className="h-6 w-6" />
              </button>
            </div>
          </div>
          <form className="space-y-6 flex flex-col" onSubmit={handleAddExpense}>
            <input
              name="valor"
              type="number"
              value={value}
              onChange={handleChange(setValue)}
              className="border border-gray-300 
              p-2
              text-black"
              placeholder="Valor"
            />
            <input
              name="descricao"
              type="text"
              className="border border-gray-300 p-2 text-black"
              placeholder="Despesa"
              value={description}
              onChange={handleChange(setDescription)}
            />
            <select
              className="border border-gray-300 p-2 text-black"
              placeholder="Tipo de Pagamento"
              name="pagamento"
              value={payType}
              onChange={(event) => setPayType(event.target.value)}
            >
              <option className="capitalized" value="">Tipo de pagamento</option>
              <option className="capitalized" value="Dinheiro">Dinheiro</option>
              <option className="capitalized" value="Crédito">Crédito</option>
              <option className="capitalized" value="Débito">Débito</option>
            </select>
            <div className="flex flex-col justify-center items-stretch">
              <div className="flex flex-wrap gap-2 justify-center items-center">
                {categorie.map((item) => (
                  <button
                    key={item.id}
                    className={`p-4 border border-1 shadow-lg mt-2`}
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedCategory(item.name);
                      setCategories(item.name);
                    }}
                  >
                    {React.cloneElement(item.icon, {
                      className: `${
                        item.name === selectedCategory
                          ? "text-pink-500"
                          : "text-gray-500"
                      } hover:text-primary w-10 h-10`,
                    })}
                  </button>
                ))}
              </div>
              <button
                type="submit"
                className="bg-primary
                 hover:bg-pink-700
                 text-white font-bold py-2
                 px-4 mt-4 rounded"
              >
                Cadastrar
              </button>
            </div>
          </form>
          <div className="lg:hidden mt-4 flex items-center justify-center">
            <button
              className="bg-primary
                 hover:bg-pink-700
                 text-white font-bold py-2
                 px-4 rounded"
              onClick={closeModal}
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
