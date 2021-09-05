export declare type Match = {
    match: string;
    type: 'MentionParser' | 'EmailParser' | 'LinkParser';
    [key: string]: any;
};
export interface Parser {
    regex: RegExp;
    converter: (match: string) => Match;
}
export declare type MatchResults = Array<Match | string>;
