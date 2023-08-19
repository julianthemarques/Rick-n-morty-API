import { useEffect, useState } from 'react';

type SelectedFilter = { key: string; filters: string[] };

export const DropDownFilter = ({
  datasets,
  onChange,
}: {
  datasets: {
    label: string;
    options: { label: string; value: string }[];
    key: string;
  }[];
  onChange: (ev: SelectedFilter[]) => void;
}) => {
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilter[]>([]);
  useEffect(() => {
    onChange(selectedFilters);
  }, [selectedFilters, onChange]);
  return (
    <ul>
      {datasets.map((data) => (
        <li key={data.key}>
          <div>
            <button type="button">{data.label}</button>
          </div>
          <div>
            {data.options.map((option) => (
              <span key={option.value}>{option.label}</span>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
};
