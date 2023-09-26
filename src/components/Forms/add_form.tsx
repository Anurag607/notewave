import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { closeForm } from '../../redux/reducers/formSlice';
import classNames from 'classnames';

const PopupForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    email: '',
    note: '',
  });

  const handleCloseForm = () => {
    dispatch(closeForm());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const inputFields = [
    {
      name: "Title",
      function: (e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, title: e.target.value }),
    },
    {
      name: "Sub-Title",
      function: (e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, title: e.target.value }),
    },
    {
      name: "Email ID",
      function: (e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, title: e.target.value }),
    },
    {
      name: "Note",
      function: (e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, title: e.target.value }),
    },
  ]

  return (
    <div className={classNames({
      "fixed top-0 left-0 w-full h-full z-[100000]": true,
      "flex items-center justify-center": true,
      "bg-gray-800 bg-opacity-50": true,
    })}>
      <div className="relative bg-white mobile:w-[95vw] rounded-lg p-4 shadow-lg w-96 dark:bg-gray-900">
        <button
          className={classNames({
            "absolute top-3 right-2.5": true,
            "inline-flex items-center": true,
            "rounded-lg text-sm p-1.5 ml-auto": true,
            "hover:bg-gray-200 hover:text-gray-900": true,
            "text-gray-400 bg-transparent": true,
            "dark:hover:bg-gray-800 dark:hover:text-white": true,
          })}
          onClick={handleCloseForm}
        >
          <svg 
            aria-hidden="true" 
            className="w-5 h-5" 
            fill="currentColor" 
            viewBox="0 0 20 20" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              fillRule="evenodd" 
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
              clipRule="evenodd"
            >
            </path>
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
        <div className="px-2 py-4 border-b rounded-t dark:border-gray-600 flex gap-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="w-6 h-6 dark:invert"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" 
              />
            </svg>
            <h3 className="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
              Add Note
            </h3>
        </div>
        <form onSubmit={handleSubmit}>
          {inputFields.map((el: typeof inputFields[0],i: number) => {
            return (
              <div className="relative mb-4 mt-2" key={i}>
                <input 
                  type="text" 
                  id={el.name}
                  className={classNames({
                    "block px-2.5 pb-2.5 pt-4 w-full": true,
                    "text-sm text-gray-900 bg-gray-100 dark:bg-gray-700": true,
                    "rounded-lg border-1 border-gray-900": true,
                    "appearance-none dark:text-white": true,
                    "dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer": true,
                  })}
                  onChange={el.function}
                  placeholder=" "
                />
                <label 
                  htmlFor={el.name}
                  className={classNames({
                    "absolute top-2 left-1": true,
                    "z-10 origin-[0] px-2": true,
                    "peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500": true,
                    "peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2": true,
                    "peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4": true,
                    "bg-transparent": true,
                    "text-sm text-gray-500 dark:text-gray-400": true,
                    "duration-300 transform -translate-y-4 scale-75": true,
                  })}
                >
                  {el.name}
                </label>
              </div>
            )
          })}                
          <div className="mt-4 w-full flex items-center justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
