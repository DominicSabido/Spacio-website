

const BookingWidget = () => {

  const dateInputStyle = "bg-stone-100 border border-stone-900 rounded p-1";
  const backgroundColor = "bg-stone-100";
  return (
    <div className="text-lg border-8 border-stone-900 rounded-2xl p-1 flex flex-row m-10">

      <div className="flex flex-col m-1 border-2 border-stone-900 rounded p-1 ">
        <label>Check In</label>
        <input type="date" className={dateInputStyle}></input>
      </div>

      <div className="flex flex-col m-1 border-2 border-stone-900 rounded p-1 mr-2">
        <label>Check Out</label>
        <input type="date" className={dateInputStyle}></input>
      </div>

      <div className="flex flex-col m-1 border-2 border-stone-900 rounded p-1 mr-2">
        <label>Guests</label>
        <input type="number" className={dateInputStyle} defaultValue={1}></input>
      </div>

      <div className="m-auto">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        Search Room
        </button>
      </div>

    </div>
  );
};

export default BookingWidget;
