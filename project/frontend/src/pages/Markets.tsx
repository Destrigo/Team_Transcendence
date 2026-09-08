import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import AssetTable from '../components/AssetsTable';

export default function MarketsPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">{t('markets.title')}</h1>
      <AssetTable selectedAssetId={null} onSelectAsset={(a) => navigate(`/markets/${a.symbol}`)} />
    </div>
  );
}
