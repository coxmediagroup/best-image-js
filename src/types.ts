type TargetParams = {
  height?: number;
  heightMax?: number;
  heightMin?: number;
  width?: number;
  widthMax?: number;
  widthMin?: number;
};

export type ImageMetaData = {
  height: number;
  width: number;
};

type Match = {
  point: number;
  match: number;
  score: number;
};

type MatchedBy = {
  [key: string]: Match;
};

type MatchResults = {
  targetParams: TargetParams;
  imageMetaData: ImageMetaData | null;
  matchedBy: MatchedBy;
  score: number | null;
};

type MatchBy = {
  [key: string]: {
    matchFunction: Function;
    matchOptions?: {
      [key: string]: any;
    };
    point?: number;
  };
};

export type OrientationRankType = {
  [key: string]: {
    [key: string]: number;
  };
};

export type OrientationLabels = {
  squareLabel: string;
  tallLabel: string;
  wideLabel: string;
};

export type GetBestImage = <T extends ImageMetaData>(
  targetParams: TargetParams,
  matchBy: MatchBy,
  imageMetaDataList: T[],
) => T;

export type GetBestImagePartial = <T extends ImageMetaData>(imageMetaDataList: T[]) => T;

export type GetMatchResults = <T extends ImageMetaData>(
  targetParams: TargetParams,
  imageMetaData: T,
  matchBy: MatchBy,
) => MatchResults;

export type SizeInRange = <T extends ImageMetaData>(image: T, params: TargetParams) => boolean;
