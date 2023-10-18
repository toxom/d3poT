import React from 'react';

import NoviceIcon from '@mui/icons-material/Face'; 
import HobbyistIcon from '@mui/icons-material/Build'; 
// ... more icons as you need

type FilterCategory = '3D Printers' | '3D Scanners' | 'Robots';

interface FiltersProps {
  activeCategory: FilterCategory;
}

const FILTERS: Record<FilterCategory, string[]> = {
    '3D Printers': ['Application', 'Size'],
    '3D Scanners': ['Application'],
    'Robots': ['Application'],
};

const FILTER_ICONS: Record<string, React.ComponentType[]> = {
    'Application': [NoviceIcon, HobbyistIcon],
    'Size': [], // Fill in appropriate icons for size
    // ... other filters
};

const Filters: React.FC<FiltersProps> = ({ activeCategory }) => {
    return (
      <div className="filters">
        {FILTERS[activeCategory].map((filterGroup, groupIdx) => (
          <div key={groupIdx} className="filter-section">
            <h3>{filterGroup[0]}</h3> {/* This assumes the filter name is the first element in each group */}
              <div className="filter-icons">
                {FILTER_ICONS[filterGroup[0]].map((Icon, idx) => (
                    <button key={idx}><HobbyistIcon /> {filterGroup[idx + 1]}</button>
                ))}
              </div>
          </div>
        ))}
      </div>
    );
  }
  

export default Filters;
