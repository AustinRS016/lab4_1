var config = {
    style: 'mapbox://styles/austinrs16/cki58jp44868d19lkiy6l65ns',
    accessToken: 'pk.eyJ1IjoiYXVzdGlucnMxNiIsImEiOiJja2k0NXQ3bTAwcmJ1MnhwYTJpYzM5MXEyIn0.AjrslrDHivRp60zCD1qwGg',
    showMarkers: false,
    theme: "dark",
    alignment: "left",
    title: 'Modern History of Salmon and Steelhead in the Columbia River Basin',
    subtitle: 'Insight to the Impacts of Dams on These Anadromous Fish and Efforts to Remediate the Damage Done',
    byline: 'By Austin Santamaria',
    footer: "Citations:<br>Columbia River. (2019, May 15). Retrieved December 07, 2020, from https://www.americanrivers.org/river/columbia-river/<br>Columbia River: Description, Creation, and Discovery. (n.d.). Retrieved December 07, 2020, from https://www.nwcouncil.org/reports/columbia-river-history/columbiariver<br>Dams: Impacts on salmon and steelhead. (n.d.). Retrieved December 07, 2020, from https://www.nwcouncil.org/reports/columbia-river-history/damsimpacts<br>Fish passage at dams. (n.d.). Retrieved December 02, 2020, from https://www.nwcouncil.org/reports/columbia-river-history/fishpassage<br>Salmon Decline, 1894. (n.d.). Retrieved December 07, 2020, from https://www.oregonhistoryproject.org/articles/historical-records/salmon-decline-1894/<br>Vernita Bar Agreement. (n.d.). Retrieved December 09, 2020, from https://www.nwcouncil.org/reports/columbia-river-history/VernitaBarAgreement <p>Data sources: streamnet.org, cbr.washington.edu and wikipedia</p><p>Special thanks to John Branigan on the Mapbox Solutions Architecture Team for the scrollytelling template</p>",

    chapters: [
        {
            id: 'crShed',
            title: 'Columbia River Watershed',
            image: '',
            description: '<p>"The total length of the river is about 1,243 miles (about 2,000 kilometers). The drainage basin covers 259,000 square miles (670,810 square kilometers), approximately the size of France, drains portions of seven states and British Columbia, and covers three degrees of latitude and nine degrees of longitude"</p> <p>"Dams on the Columbia and its major tributaries, primarily the Snake River, at approximately 1,078 miles its longest feeder stream, produce half of the electricity consumed in the Pacific Northwest"</p><p>(Columbia River: Description, Creation, and Discovery).</p>',
            location: {
                center: [-123, 49.3],
                zoom: 4.6,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
              {layer: "crB", opacity: 1, duration: 150},{layer: "colSnake", opacity: 1,},
            ],
            onChapterExit: [{layer: "crB", opacity: 0},]
        },
        {
            id: 'dams',
            title: 'Dams Along Columbia and Snake Rivers',
            image: '',
            description: 'Inside this watershed the Snake and Columbia rivers are the two biggest and most notable in terms of scale and fish. The Columbia originates in British Columbia and the Snake Originates in Wyoming. There are 34 dams between the two. Chief Joseph on the Columbia and Hells Canyon on the Snake (both in red) hault anadromous fish travel to the rest of their respective watersheds.',
            location: {
              center: [-123, 47.5],
              zoom: 5.1,
              pitch: 0,
              bearing: 0
            },
            onChapterEnter: [{layer: 'dams_copy', opacity: 1}],
            onChapterExit: [{layer: 'dams_copy', opacity: 0},{layer: "colSnake", opacity: 0,}]
           },
        {
            id: 'historic',
            title: 'Historic Range of Salmon and Steelhead Throughout the Columbia River Basin',
            image: '',
            description: '<p>This is roughly the historic range of salmon and steelhead, although some reports indicate salmon even further up the Columbia River in B.C. </p>"The Columbia River was once one of the most productive salmon rivers in the world. Scholars have estimated that between 7.5 and 16 million adult salmon returned annually to the Columbia River prior to white settlement, providing an abundant food source and trade good for the Native peoples of the Columbia River Basin" (Salmon Decline).',
            location: {
              center: [-123, 47.5],
              zoom: 5.1,
              pitch: 0,
              bearing: 0
            },
            onChapterEnter: [{layer: 'historic', opacity: .5,}],
            onChapterExit: [{layer: 'historic', opacity: 0}]
        },
        {
            id: 'current',
            title: 'Current Salmon and Steelhead Range',
            image: '',
            description: '"More than 55 percent of the spawning and rearing habitat once available to salmon and steelhead in the Columbia River Basin is permanently blocked by dams" (Dams: Impacts on salmon and steelhead).<p>Watch this video to see a detailed time lapse of the changing range: <a href="https://www.youtube.com/watch?v=KpDGDyDARFo&feature=emb_title&ab_channel=TheCRITFC">Columbia River Basin Salmon Extirpation Map</a></p>',
            location: {
              center: [-123, 47.5],
              zoom: 5.1,
              pitch: 0,
              bearing: 0
            },
            onChapterEnter: [{layer: 'current', opacity: .6}],
            onChapterExit: [{layer: 'current', opacity: 0}, ]
        },
        {
            id: 'Change',
            title: 'Efforts of Remediation',
            image: '',
            description: '<p>All dams on the Columbia and Snake Rivers below Chief Joseph and Hell Canyon Dams provide means for fish to pass over the dam. In fact, the survival and passage of juvinile fish downstream is a bigger problem.</p> <p>"While fishways, or fish ladders, were for adult fish, dam passage was considered problematic for juvenile fish, and research steadily would prove the assumption" (Fish passage at dams).</p><p> "Biologists estimate that if turbine passage is the only way past a dam, 10 to 15 percent of the fish that are drawn through the turbines will die" (Dams: impacts on salmon and steelhead).</p>',
            location: {
              center: [-123, 47.5],
              zoom: 5.1,
              pitch: 0,
              bearing: 0
            },
            onChapterEnter: [{layer: 'dams_pass', opacity: 1}],
            onChapterExit: [{layer: 'dams_pass', opacity: 0}]
        },
        {
            id: 'vernita',
            title: 'Vernita Bar',
            image: '',
            description: '<p>Vernita Bar, along the Hanford Reach, is a crucial spawning ground for wild chinook salmon and improper river flows have troubled this wild population.</p><p>"In the Vernita Bar Agreement, the mid-Columbia PUDs and Bonneville agree to maintain a minimum outflow from Priest Rapids of 70,000 cubic feet per second, which would provide a maximum river elevation in the Reach for the fish and, hence, a guaranteed amount of spawning habitat in the river"</p> <p>"The mid-Columbia agreement authorized spilling 10 percent of the river flow at each dam during that period of the spring when the majority of the fish were known to be migrating... This spill program began in the spring of 1980. It was the first formal application of spill to pass juvenile fish at dams in the Columbia River Basin" (Vernita Bar Agreement).</p><p>Since the Vernita Bar Agreement numerous efforts have been made to ameliorate the issue of juvinile fish survival. Click <a href="https://www.nwcouncil.org/reports/columbia-river-history/VernitaBarAgreement">this link</a> to read more about the Vernita Bar Agreement.</p>',
            location: {
              center: [-119.89856, 46.63477],
              zoom: 12.26,
              pitch: 18,
              bearing: -1.35
            },
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'hinge',
            title: 'Another Example',
            image: '',
            description: '"The second powerhouse at Bonneville Dam, for example, is a notorious fish killer... the problem became so bad that the Corps had to shut down the powerhouse during the juvenile salmon migration period for most of the 1990s while an effective bypass system was designed and tested" (Fish Passage at Dams).',
            location: {
              center: [-121.95, 45.65],
              zoom: 12.8,
              pitch: 60,
              bearing: 70
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'bonneville',
            title: 'A Case for Resilience',
            image: '',
            description: "Since it's construction in 1938 Bonneville Dam has counted the numbers of certain fish crossing the fish ladder upstream. Below is a graph for the number of adult chinook that have crossed the dam each year. As you can see, recently, salmon returns have been improving. <canvas id='bonChart' width='1600' height='900'></canvas>",
            location: {
              center: [-121.95, 45.65],
              zoom: 12.8,
              pitch: 60,
              bearing: 70
            },
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'preRapids',
            title: 'Back to Vernita',
            image: '',
            description: "Priest Rapids Dam, the first dam past the Snake River fork on the Columbia, also counts fish as they pass over. This is the dam that sits just above Vernita Bar. As we can see chinook salmon returns are trending upwards. <canvas id='preChart' width='1600' height='900'></canvas>",
            location: {
              center: [-119.89205, 46.62846],
              zoom: 11.18,
              pitch: 59.00,
              bearing: -68.90
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'iceHarbor',
            title: 'First Snake River Dam',
            image: '',
            description: "Ice Harbor Dam is the lowest dam on the Snake River and sits just above where the Snake splits off from the Columbia. We can see that both the Columbia and Snake Rivers are trending upward in terms of chinook returns. <canvas id='iceChart' width='1600' height='900'></canvas>",
            location: {
              center: [-118.88616, 46.25457],
              zoom: 14.01,
              pitch: 47.00,
              bearing: 74.24
            },
            onChapterEnter: [],
            onChapterExit: []
        },

        // {
        //     id: 'bonChart',
        //     title: 'Bonneville Chinook Count',
        //     image: '',
        //     description: 'Copy these sections to add to your story.',
        //     location: {
        //       center: [-121.95, 45.65],
        //       zoom: 12.8,
        //       pitch: 60,
        //       bearing: 70
        //     },
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
        // {
        //     id: 'other-identifier',
        //     title: 'Second Title',
        //     image: './path/to/image/source.png',
        //     description: 'Copy these sections to add to your story.',
        //     location: {
        //         center: [-123, 49.3],
        //         zoom: 4.8,
        //         pitch: 0,
        //         bearing: 0
        //     },
        //     onChapterEnter: [
        //       {
        //         layer: 'dams',
        //         opacity: 1
        //       }
        //     ],
        //     onChapterExit: [
        //       {
        //         layer: 'dams',
        //         opcity: 0
        //       }
        //     ]
        // }
    ]
};
