declare var require: {
    (path: string): any;
    (paths: string[], callback: (...modules: any[]) => void): void;
};

declare module "gatsby-helpers" {
    export function prefixLink(arg: string): string;
}

declare module "config" {
    export const config: {
        siteTitle: string;
    };
}