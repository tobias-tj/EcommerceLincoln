export type FilterType = {
    result: ResultFilterTypes | null;
    loading: boolean;
    error: string;
}


export type ResultFilterTypes = {
    schema: {
        attributes: {
            marca: {
                enum: any
            }
        }
    }
}