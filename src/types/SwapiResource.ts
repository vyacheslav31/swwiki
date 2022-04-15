export default interface SwapiResource  {
    created: string;
    edited: string;
    name: string;
    url: string;
    films?: string[];
    people?: string[];
    vehicles?: string[];
    starships?: string[];
    species?: string[];
    [propName: string]: any;
};