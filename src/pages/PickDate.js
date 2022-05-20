import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const PickDate = ({ day, setDay }) => {
    return (
        <div>
            <DayPicker
                mode="single"
                selected={day}
                onSelect={setDay}
            />
        </div>
    );
};

export default PickDate;