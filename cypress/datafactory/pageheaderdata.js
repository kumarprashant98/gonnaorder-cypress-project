import { pageheaderobject } from "../dataobject/pageheaderobject";
export class pageheaderdata {
    header = new pageheaderobject();

    getPageHeader() {
        this.header.loginHeader = "Login",
        this.header.storename = "sequencing check"
        this.header.storesListText = "Stores List",
        this.header.ordersText = "Orders Help on Orders",
        this.header.createCategoryText = "Create Category",
        this.header.catalogText = "Catalog"
        return this.header;
    }
}

