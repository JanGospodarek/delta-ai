import React from 'react';
import { Chip } from '@nextui-org/chip';

interface Props {
  label: string;
  value: string;
}

const HomeSummaryChip = ({ label, value }: Props) => {
  return (
    <div className="flex gap-1 items-center m-1">
      <div className=" text-gray-500 w-11">{label}</div>
      <Chip variant="bordered" color="primary" size="sm">
        {value}
      </Chip>
    </div>
  );
};
export default HomeSummaryChip;
