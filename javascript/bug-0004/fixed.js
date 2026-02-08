function handleLupGoBrowseResponse(response){
    if (!response) {
        console.warn("Response is null or undefined")
        return;
    }

    if(response.productType == "MSG"){
        if(LOCALE == 'en_US'){
            $('p.success').html(lupSuccessEn);
            $(lupUpsellEn).insertAfter('.headerTopBar');
        }else if(LOCALE == 'fr_CA'){
            $('p.success').html(lupSuccessFr);
            $(lupUpsellFr).insertAfter('.headerTopBar');
        }else if(LOCALE == 'ja_JP'){
            $('p.success').html(lupSuccessJp);
            $(lupUpsellJp).insertAfter('.headerTopBar');
        }

    }else{

    }
}

if(lupAjaxUrl != ""){
    $.ajax({
        url: lupAjaxUrl,
        cache: false,
        pageCache: false,
        dataType: "jsonp",
        success: handleLupGoBrowseResponse
    });
}
