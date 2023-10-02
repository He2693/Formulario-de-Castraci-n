import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DiayHora({ dia, hora, onChange }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onChange(date); // Llama a la función onChange para pasar la fecha seleccionada a la página principal
  };

  return (
    <div>
      
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        showTimeSelect
        dateFormat="yyyy-MM-dd HH:mm"
        timeIntervals={15}
        timeCaption="Hora"
      />
      {selectedDate && (
        <div>
          <p>Fecha y Hora Seleccionada:</p>
          <p>{selectedDate.toString()}</p>
        </div>
      )}
    </div>
  );
}

export default DiayHora;
