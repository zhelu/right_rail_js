<!-- Sets alternating table row colors and increases font size -->
<!-- Should not affect other html elements because I applied these to specific classes -->
<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
  <script type="text/javascript">
jQuery(document).ready(function() {
  jQuery(".alternatetable tr:even").css("background-color", "#e3e3e3"); 
  jQuery(".alternatetable tr:odd").css("background-color", "#ffffff");
  jQuery(".alternatetable td").css("font-size", "16px");
  jQuery("a.rightRailLink").css("color", "rgb(195,0,0)");
  jQuery("#stations_table").find("td").css("font-size", "1em").css("vertical-align", "middle");
});

// station data for map and table
var city_data = [
  {
    latlng: {lat: 35.0824099, lng: -106.6764794},
    city: "Albuquerque, NM",
    station: [
      {
        id: "KANW-FM (89.1 HD2)",
        times: [
          {
            day: "Mon",
            time: "10 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 46.1829287, lng: -123.8620687},
    city: "Astoria, OR",
    station: [
      {
        id: "KOAC-FM (89.7)",
        times: [
          {
            day: "Sun",
            time: "1 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 44.7746156, lng: -117.849238},
    city: "Baker City, OR",
    station: [
      {
        id: "KOBK-FM (88.9)",
        times: [
          {
            day: "Sun",
            time: "1 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 43.5812427, lng: -83.9185544},
    city: "Bay City, MI",
    station: [
      {
        id: "WUCX-FM (90.1)",
        times: [
          {
            day: "Sat",
            time: "6 AM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 44.0611151, lng: -121.3846838},
    city: "Bend, OR",
    station: [
      {
        id: "KOAB-FM (91.3)",
        times: [
          {
            day: "Sun",
            time: "1 PM"
          },
        ]
      }
    ]
  },
  {
    // MPN
    latlng: {lat: 30.4264467, lng: -89.0656768},
    city: "Biloxi, MS",
    station: [
      {
        id: "WMAH-FM (90.3)",
        times: [
          {
            day: "Sun",
            time: "12 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 43.8553558, lng: -74.4522479},
    city: "Blue Mountain Lake, NY",
    station: [
      {
        id: "WXLH-FM (91.3)",
        times: [
          {
            day: "Sat",
            time: "6 AM"
          },
        ]
      }
    ]
  },
  {
    // MPN
    latlng: {lat: 34.6605329, lng: -88.6396426},
    city: "Booneville, MS",
    station: [
      {
        id: "WMAE-FM (89.5)",
        times: [
          {
            day: "Sun",
            time: "12 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 43.4820127, lng: -75.3374477},
    city: "Boonville, NY",
    station: [
      {
        id: "WXLB-FM (91.7)",
        times: [
          {
            day: "Sat",
            time: "6 AM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 42.3133735, lng: -71.0571571},
    city: "Boston, MA",
    station: [
      {
        id: "WGBH-FM (89.7)",
        times: [
          {
            day: "Sat",
            time: "12 PM"
          },
          {
            day: "Thu",
            time: "9 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 41.746849, lng: -70.0688224},
    city: "Brewster, MA",
    station: [
      {
        id: "WZAI-FM (94.3)",
        times: [
          {
            day: "Sat",
            time: "1 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 44.1165923, lng: -73.1526921},
    city: "Bristol, VT",
    station: [
      {
        id: "WXLQ-FM (90.5)",
        times: [
          {
            day: "Sat",
            time: "6 AM"
          },
        ]
      }
    ]
  },
  {
    // MPN
    latlng: {lat: 31.4639758, lng: -90.8689846},
    city: "Bude, MS",
    station: [
      {
        id: "WMAU-FM (88.9)",
        times: [
          {
            day: "Sun",
            time: "12 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 43.5891036, lng: -119.0774461},
    city: "Burns, OR",
    station: [
      {
        id: "KOBN-FM (90.1)",
        times: [
          {
            day: "Sun",
            time: "1 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 44.6011297, lng: -75.199066},
    city: "Canton, NY",
    station: [
      {
        id: "WSLU-FM (89.5)",
        times: [
          {
            day: "Sat",
            time: "6 AM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 44.1255507, lng: -76.3486265},
    city: "Cape Vincent, VT",
    station: [
      {
        id: "WSLZ-FM (88.1)",
        times: [
          {
            day: "Sat",
            time: "6 AM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 46.7245399, lng: -122.96589},
    city: "Centralia, WA",
    station: [
      {
        id: "KSWS-FM (88.9)",
        times: [
          {
            day: "Sat",
            time: "9 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 38.0400874, lng: -78.4849739},
    city: "Charlottesville, VA",
    station: [
      {
        id: "WMRY-FM (103.5)",
        times: [
          {
            day: "Mon",
            time: "3 PM"
          },
        ]
      }
    ]
  },
  {
    // Chicago Public Media (WBEZ)
    latlng: {lat: 41.5976381, lng: -87.1417128},
    city: "Chesterton, IN",
    station: [
      {
        id: "WBEW-FM (89.5)",
        times: [
          {
            day: "Sun",
            time: "6 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 41.8333925, lng: -88.0123393},
    city: "Chicago, IL",
    station: [
      {
        id: "WBEZ-FM (91.5)",
        times: [
          {
            day: "Sun",
            time: "6 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 41.4949425, lng: -81.70586},
    city: "Cleveland, OH",
    station: [
      {
        id: "WCPN-FM (90.3)",
        times: [
          {
            day: "Tu",
            time: "8 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 30.590776, lng: -96.4317463},
    city: "College Station, TX",
    station: [
      {
        id: "KAMU-FM2 (90.9)",
        times: [
          {
            day: "Sat",
            time: "3 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 27.7042645, lng: -97.3801658},
    city: "Corpus Christi, TX",
    station: [
      {
        id: "KEDT-FM (90.3 HD2)",
        times: [
          {
            day: "Sun",
            time: "10 AM"
          },
          {
            day: "Sun",
            time: "8 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 44.5629672, lng: -123.3185558},
    city: "Corvallia, OR",
    station: [
      {
        id: "KOAC-AM (550)",
        times: [
          {
            day: "Sun",
            time: "1 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 39.7640021, lng: -105.1352965},
    city: "Denver, CO",
    station: [
      {
        id: "KUVO-FM (89.3 HD2)",
        times: [
          {
            day: "Sun",
            time: "7 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 41.6881565, lng: -85.9652349},
    city: "Elkhart, IN",
    station: [
      {
        id: "WVPE-FM (88.1 HD2)",
        times: [
          {
            day: "Sun",
            time: "9 AM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 44.0606441, lng: -123.1925899},
    city: "Eugene, OR",
    station: [
      {
        id: "KOPB-AM (1600)",
        times: [
          {
            day: "Sun",
            time: "1 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 37.297811, lng: -78.4037901},
    city: "Farmville, VA",
    station: [
      {
        id: "WMLU-FM (91.3)",
        times: [
          {
            day: "Mon",
            time: "3 PM"
          },
          {
            day: "Th",
            time: "3pm"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 27.428787, lng: -80.3411183},
    city: "Fort Pierce, FL",
    station: [
      {
        id: "WQCS-FM (88.9 HD2)",
        times: [
          {
            day: "Sa",
            time: "12 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 29.6861968, lng: -82.4598313},
    city: "Gainesville, FL",
    station: [
      {
        id: "WUFT-FM (89.1)",
        times: [
          {
            day: "Su",
            time: "11 AM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 44.882996, lng: -124.0398366},
    city: "Geleneden Beach, OR",
    station: [
      {
        id: "KOGL-FM (89.3)",
        times: [
          {
            day: "Sun",
            time: "1 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 44.3364421, lng: -75.4767483},
    city: "Gouverneur, NY",
    station: [
      {
        id: "WXLG-FM (90.5)",
        times: [
          {
            day: "Sat",
            time: "6 AM"
          },
        ]
      }
    ]
  },
  {
    // MPN
    latlng: {lat: 33.5116763, lng: -90.2682365},
    city: "Greenwood, MS",
    station: [
      {
        id: "WMAO-FM (90.9)",
        times: [
          {
            day: "Sun",
            time: "12 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 38.4393105, lng: -78.8711824},
    city: "Harrisonburg, VA",
    station: [
      {
        id: "WMRA-FM (90.7)",
        times: [
          {
            day: "Mon",
            time: "3 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 45.7060455, lng: -121.5659305},
    city: "Hood River, OR",
    station: [
      {
        id: "KHRV-FM (90.1)",
        times: [
          {
            day: "Sun",
            time: "1 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 41.0591193, lng: -123.7118487},
    city: "Hoopa, CA",
    station: [
      {
        id: "KIDE-FM (91.3)",
        times: [
          {
            day: "Sat",
            time: "9 AM"
          },
          {
            day: "Sun",
            time: "9 AM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 29.817178, lng: -95.4012915},
    city: "Houston, TX",
    station: [
      {
        id: "KUHF-FM (88.7)",
        times: [
          {
            day: "Sun",
            time: "3 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 43.7864168, lng: -74.4429496},
    city: "Indian Lake, NY",
    station: [
      {
        id: "WXLE-FM (105.9)",
        times: [
          {
            day: "Sat",
            time: "6 AM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 28.8446595, lng: -82.3775394},
    city: "Inverness, FL",
    station: [
      {
        id: "WJUF-FM (90.1)",
        times: [
          {
            day: "Su",
            time: "11 AM"
          },
        ]
      }
    ]
  },
  {
    // MPN
    latlng: {lat: 32.310251, lng: -90.3289724},
    city: "Jackson, MS",
    station: [
      {
        id: "WMPN-FM (91.3)",
        times: [
          {
            day: "Sun",
            time: "12 PM"
          },
        ]
      }
    ]
  },
  {
    // Chicago Public Media (WBEZ)
    latlng: {lat: 41.0959988, lng: -87.9415013},
    city: "Kankakee, IL",
    station: [
      {
        id: "WBEK-FM (91.1)",
        times: [
          {
            day: "Sun",
            time: "6 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 45.3241411, lng: -118.102395},
    city: "La Grande, OR",
    station: [
      {
        id: "KTVR-FM (90.3)",
        times: [
          {
            day: "Sun",
            time: "1 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 44.2843894, lng: -74.0037255},
    city: "Lake Placid, NY",
    station: [
      {
        id: "WXLL-FM (91.7)",
        times: [
          {
            day: "Sat",
            time: "6 AM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 42.1894427, lng: -120.3605782},
    city: "Lakeview, OR",
    station: [
      {
        id: "KOAP-FM (88.7)",
        times: [
          {
            day: "Sun",
            time: "1 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 46.4043244, lng: -116.804848},
    city: "Lapwai, ID",
    station: [
      {
        id: "KIYE-FM (88.7)",
        times: [
          {
            day: "Sat",
            time: "8 AM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 37.7801203, lng: -79.4384326},
    city: "Lexington, VA",
    station: [
      {
        id: "WMRL-FM (89.9)",
        times: [
          {
            day: "Mon",
            time: "3 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 43.7870555, lng: -75.4936948},
    city: "Lowville, NY",
    station: [
      {
        id: "WXLD-FM (89.7)",
        times: [
          {
            day: "Sat",
            time: "6 AM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 33.5910645, lng: -102.0285284},
    city: "Lubbock, TX",
    station: [
      {
        id: "KTTZ-FM2 (89.1)",
        times: [
          {
            day: "Sat",
            time: "1 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 44.8496456, lng: -74.3021401},
    city: "Malone, NY",
    station: [
      {
        id: "WSLO-FM (90.9)",
        times: [
          {
            day: "Sat",
            time: "6 AM"
          },
        ]
      }
    ]
  },
  {
    // MPN
    latlng: {lat: 32.3760636, lng: -88.7620006},
    city: "Meridian, MS",
    station: [
      {
        id: "WMAW-FM (88.1)",
        times: [
          {
            day: "Sun",
            time: "12 PM"
          },
        ]
      }
    ]
  },
  {
    // MPN
    latlng: {lat: 33.470847, lng: -88.8170803},
    city: "Mississippi State, MS",
    station: [
      {
        id: "WMAB-FM (89.9)",
        times: [
          {
            day: "Sun",
            time: "12 PM"
          },
        ]
      }
    ]
  },
  {
    // Chicago Public Media (WBEZ)
    latlng: {lat: 41.3792642, lng: -88.4998209},
    city: "Morris, IL",
    station: [
      {
        id: "WBEQ-FM (90.7)",
        times: [
          {
            day: "Sun",
            time: "6 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 46.734897, lng: -117.000883},
    city: "Moscow, ID",
    station: [
      {
        id: "KRFA-FM (91.7)",
        times: [
          {
            day: "Sat",
            time: "9 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 47.1316339, lng: -119.26774},
    city: "Moses Lake, WA",
    station: [
      {
        id: "KLWS-FM (91.5)",
        times: [
          {
            day: "Sat",
            time: "9 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 48.4231124, lng: -122.3108685},
    city: "Mt. Vernon, WA",
    station: [
      {
        id: "KMWS-FM (90.1)",
        times: [
          {
            day: "Sat",
            time: "9 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 41.3159319, lng: -70.1348257},
    city: "Nantucket, MA",
    station: [
      {
        id: "WNAN-FM (91.1)",
        times: [
          {
            day: "Sat",
            time: "1 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 40.7033127, lng: -73.979681},
    city: "New York, NY",
    station: [
      {
        id: "WNYC-AM (820)",
        times: [
          {
            day: "Sat",
            time: "7 AM"
          },
          {
            day: "Sun",
            time: "8 PM"
          },
        ]
      },
      {
        id: "WNYE-FM (91.5)",
        times: [
          {
            day: "Fri",
            time: "12 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 43.6978573, lng: -73.9947206},
    city: "North Creek, NY",
    station: [
      {
        id: "WXLG-FM (89.9)",
        times: [
          {
            day: "Sat",
            time: "6 AM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 48.4142599, lng: -119.51976},
    city: "Omak, WA",
    station: [
      {
        id: "KQWS-FM (90.1)",
        times: [
          {
            day: "Sat",
            time: "9 PM"
          },
        ]
      }
    ]
  },
  {
    // MPN
    latlng: {lat: 34.359984, lng: -89.5934277},
    city: "Oxford, MS",
    station: [
      {
        id: "WMAV-FM (90.3)",
        times: [
          {
            day: "Sun",
            time: "12 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 30.2056529, lng: -85.7414004},
    city: "Panama City, FL",
    station: [
      {
        id: "WFSW-FM (89.1)",
        times: [
          {
            day: "Wed",
            time: "1 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 45.6735777, lng: -118.8455002},
    city: "Pendleton, OR",
    station: [
      {
        id: "KRBM-FM (90.9)",
        times: [
          {
            day: "Sun",
            time: "1 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 44.5766356, lng:-73.5516201},
    city: "Peru, NY",
    station: [
      {
        id: "WXLU-FM (88.1)",
        times: [
          {
            day: "Sat",
            time: "6 AM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 33.6054149, lng: -112.125051},
    city: "Phoenix, AZ",
    station: [
      {
        id: "KJZZ-FM (91.5)",
        times: [
          {
            day: "Sat",
            time: "9 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 44.6962042, lng: -73.4919466},
    city: "Plattsburgh, NY",
    station: [
      {
        id: "WXLU-FM (88.1)",
        times: [
          {
            day: "Sat",
            time: "6 AM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 45.542094, lng: -122.9346037},
    city: "Portland, OR",
    station: [
      {
        id: "KOPB-FM (91.5)",
        times: [
          {
            day: "Sun",
            time: "1 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 46.730479, lng: -117.1522585},
    city: "Pullman, WA",
    station: [
      {
        id: "KWSU-AM (1250)",
        times: [
          {
            day: "Sat",
            time: "9 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 40.7766079, lng: -111.920485},
    city: "Salt Lake City, UT",
    station: [
      {
        id: "KCPW-FM (88.3)",
        times: [
          {
            day: "Sat",
            time: "12 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 44.3279363, lng: -74.1506915},
    city: "Saranac Lake, NY",
    station: [
      {
        id: "WXLL-FM (90.5)",
        times: [
          {
            day: "Sat",
            time: "6 AM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 47.6728404, lng: -117.4121499},
    city: "Spokane, WA",
    station: [
      {
        id: "KSFC-FM (91.9)",
        times: [
          {
            day: "Sun",
            time: "2 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 30.467064, lng: -84.3969411},
    city: "Tallahassee, FL",
    station: [
      {
        id: "WFSU-FM (88.9)",
        times: [
          {
            day: "Wed",
            time: "1 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 45.6094757, lng: -121.2088798},
    city: "The Dalles, OR",
    station: [
      {
        id: "KOTD-FM (89.7)",
        times: [
          {
            day: "Sun",
            time: "1 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 45.4626942, lng: -123.8474115},
    city: "Tillamook, OR",
    station: [
      {
        id: "KTMK-FM (91.1)",
        times: [
          {
            day: "Sun",
            time: "1 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 44.2331537, lng: -74.4937505},
    city: "Tupper Lake, NY",
    station: [
      {
        id: "WXLS-FM (88.3)",
        times: [
          {
            day: "Sat",
            time: "6 AM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 31.5532527, lng: -97.327663},
    city: "Waco, TX",
    station: [
      {
        id: "KWBU-FM (103.3)",
        times: [
          {
            day: "Sat",
            time: "7 AM"
          },
          {
            day: "Mon",
            time: "8 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 46.0627549, lng: -118.3337259},
    city: "Walla Walla, WA",
    station: [
      {
        id: "KWWS-FM (89.7)",
        times: [
          {
            day: "Sat",
            time: "9 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 43.9724465, lng: -75.9188006},
    city: "Watertown, NY",
    station: [
      {
        id: "WSLJ-FM (88.9)",
        times: [
          {
            day: "Sat",
            time: "6 AM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 41.5299815, lng: -70.6686769},
    city: "Woods Hole, MA",
    station: [
      {
        id: "WCAI-FM (90.1)",
        times: [
          {
            day: "Sat",
            time: "1 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 46.5940609, lng: -120.5480901},
    city: "Yakima, WA",
    station: [
      {
        id: "KYVT-FM (88.5)",
        times: [
          {
            day: "Sat",
            time: "9 PM"
          },
        ]
      }
    ]
  },
  {
    latlng: {lat: 32.6056027, lng: -114.712143},
    city: "Yuma, AZ",
    station: [
      {
        id: "KAWC-FM (88.9)",
        times: [
          {
            day: "Sat",
            time: "7 AM"
          },
        ]
      }
    ]
  },
];

var map;

function buildContentString(city) {
  var content = "<strong>City:</strong> " + city["city"] + "<br/>";
  for (var station_index = 0; station_index < city["station"].length; ++station_index) {
    var station = city["station"][station_index];
    content = content.concat("<strong>Station:</strong> " + station["id"] + "<br/><strong>Time:</strong> ");
      var time_count = station["times"].length;
      for (var i = 0; i < time_count - 1; ++i) {
        var time = station["times"][i];
        content = content.concat(time["day"] + " " + time["time"] + ", ");
      }
      var time = station["times"][time_count - 1];
      content = content.concat(time["day"] + " " + time["time"]);
      if (station_index < city["station"].length - 1) {
        content = content.concat("</br>");
      }
  }
  return content;
}

function initialize() {
  if (!jQuery("#map-canvas").length) {
    // Skip all of this for pages that don't have a map.
    return;
  }
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 3,
    center: {lat: 37.0902, lng: -95.7129}
  });
  for (var city_index = 0; city_index < city_data.length; city_index++) {
    (function() {
    var city = city_data[city_index];
    var marker = new google.maps.Marker({
      position: city["latlng"],
      icon: "https://maps.gstatic.com/intl/en_us/mapfiles/markers2/measle.png",
      map: map,
    });
    var infowindow = new google.maps.InfoWindow({
      content: buildContentString(city),
      position: city["latlng"]
    });
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
    });})();
  }
  for (var city_index = 0; city_index < city_data.length; city_index++) {
    (function() {
      var city = city_data[city_index];
      var city_row_span = 0;
      var time_row_span = [];
      for (var i = 0; i < city["station"].length; i++) {
        city_row_span = city_row_span + city["station"][i]["times"].length;
        time_row_span.push(city["station"][i]["times"].length);
      }
      for (var i = 0; i < city["station"].length; i++) {
        var station = city["station"][i];
        for (var j = 0; j < station["times"].length; j++) {
          var time = station["times"][j];
          var row = jQuery("<tr></tr>");
          jQuery("#station_table").append(row);
          if (i == 0 && j == 0) {
            var cell = jQuery("<td style='font-size: 1em !important; vertical-align: middle !important;' rowspan=" + city_row_span + ">" + city["city"] + "</td>");
            row.append(cell);
          }
          if (j == 0) {
            var cell = jQuery("<td style='font-size: 1em !important; vertical-align: middle !important;' rowspan=" + time_row_span[i] + ">" + station["id"] + "</td>");
            row.append(cell);
          }
          row.append(jQuery("<td style='font-size: 1em !important; vertical-align: middle !important;'>" + time["day"] + "</td>"));
          row.append(jQuery("<td style='font-size: 1em !important; vertical-align: middle !important;'>" + time["time"] + "</td>"));
        }
      }
    })();
  }
  jQuery("#station_loading_row").remove();
}

google.maps.event.addDomListener(window, 'load', initialize);

</script>