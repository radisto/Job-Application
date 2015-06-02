$(function(){
    
    var options = {
        weekday: "long", year: "numeric", month: "short",
        day: "numeric", hour: "2-digit", minute: "2-digit"
    };
    ko.bindingHandlers.executeOnEnter = {
            init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
                var allBindings = allBindingsAccessor();
                $(element).keypress(function (event) {
                    var keyCode = (event.which ? event.which : event.keyCode);
                    if (keyCode === 13) {
                        allBindings.executeOnEnter.call(viewModel);
                        return false;
                    }
                    return true;
                });
            }
        };

        function AppViewModel() {
            var self = this;

            self.comments = ko.observableArray([{
                name: 'Steve Jobs',
                photo: 'stevejobs',
                date: new Date("March 7, 2013 19:30").toLocaleTimeString("en-us", options),
                comment: 'Lorem ipsum dolor sit amet, albucius officiis vivendum ne mei, '
                        + 'ad per dicunt consetetur, et delectus neglegentur vix. Qui vitae '
                        + 'tractatos no, ad his vide oratio hendrerit, minimum nominavi voluptua '
                        + 'vim ad. Dicam utroque patrioque in ius, tation persecuti cu sit, vis '
                        + 'clita numquam dolorem ut. Ex laudem latine electram sit, has purto '
                        + 'consulatu ei. Nam te verear pertinax, qui hinc brute praesent in. '
                        + 'An sit eripuit commune sadipscing.',
                isMine: false
            }]);

            self.newComment = ko.observable("");
            
            self.addOnEnter = function (data, event) {
                    var keyCode = (event.which ? event.which : event.keyCode);
                    if (keyCode === 13) {
                        self.comments.push({
                            name: 'Bill Gates',
                            photo: 'billgates',
                            date: new Date().toLocaleTimeString("en-us", options),
                            comment: self.newComment(),
                            isMine: true
                        });
                        self.newComment("");
                        return false;
                    }
                    return true;
                }
        }

        ko.applyBindings(new AppViewModel());
})

