const AlertModal = ({ message, isOpen, onClose }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-1/3">
          <div className="mb-4">
            <p>{message}</p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={onClose}
              className="bg-[#FD5F20] hover:bg-[#FD5F20] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default AlertModal;
  