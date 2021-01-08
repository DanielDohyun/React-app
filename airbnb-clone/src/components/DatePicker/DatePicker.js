import React, { useState } from 'react';
import './DatePicker.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { Button } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import { useHistory } from 'react-router-dom';

function DatePicker() {
    // new date() = giving today's date as the initial value
    const history = useHistory();
    const [StartDate, setStartDate] = useState(new Date());
    const [EndDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: StartDate,
        endDate: EndDate,
        key: "selection",
    }

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className="search">
            <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
            />
            <h2>
                Number of guests
                <PeopleIcon />
            </h2>
            <input
                type="number"
                min={0}
                defaultValue={2}
            />
            <Button onClick={() => history.push('/search')}>
                Search Airbnb
            </Button>
        </div>
    )
}

export default DatePicker;
