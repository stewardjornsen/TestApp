// JavaScript Document
/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {



        $(document).ready(function(e) {
            data = "";
            //var data = {"people":[{"name":"Peter","gender":"male","username":"PeterParker"},{"name":"Jane","gender":"female","username":"JaneJohn"}],"event":[{"title":"Musicians Prayer Fellowship","date":"2016-07-01","photo":"musicians_prayers.png"},{"title":"Administrator's Fellowship","date":"2016-07-02","photo":"admin_fellowship.png"}]};

            //var json = http://localhost/rough.php;
            //$.getJSON('data/rough.php', function(r_data){

            if (navigator.onLine) {
                $('#navigator_status').html('<i class="fa fa-signal"></i> Data On');
            } else {
                $('#navigator_status').html('<i class="fa fa-plane"></i> Please turn on data to get current updates');
            }
            var j = "tall";
            $.getJSON('data/data.json', function(r_data) {
                j = "short";
                //console.log(j);
                data = r_data[0];
                localStorage.setItem('ihnbc_data', JSON.stringify(data));
                var current_event = true;
                $.each(data.event, function(i, obj) {
                    //console.log(obj.date);

                    //GET UPCOMING EVENT

                    if (eventdate(obj.date) && current_event == true) {
                        $('#recent_event, #recent_event_1').hide().append('<img src="images/' +
                            obj.photo + '" class="img-responsive" />').fadeIn('slow');
                        $('#recent_event_title').fadeIn('slow');
                        current_event = false;
                    }



                    $('#events').append('<li> <a href="images/' +
                        obj.photo + '" class="popup"><img src="images/' +
                        obj.photo + '" class="img-responsive" /></a><div>' +
                        obj.title + '</div></li>');
                });
                $('.owl-carousel').owlCarousel({
                    autoplay: true,
                    items: 1,
                    loop: true,
                    margin: 0
                });
                $('.popup').magnificPopup({
                    type: "image"
                });



            });

            var menu_items = {
                page1: "Home",
                page5: "Events",
                page7: "Media",
                page8: "People"
            };

            var panel;
            var panel_start = '<div data-role="panel" id="mypanel" data-position="right" data-display="push">' +
                '<h1>IHNBC</h1>' +
                '<ul id="sidemenu" data-role="listview" class="nav nav-list unstyled">';
            var panel_end = '</ul>' +
                '</div>';
			var panel_mid;

            $(document).one('pagebeforecreate', function() {
                $(menu_items).each(function(x, e) {
                    keys = $.map(e, function(v, i) {
                        panel_start += '<li><a href="#' + i + '" data-transition="fade" data-theme="" data-icon="gear">' + v + '</a></li>';
						$('#sidemenu').listview('refresh');
                        console.log(i);
                    });

                });
				panel_start += panel_end;
                $.mobile.pageContainer.prepend(panel_start);

                $("#mypanel").panel();
            });

            //console.log(j);

            function eventdate(event_date) {
                var now = new Date();
                var date = now.getDate();
                var month = now.getMonth();
                var year = now.getFullYear();
                var now_num = new Date(year, month, date);
                //console.log(now_num.toString());
                var now_time = (now_num.valueOf());

                //var event_date = "2016-07-29";
                var n_dt = event_date.split("-");
                var then = new Date(n_dt[0], n_dt[1], n_dt[2]);
                var then_num = then.valueOf();
                //console.log(then.toString());
                var then_time = (then.valueOf());

                //COMPARE DATES
                //console.log(now_time);
                //console.log(then_time);
                //console.log(then_time >= now_time);
                return (then_time >= now_time);
            }

            if (localStorage.getItem('ihnbc_data')) {
                //console.log(	$.parseJSON(localStorage.getItem('ihnbc_data')) );
            }




            // $('#people').text('Hello World');
        });

        // app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        // console.log('Received Event: ' + id);
    }
};