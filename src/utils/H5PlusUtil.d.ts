export function onPlusReady(callback: () => void): void;

export function getInfoJson(callback: (res: any)=>void): void;

export function setInfoJson(data: any,callback: (e: any)=>void): void;

export function getFile(callback?: ()=>void): void;

export function convertLocalFileSystemURL(path: string): string;

export function convertAbsoluteFileSystem(path: string): string;
