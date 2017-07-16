export class Place {
    public id:string;
    public url:string;
    public commonName:string;
    public placeType:string;
    public additionalProperties:AdditionalProperties[];
}

export class AdditionalProperties {
    public category:string;
    public key:string;
    public value:string;
    public sourceSystemKey:string;
    public modified:string;
}