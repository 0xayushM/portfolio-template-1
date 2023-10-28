import React from 'react';

type FilterBarProps = {
    types: string[];
    selectedType: string | null;
    onSelectType: (type: string) => void;
};

const FilterBar: React.FC<FilterBarProps> = ({ types, selectedType, onSelectType }) => {
    return (
        <div className="filter-bar max-w-[80%]">
            {types.map((type, index) => (
                <button
                    key={index}
                    className={type === selectedType ? 'active' : ''}
                    onClick={() => {
                        if (type !== selectedType) {
                            onSelectType(type);
                        }
                    }}
                >
                    {type}
                </button>
            ))}
        </div>
    );
};

export default FilterBar;
