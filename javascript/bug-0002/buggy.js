var item = cartModel.getlist()[index];
if((item.isDepo()) {

} else if(!permission.hasPermissionToVoidSKU()) {

} else if(item.sku.indexOf(mposConstants.RESTOCK_FEE_SKU) > -1){

}
