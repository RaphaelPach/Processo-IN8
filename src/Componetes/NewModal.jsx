import { useState } from "react";
import PropTypes from "prop-types";


const NewModal = ({ deleteExpense, id, name }) => {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-red-500 hover:text-red-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 00-1.414 0L10 10.586 5.707 6.293a1 1 0 00-1.414 1.414L8.586 12l-4.293 4.293a1 1 0 101.414 1.414L10 13.414l4.293 4.293a1 1 0 001.414-1.414L11.414 12l4.293-4.293a1 1 0 000-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      { open &&
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white w-full max-w-[600px] text-center p-6 gap-6 rounded-lg">
            <h2 className="font-bold">
              Você Realmente deseja apagar a despesa {name}?
            </h2>
            <div className="flex justify-evenly my-6">
              <button
                onClick={() => setOpen(false)}
                className="bg-primary
                 hover:bg-pink-700
                 text-white font-bold py-2
                 px-4 rounded"
              >
                Cancelar
              </button>
              <button
                onClick={() => deleteExpense(id)}
                className="bg-primary
                 hover:bg-pink-700
                 text-white font-bold py-2
                 px-4 rounded"
              >
                Apagar
              </button>
            </div>
          </div>
        </div>
      }
    </>
  );
};

NewModal.propTypes = {
  deleteExpense: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default NewModal;
