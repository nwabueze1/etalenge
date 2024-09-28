type Create2DMatrixFromStringArray<T> = (images: T[], currentIndex?: number, result?: T[][]) => T[][];
export declare const create2dMatrixFromStringArray: Create2DMatrixFromStringArray<{
    image: {
        src: string;
    };
}>;
export {};
