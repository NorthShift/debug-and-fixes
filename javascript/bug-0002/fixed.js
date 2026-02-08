let item = cartModel.getlist()[index];

if(item.isDepo()) {

} else if(!permission.hasPermissionToVoidSKU()) {

} else if(item.sku.indexOf(MposConstants.RESTOCK_FEE_SKU) > -1){

}
