export class Product {
    // list up all the properties from json files springBoot
    constructor(public id: number,
                public sku: string,
                public name: string,
                public description: string,
                public unitPrice: number,
                public imageUrl: string,
                public active: boolean,
                public unitsInStock: number,
                public dateCreated: Date,
                public lastUpdated: Date 
        ) {
        }
}
