import React from 'react';
import Select from "react-select"

const SelectGroupedOptionsExample = () => (
    <Select
        className="single-select"
        classNamePrefix="react-select"
        options={[
            {
                label: 'Germany',
                options: [
                    {label: 'BMW', value: 'b'},
                    {label: 'Audi', value: 'a'},
                    {label: 'Mercedes-Benz', value: 'm'},
                ],
            },
            {
                label: 'England',
                options: [
                    {label: 'Bentley', value: 'b'},
                    {label: 'Range Rover', value: 'r'},
                    {label: 'Rolls-Royce', value: 'o'}
                ],
            },
            {
                label: 'US',
                options: [
                    {label: 'Ford', value: 'f'},
                    {label: 'Mustang', value: 'm'},
                    {label: 'Lincoln', value: 'l'},
                ],
            },
        ]}
        placeholder="Search for car"
    />
);

export default SelectGroupedOptionsExample;