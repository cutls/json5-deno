import parse from './parse.js'
import stringify from './stringify.js'
interface IJSON5 {
    parse(text: string, reviver?: (this: any, key: string, value: any) => any): any;
    stringify(value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;
    stringify(value: any, replacer?: (number | string)[] | null, space?: string | number): string;
}

const JSON5:IJSON5 = {
    parse,
    stringify,
}
export default JSON5