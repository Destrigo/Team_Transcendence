import { useEffect, useRef } from 'react';
import { createChart, LineSeries, type IChartApi, type UTCTimestamp } from 'lightweight-charts';
import type { PricePoint } from '../types/types';
import { useTranslation } from 'react-i18next';

function cssVar(name: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

interface PriceChartProps {
  data: PricePoint[];
  emptyMessage?: string;
}

export default function PriceChart({ data, emptyMessage }: PriceChartProps) {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);

  useEffect(() => {
    if (!containerRef.current || data.length === 0) return;
  
    const chart = createChart(containerRef.current, {
      autoSize: true,
      layout: {
        background: { color: 'transparent' },
        textColor: `hsl(${cssVar('--foreground')})`,
      },
      grid: {
        vertLines: { color: `hsl(${cssVar('--border')})` },
        horzLines: { color: `hsl(${cssVar('--border')})` },
      },
      timeScale: { timeVisible: true, minBarSpacing: 0.1 },
      handleScroll: false,
      handleScale: false,
    });
    chartRef.current = chart;
  
    const series = chart.addSeries(LineSeries, { color: '#2563eb', lineWidth: 2 });
    const chartData = data.map((point) => ({ time: point.time as UTCTimestamp, value: point.value }));
    series.setData(chartData);
  
    requestAnimationFrame(() => {
      chart.timeScale().fitContent();
    });
  
    return () => {
      chart.remove();
      chartRef.current = null;
    };
  }, [data]);


  if (data.length === 0) {
    return (
      <div className="flex h-64 w-full items-center justify-center text-sm text-muted-foreground">
      {emptyMessage ?? t('assetDetails.historyUnavailable')}
      </div>
    );
  }

  return <div ref={containerRef} className="h-64 w-full" />;
}
