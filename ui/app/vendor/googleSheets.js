$(function () {

    var urlSheet1 = '/app/data/sheet1.json';
    var urlSheet2 = '/app/data/sheet2.json';

    $.getJSON(urlSheet2, function (sheet2) {

        var sectionTitle = '';
        var sectionContent = '';
        var sectionButton = '';
        var sectionLink = '';
        var sectionImg = '';

        $.each(sheet2.feed.entry, function (key, val) {
            sectionTitle = val.gsx$sectiontitle.$t;
            sectionContent = val.gsx$sectioncontent.$t;
            sectionButton = val.gsx$sectionbutton.$t;
            sectionLink = val.gsx$sectionlink.$t;
            sectionImg = '../app/images/' + val.gsx$sectionimg.$t;
        }); 

        $('.section__title').html(sectionTitle);
        $('.section__content').html(sectionContent);
        $('.section__button').html(sectionButton);
        $('.section__link').attr('href', sectionLink);
        $('.section__img').attr('data-src', sectionImg).attr('data-srcset', sectionImg);

    });

    
    $.getJSON(urlSheet1, function (sheet1) {
        var card = '';
        $.each(sheet1.feed.entry, function (key, val) {

            card += `
                <div>
                    <div class="uk-card uk-card-default uk-margin-medium-top">
                        <div class="uk-card-header">
                            <div class="uk-grid-small uk-flex-middle" uk-grid>
                                <div class="uk-width-auto">
                                <span uk-icon="icon: user; ratio: 2"></span>
                                </div>
                                <div class="uk-width-expand">
                                    <h3 class="uk-card-title uk-margin-remove-bottom">
                                    ${val.gsx$first.$t} ${val.gsx$last.$t}</h3>
                                    <p class="uk-text-meta uk-margin-remove-top">
                                    </p>
                                </div>
                            </div>
                            <div class="uk-margin-top">
                                <p class="uk-text-small uk-text-uppercase uk-margin-remove">${val.gsx$company.$t}</p>
                                <p class="uk-text-small uk-text-uppercase uk-margin-remove">${val.gsx$email.$t}</p>
                                <p class="uk-text-small uk-text-uppercase uk-margin-remove">${val.gsx$phone.$t}</p>
                            </div>
                        </div>
                        <div class="uk-card-body">
                        <span class="uk-text-small uk-text-uppercase uk-margin-remove">Description:</span>
                            <p class="uk-margin-remove uk-text-small">
                                ${val.gsx$description.$t}
                            </p>
                        </div>
                        <div class="uk-card-footer">
                            <a href="#" class="uk-button uk-button-text">Read more</a>
                        </div>
                    </div>
                </div>`;
        });
        $('#card').html(card);
    });
});