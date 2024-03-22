
export namespace Tools {
    export function getAllValues(dict: { [x: string]: any; }): any[] {
        const values: any[] = [];
        for (const key in dict) {
            if (typeof dict[key] === 'object') {
                values.push(...getAllValues(dict[key]));
            } else {
                values.push(dict[key]);
            }
        }
        return values;
    }
}