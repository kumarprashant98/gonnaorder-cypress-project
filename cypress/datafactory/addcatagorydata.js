import { addcategoryobject } from "../dataobject/addcategoryobject";

export class addcategorydata {
    info = new addcategoryobject();

    addCategoryDetails() {
        this.info.name = "Testing"
        this.info.shortdescription = "Creating a new category"
        this.info.artistimage = "Image/djsnake.jpg"
        return this.info;
    }


}