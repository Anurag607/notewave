import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { closeForm } from '../../redux/reducers/formSlice';
import classNames from 'classnames';
import { addNote, getNotes, uploadImage } from '../../Firebase/scripts';
import { PushpinFilled, PushpinOutlined } from '@ant-design/icons';
import { openColorForm } from '../../redux/reducers/colorSlice';

const Loader = () => {
  return (    
    <div role="status">
        <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-[#ff9b73] dark:fill-gray-900" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
    </div>
  )
}

const AddFormPopup: React.FC = () => {
  const dispatch = useAppDispatch();
  const { noteColor } = useAppSelector((state: any) => state.color);
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    email: '',
    note: '',
    pinned: false,
    image: null,
    color: noteColor,
  });

  React.useEffect(() => {
    if(formData.title.length > 0) {
      setFormData({ ...formData, color: noteColor });
    } else {
      setFormData({ ...formData});
    }
  }, [noteColor]);

  const handleCloseForm = () => {
    dispatch(closeForm());
  };

  const ImageChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    setFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    formData.color = noteColor;
    if(file == null) {
      await addNote(formData).then(() => {
        getNotes(dispatch);
        setIsLoading(false);
        handleCloseForm();
      });
    } else {
      await uploadImage(formData,file,"add", " ", dispatch).then(() => {
        setIsLoading(false);
        handleCloseForm();
      });
    }
  };

  const inputFields = [
    {
      name: "Title",
      function: (e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, title: e.target.value }),
    },
    {
      name: "Sub-Title",
      function: (e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, subtitle: e.target.value }),
    },
    {
      name: "Email ID",
      function: (e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: e.target.value }),
    },
  ]

  const Pin = () => {
    if(formData.pinned == false) {
      return <PushpinOutlined className={"text-xl pb-1"} />
    } else {
      return <PushpinFilled className={"text-xl pb-1"} />
    }
  }

  return (
    <div className={classNames({
      "fixed top-0 left-0 w-full h-full z-[100000]": true,
      "flex items-center justify-center": true,
      "bg-gray-800 bg-opacity-50": true,
    })}>
      <div className="relative bg-white mobile:w-[95vw] rounded-lg p-4 shadow-lg w-fit dark:bg-gray-900">
        {/* Close Button... */}
        <button
          className={classNames({
            "absolute top-1 right-1": true,
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
        <div className='border-b rounded-t dark:border-gray-600 flex justify-between items-center'>
          {/* Popup Header - Label, color, pin */}
          <div className="px-2 py-4 flex gap-2">
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
          <div className={"flex items-center justify-center w-fit h-fit gap-3"}>
            <div
              onClick={() => dispatch(openColorForm())}
              className={classNames({
                "rounded-lg p-4 cursor-pointer": true,
              })}
              style={{"backgroundColor": noteColor}}
            />
            <div 
              onClick={() => setFormData({ ...formData, pinned: !formData.pinned })}
              className={classNames({
                "px-2 flex gap-2 justify-center items-center mr-4 sm:mr-6 rounded-lg cursor-pointer": true,
                "bg-gray-900 text-[#e8e8e8] dark:bg-[#e8e8e8] dark:text-gray-900": !formData.pinned,
                "bg-transparent border dark:text-[#e8e8e8]": formData.pinned,
                "ripple": true,
              })}
            >
              <Pin />
              {formData.pinned ? "Pinned" : "Pin"}  
            </div>
          </div>
        </div>
        {/* Form... */}
        <form 
          onSubmit={handleSubmit}
          className="relative flex flex-col items-center justify-center w-full"
        >
          <div className="relative flex sm:flex-row h-[60vh] overflow-scroll sm:h-fit flex-col items-start justify-start px-2 sm:px-0 sm:justify-center w-full sm:gap-4">
            {/* Section-1: title, subtitle, emailid */}
            <div>
              {inputFields.map((el: typeof inputFields[0],i: number) => {
                return (
                  <div className="relative mb-4 mt-2" key={i}>
                    <input 
                      type="text" 
                      id={el.name}
                      className={classNames({
                        "mobile:w-full anti-mobile:w-[19.5rem]": true,
                        "block px-2.5 pb-2.5 pt-4 w-[15rem]": true,
                        "text-sm text-gray-900 bg-gray-100 dark:bg-gray-700": true,
                        "rounded-lg border-1 border-gray-900": true,
                        "appearance-none dark:text-white": true,
                        "dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer": true,
                      })}
                      onChange={el.function}
                      placeholder=" "
                      required
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
            </div>
            {/* Section-2: Note, Image */}
            <div>
              <div className="relative mb-4 mt-2 flex flex-col items-start justify-start">
                <textarea
                  id="Note"
                  rows={5}
                  className={classNames({
                    "mobile:w-full anti-mobile:w-[19.5rem] overflow-hidden": true,
                    "block px-2 py-2 w-[15rem] resize-none": true,
                    "text-sm text-gray-900 bg-gray-100 dark:bg-gray-700": true,
                    "rounded-lg border-1 border-gray-900": true,
                    "appearance-none dark:text-white": true,
                    "dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer": true,
                  })}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, note: e.target.value })}
                  placeholder=" "
                  required
                />
                <label 
                  htmlFor="Note"
                  className={classNames({
                    "absolute left-1": true,
                    "top-2": formData.note.length > 0,
                    "top-6": formData.note.length == 0,
                    "z-10 origin-[0] px-2": true,
                    "peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500": true,
                    "peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-4": true,
                    "peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4": true,
                    "bg-transparent": true,
                    "text-sm text-gray-500 dark:text-gray-400": true,
                    "duration-300 transform -translate-y-4 scale-75": true,
                  })}
                >
                  Note
                </label>
              </div>
              <div>
                <input 
                  type="file" 
                  id="note_image" 
                  accept="image/*"
                  onChange={ImageChangeHandler}
                  className={classNames({
                    "mobile:w-full anti-mobile:w-[19.5rem]": true,
                    "block w-[15rem] cursor-pointer focus:outline-none": true,
                    "text-sm text-gray-900": true,
                    "bg-gray-50 dark:text-gray-400": true,
                    "border border-gray-300 rounded-sm": true,
                    "dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400": true,
                  })}  
                />
                <p 
                  className="mt-1 text-sm text-gray-500 dark:text-gray-300" 
                >
                  SVG, PNG, JPG or GIF (MAX. 800x400px).
                </p>
              </div>
            </div>
          </div>
          {/* Submit... */}
          <div className="mt-4 w-full flex items-center justify-end">
            <button
              type="submit"
              className="bg-[#ff9b73] text-white px-4 py-2 rounded-md hover:bg-[#ffc972] focus:outline-none ripple dark:bg-blue-400 hover:dark:bg-blue-600"
            >
              {!isLoading ? "Add" : <Loader />}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFormPopup;
