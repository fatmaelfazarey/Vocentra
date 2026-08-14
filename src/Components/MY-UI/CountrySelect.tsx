import { useState, useEffect } from 'react';
import Select from 'react-select';

const CountrySelect = () => {
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getCountries = async () => {
            setIsLoading(true);
            const data = await fetchCountry();
            setCountries(data);
            setIsLoading(false);
        };

        getCountries();
    }, []);

    const fetchCountry = async () => {
        try {
            // const url = `https://restcountries.com/v3.1/all?fields=name,flags`;
            const url = "https://restcountries.com/v3.1/all";
            // const res = await fetch(url);
            const res = await fetch(
                'https://api.restcountries.com/countries/v5',
                { headers: { 'Authorization': 'Bearer rc_live_f5beea2e80464a9e841ba65efd7a0e95' } }
            );

            if (!res.ok) {
                throw new Error("Failed to fetch countries");
            }

            const data = await res.json();

            const countries = data
                .map((country: any) => ({
                    value: country.name.common,
                    label: country.name.common,
                    flag: country.flags.png
                }))
                .sort((a, b) => a.value.localeCompare(b.value));

            return countries;
        } catch (error) {
            console.error(error);
            return [];
        }
    };


    const formatOptionLabel = ({ value, label, flag }) => (
        <div className="flex items-center gap-2">
            <img src={flag} alt={`${label} flag`} className="w-6 h-4 object-cover rounded-sm" />
            <span>{label}</span>
        </div>
    );

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            backgroundColor: 'var(--color-secondary)',
            padding: '20px 10px',
            borderRadius: '0.5rem',
            border: 'none',
            boxShadow: state.isFocused ? '0 0 0 2px var(--color-primary)' : 'none',
            '&:hover': {
                backgroundColor: 'var(--color-secondary)',
                opacity: '0.8',
            },
            cursor: 'pointer',
            transition: 'all 0.2s ease-in-out',
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? 'var(--color-primary)' : 'white',
            color: state.isFocused ? 'var(--color-text-s)' : 'var(--color-text)',
            cursor: 'pointer',
            padding: '12px 16px',
            fontSize: '1rem',
            '&:active': {
                backgroundColor: 'var(--color-primary)',
            },
        }),
        menu: (provided) => ({
            ...provided,
            borderRadius: '0.5rem',
            overflow: 'hidden',
            zIndex: 10,
            marginTop: '0.5rem',
            boxShadow: 'var(--custom-shadow)',
        }),
        singleValue: (provided) => ({
            ...provided,
            color: 'var(--color-text)',
            fontSize: '1rem',
        }),
        input: (provided) => ({
            ...provided,
            color: 'var(--color-text)',
            fontSize: '1rem',
            margin: '0',
            padding: '0',
        }),
        placeholder: (provided) => ({
            ...provided,
            color: 'var(--color-text)',
            opacity: '0.7',
            fontSize: '1rem',
        }),
        indicatorSeparator: () => ({
            display: 'none',
        }),
        dropdownIndicator: (provided, state) => ({
            ...provided,
            color: 'var(--color-text)',
            padding: '0 8px',
            transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease-in-out',
        }),
        valueContainer: (provided) => ({
            ...provided,
            padding: '0 12px',
            // height: '68px',
            display: 'flex',
            alignItems: 'center',
        }),
        indicatorsContainer: (provided) => ({
            ...provided,
            // height: '68px',
        }),
        noOptionsMessage: (provided) => ({
            ...provided,
            color: 'var(--color-text)',
        }),
        loadingMessage: (provided) => ({
            ...provided,
            color: 'var(--color-text)',
        }),
    };

    return (
        <div className='flex flex-col gap-2 flex-1'>
            <label htmlFor="country" className='text-xl text-text font-medium'>
                Country
            </label>

            <Select
                id="country"
                options={countries}
                isLoading={isLoading}
                formatOptionLabel={formatOptionLabel}
                styles={customStyles}
                placeholder={isLoading ? "Loading countries..." : "Select a country"}
                loadingMessage={() => "Loading countries..."}
                noOptionsMessage={() => "No countries found"}
                isSearchable={true}
                // className="react-select-container"
                classNamePrefix="react-select"
            />
        </div>
    );
};

export default CountrySelect;