import { OrientationLabels, OrientationRankType } from '../types';
export declare const orientationMatch: (targetWidth: number, targetHeight: number, compareWidth: number, compareHeight: number, options?: {
    orientationLabels?: Partial<OrientationLabels>;
    orientationRank?: OrientationRankType;
    rankMax?: number;
    sqRatioAccuracy?: number;
}) => number;
