import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const PickDate = ({ date, setDate }) => {
    return (
        <div>
            <DayPicker
                mode="single"
                selected={date}
                onSelect={setDate}
            />
        </div>
    );
};

export default PickDate;