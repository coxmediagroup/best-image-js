declare type TargetParams = {
    height?: number;
    heightMax?: number;
    heightMin?: number;
    width?: number;
    widthMax?: number;
    widthMin?: number;
};
export declare type ImageMetaData = {
    height: number;
    width: number;
};
declare type Match = {
    point: number;
    match: number;
    score: number;
};
declare type MatchedBy = {
    [key: string]: Match;
};
declare type MatchResults = {
    targetParams: TargetParams;
    imageMetaData: ImageMetaData | null;
    matchedBy: MatchedBy;
    score: number | null;
};
declare type MatchBy = {
    [key: string]: {
        matchFunction: Function;
        matchOptions?: {
            [key: string]: any;
        };
        point?: number;
    };
};
export declare type OrientationRankType = {
    [key: string]: {
        [key: string]: number;
    };
};
export declare type OrientationLabels = {
    squareLabel: string;
    tallLabel: string;
    wideLabel: string;
};
export declare type GetBestImage = <T extends ImageMetaData>(targetParams: TargetParams, matchBy: MatchBy, imageMetaDataList: T[]) => T;
export declare type GetBestImagePartial = <T extends ImageMetaData>(imageMetaDataList: T[]) => T;
export declare type GetMatchResults = <T extends ImageMetaData>(targetParams: TargetParams, imageMetaData: T, matchBy: MatchBy) => MatchResults;
export declare type SizeInRange = <T extends ImageMetaData>(image: T, params: TargetParams) => boolean;
export {};
