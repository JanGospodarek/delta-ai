import React from 'react';
import { useAppSelector } from '../../../../store/hooks';
import HomeSummaryChip from './HomeSummaryChip';

const HomeSummary = () => {
  const { model, apiKey } = useAppSelector((state) => state.app);
  const parsedApiKey = apiKey ? apiKey.slice(0, 5) + '...' : '';
  return (
    <div className="mx-7 mt-3">
      <HomeSummaryChip label="Model" value={model ?? 'Gemini'} />
      <HomeSummaryChip label="Klucz" value={parsedApiKey} />
    </div>
  );
};
export default HomeSummary;
